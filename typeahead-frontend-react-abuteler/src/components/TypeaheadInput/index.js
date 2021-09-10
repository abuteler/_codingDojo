import PropTypes from 'prop-types';
import React, { useCallback, useState, useMemo, useRef } from 'react';
import Spinner from './Spinner';
import './styles.css';
import SuggestionsList from './SuggestionsList';

/**
 * This endpoint supports the following requests:
 * 1. GET /typeahead: lists suggestions for no prefix
 * 2. GET /typeahead/{prefix}: lists suggestions for the specified prefix
 * 3. POST /typeahead: receives a JSON body like { "name": "Matilda" } to mark a new selection for that name
 *
 * Note the endpoint itself already has the base path /typeahead included, so you only need to append
 * the `/{prefix}` segment for the 2nd request, or nothing for the other two.
 *
 * Just to keep in mind, the first time in while this endpoint is called (or when increasing capacity),
 * it will take a few seconds (2-4 seconds usually) because of ramp up time. But normal requests should be quicker,
 * in the order of 200ms.
 */
const ENDPOINT = 'https://diykd2rwv0.execute-api.us-east-1.amazonaws.com/typeahead';

const KEY_CODES = {
  UP: 38,
  DOWN: 40,
  ENTER: 13,
};


export default function TypeaheadInput({ onPick }) {

  /**
   * In JavaScript, there is a beautiful, elegant, highly expressive language
   * that is buried under a steaming pile of good intentions and blunders.
   * -- Douglas Crockford
   */

  const [ loading, setLoading ] = useState(false)
  const [ controller, setController ] = useState()
  const [ debounceTimeout, setDebounceTimeout ] = useState(undefined)
  const [ prefix, setPrefix ] = useState('')
  const [ suggestions, setSuggestions ] = useState([])
  const [ cursor, setCursor ] = useState()

  const debounce = useCallback((func, delay) => {
    return function() {
      clearTimeout(debounceTimeout)
      setDebounceTimeout(setTimeout(() => func.apply(this, arguments), delay))
    }
  }, [debounceTimeout])

  ///// START API calls logic
  const getSuggestionsList = useCallback((prefix, controller) => {
    // TODO: avoid unnecessary calls to API by maintaining local store and comparing last fetched prefix to current prefix
    setLoading(true)

    // avoid stale results by cancelling previous request if still ongoing
    if (controller) {
      controller.abort()
    }
    const newController = new AbortController()
    const { signal } = newController
    setController(newController)

    const URL = (prefix.length > 0) ? `${ENDPOINT}/${prefix}` : ENDPOINT
    fetch(URL, { signal })
    .then(response => response.json())
    .then(data => {
      setSuggestions(data)
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
    })
  }, [setController, setSuggestions, setLoading])

  const debouncedGetSuggestionsList = useMemo(value => debounce(getSuggestionsList, 250), [debounce, getSuggestionsList])

  const postUserSelection = useCallback(name => {
    fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' },
      body: JSON.stringify({ 'name': name })
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  ///// END API calls logic


  ///// START Handle user input logic
  const handlePrefixChange = value => {
    setPrefix(value)
    // debouncing API calls
    debouncedGetSuggestionsList(value, controller)
  }

  const selectItem = useCallback(() => {
    if(suggestions[cursor] !== undefined) {
      onPick(suggestions[cursor])
      postUserSelection(suggestions[cursor].name)
      setCursor(undefined)
      setPrefix('')
      setSuggestions([])
    }
  }, [onPick, postUserSelection, suggestions, cursor, setCursor, setPrefix, setSuggestions])

  const handleKeyDown = useCallback(ev => {
    const { keyCode } = ev
    if (keyCode === KEY_CODES['UP'] || keyCode === KEY_CODES['DOWN']) {
      let newIndex
      switch (cursor) {
        case undefined:
          newIndex = (keyCode === KEY_CODES['UP']) ? suggestions.length-1 : 0
          break
        case 0:
          newIndex = (keyCode === KEY_CODES['UP']) ? suggestions.length-1 : cursor+1
          break
        case suggestions.length-1:
          newIndex = (keyCode === KEY_CODES['UP']) ? cursor-1 : 0
          break
        default:
          newIndex = (keyCode === KEY_CODES['UP']) ? cursor-1 : cursor+1
          break
      }
      setCursor(newIndex)
    }
    if (keyCode === KEY_CODES['ENTER']) {
      if (cursor === undefined) {
        setSuggestions([])
      } else {
        selectItem()
      }
      ev.target.blur()
    }
  }, [cursor, suggestions, selectItem])

  const listRef = useRef()
  ///// END Handle user input logic

  return (
    <div className="TypeaheadInput">
      <input
        type="text"
        value={prefix}
        onFocus={({ target: { value }}) => getSuggestionsList(value, controller)}
        onBlur={() => setTimeout(()=>setSuggestions([]), 200)}
        onChange={({ target: { value } }) => {
          handlePrefixChange(value)
        }}
        onKeyDown={ev => {
          handleKeyDown(ev)
        }}
      />
      <Spinner show={loading} />
      <SuggestionsList
        suggestions={suggestions}
        cursor={cursor}
        onSuggestionClick={item => selectItem(item)}
        onSuggestionHover={index => {setCursor(index)}}
        ref={listRef}
      />
    </div>
  );
}

TypeaheadInput.propTypes = {
  onPick: PropTypes.func.isRequired,
};
