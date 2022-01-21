// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

function order(words) {
  let arr = words.split(" ")
  let arrPos = new Array(arr.length);
  let numberInString;
  for (let i = 0; i < arr.length; i++) {
    numberInString = parseInt(arr[i].match(/\d+/))
    arrPos[numberInString] = arr[i]
  }
  return arrPos.join(" ").trim()
}
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))

// better solution
function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
} 
