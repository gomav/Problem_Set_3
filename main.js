// Problem 1
// Write a function palindrome that takes a single string parameter and returns
// true if the parameter is a palindrome (the string is the same forward as it is
// backward), otherwise returns false. For example: palindrome("racecar") should
// return true because "racecar" is also "racecar" backwards.

// var palidrome = function(string){
//   var stringArray = string.toLowerCase().split('');
//   var reverseArray = [];
//   for(var i=string.length-1; i>=0; i--){
//     reverseArray.push(stringArray[i]);
//   }
//   newString = reverseArray.join('');
//   return newString === string.toLowerCase();
// };
//
// console.log(palidrome('racecar'));
// console.log(palidrome('aibohphobia'));
// console.log(palidrome('javascript'));
// console.log(palidrome('tonight'));

// Problem 2
// Write a function dashInsert that takes a single num parameter and returns the
// num with inserted dashes ('-') between adjacent odd digits. For example: if num
// is 454793 the output should be "4547-9-3".
var dashInsert = function(num){
  var numFormat = num.toString().split('');
  var newArray = [];
  for(var i = 0; i<numFormat.length; i++){
    if(newArray.length === 0){
      newArray.push(numFormat[i]);
    }
    else if ((newArray[i-1]%2 !== 0) && (numFormat[i]%2 !== 0)){
      newArray.push('-' + numFormat[i]);
    }
    else {
      newArray.push(numFormat[i]);
    }
  }
  var dashedResult = newArray.join('');
  return dashedResult;

};

console.log(dashInsert(454793));
console.log(dashInsert(5678335));
console.log(dashInsert(90875138543));



// Bonus: Write a function caesarCipher that takes a string and number parameter
// and performs a Caesar Cipher shift on it using the num parameter as the
// shifting number. A Caesar Cipher works by shifting each letter in the string N
// places down in the alphabet (in this case N will be num). Punctuation, spaces,
// and capitalization should remain intact. For example if the string is "Caesar
// Cipher" and num is 2 the output should be "Ecguct Ekrjgt".

var caesarCipher = function(secret){

};
