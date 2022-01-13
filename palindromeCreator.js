//Have the function PalindromeCreator (str) take the str parameter being passed and determine if it is possible to create apalindromic string
//it the input string is already a palindrome, your program should return the string palindrome
//For example: if str is "abichba* then you can remove the characters je to produce "abhba" which is a palindrom

function palindromeCreator(str) {
  let reverse = str.split("").reverse().join("");
  let arr = []
  if (reverse === str) {
    return str
  } else {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== reverse[i]) {
        arr.push(str[i])
      }
    }
    return arr.join("")
  }

}
