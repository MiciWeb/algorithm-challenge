// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word.
// Leave punctuation marks untouched.

function pigIt(str){
  let arr = str.split(" ")

   let ponctuation = arr.indexOf("!") !== -1 ? " " + arr.splice(arr.indexOf("!"), 1) : ""
   let ponctuation2 = arr.indexOf("?") !== -1 ? " " + arr.splice(arr.indexOf("?"), 1) : ""


  let end = arr.map(item => item.concat(item[0]).slice(1).concat("ay")).join(" ")
  
  if(str.split("").indexOf("!") !== -1){
     return end + ponctuation
  }
  else if(str.split("").indexOf("?") !== -1){
     return end + ponctuation2
  }else{
    return end
  }
}
