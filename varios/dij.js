/* 
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Elie's favorite color is green"
    
    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Elie's favorite color is blue" 
    
    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/

function bind(fn, thisArg){
    
}




//    2)



/*
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the parameters passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

function flip(fn, thisArg){
    
}

Examples:
    function personSubtract(a,b,c){
        return this.firstName + " subtracts " + (a-b-c);
    }
    var person = {
        firstName: 'Elie'
    }
    
    var flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Elie subtracts -4"
    
    var flipFn2 = flip(personSubtract, person, 5,6);
    flipFn2(7,8). // "Elie subtracts -4"

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22
*/

//ES6
const flip = (fn, that, ...extraArgs) => {
  function flippedFn (...args) {
    const allParams = [...extraArgs, ...args];
    const reversedParams = allParams.reverse();
    return fn.apply(that, reversedParams);
  }
  return flippedFn;
}

//ES5
function flip (fn, that, ...extraArgs) {
  function flippedFn (...args) {
    const allParams = [...extraArgs, ...args];
    const reversedParams = allParams.reverse();
    return fn.apply(that, reversedParams);
  }
  return flippedFn;
}




//    1)



function mapFilterAndReduce(arr){
  return arr.map(function(val){
    return val.firstName
  }).filter(function(val){
    return val.length < 5;
  }).reduce(function(acc,next){
    acc[next] = next.length
    return acc;
  }, {})
}
const mapFilterAndReduceES6 = arr => arr.map(val => val.firstName)
  .filter(val => val.length < 5)
    .reduce((acc, next) => {
      acc[next] = next.length;
      return acc;
    }, {});

const DijinnsArray = [
  { firstName: 'Dijiño', edad: 32 },
  { firstName: 'Aletas', edad: 38 },
  { firstName: 'Tess', edad: null },
  { firstName: 'Coki', edad: 36 },
  { firstName: 'Lu', edad: 37 }
];
//map:
// ['Dijiño', 'Aletas', 'Tess', 'Coki', 'Lu']
//filter:
// ['Tess', 'Coki', 'Lu']
// reduce:
//1era iteracion del reduce
//estado inicial del acumulador: objeto vacio {} y en next "Tess"
// {'Tess': 4}
//2da iteracion del reduce
//estado inicial del acumulador: objeto { "Tess": 4 } y en next "Coki"
// {'Tess': 4, "Coki": 4}
//3era iteracion del reduce
// {'Tess': 4, "Coki": 4, "Lu": 2 }