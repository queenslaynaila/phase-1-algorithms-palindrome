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
  Declare a function isPalindrom 
    take in a word argument 
     reverse the letters in word
      if the word reversed is same as word
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

