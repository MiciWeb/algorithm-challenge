// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parens) {
  let strOpen = [];
  let strClose = [];

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      strOpen.push(parens[i])
    } else if (parens[i] === ")") {
      strClose.push(parens[i])
    }
  }
  if (strClose.length === strOpen.length && parens[0] !== ")" && parens.slice(-1) !== "(") {
    return true
  } else {
    return false
  }
}
