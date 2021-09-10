/**
 * @param {string} initial
 * @param {string} goal
 * @return {number}
 */
// Input 1: abc , acdbc
// Input 2: abc , abcbc

function minimumConcat(initial, goal) {
  function getAllSubstrings(string) {
      let substringsArr = [];
      let leftToRight = '';
      let rightToLeft = '';
      for (let i = 0; i < string.length; i++) {
          leftToRight = string.substr(i, string.length);
          if(substringsArr.indexOf(leftToRight) === -1) substringsArr.push(leftToRight);
          rightToLeft = string.substr(0, string.length-i)
          if(substringsArr.indexOf(rightToLeft) === -1) substringsArr.push(rightToLeft);
      }
      return substringsArr;
  }
  function concatStrings(strA, strB) {

  }

  let result = 0;
  let goalCharsArr = [];
  let char = '';
  for (let i = 0; i < goal.length; i++) {
      char = goal.slice(i, i+1);
      if ( char !== '') goalCharsArr.push(char);
  }
  goalCharsArr.forEach(char => {
      if (initial.indexOf(char) === -1) result = -1;
  });
  if (result === -1) return result;

  
  let substringsInitial = getAllSubstrings(initial);
  let substringsGoal = getAllSubstrings(initial);
  let sortedGoalArr = substringsGoal.sort(unit => unit.length);
  //ran out of time

  return result;
}

var initial = readline();
var goal = readline();
print(minimumConcat(initial, goal));