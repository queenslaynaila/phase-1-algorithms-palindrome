function isPalindrome(word) {
  const wordReversed = word.split("").reverse().join("");
  if (word === wordReversed) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  Writet function isPalindrome
  isPalindrom takes a string as argument
  it reverses the string letters
  if the value of the string reversed is the same as the string
      return false
      else true
*/

/*
  Add written explanation of your solution here
  the function takes a variable word reprsenting the string
  To reverse word 
      Separate letters in word into an array via split method
      reverse the order o fthe words via the array reverse methods
      join the words back together via join 
  Add an if statement returning true if the string reversed 
  is the same as its original form .Else return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

