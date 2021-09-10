<template>
  <div id="root" class="main-container">
    <header>
      <h1>Online Image Gallery Test</h1>
    </header>
    <section v-if="isAuthenticated">
      <router-view :token="authToken"></router-view>
    </section>
    <section v-else-if="!isAuthenticated && !isLoading">
      <h2>Something went wrong. Please try again in a few minutes or contact us for help.</h2>
    </section>
    <section v-else>
      <h2>Loading...</h2>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import { apiURL, apiKey } from './constants'

export default {
  name: 'App',
  components: {},
  data () {
    return {
      isLoading: true,
      isAuthenticated: false,
      authToken: null
    }
  },
  mounted() {
    console.log('Auth init...')
    const CI = this,
      body = { apiKey: apiKey },
      options = {
        headers: {
          'Content-Type': 'text/plain',
        }
      }

    axios.post(apiURL + '/auth' , body, options)
      .then(response => {
        const { data: { token } } = response
        CI.authToken = token
        CI.isLoading = false
        CI.isAuthenticated = true
      })
      .catch(error => {
        // handle error
        console.log('error: ', error);
        CI.isLoading = false
      })
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
