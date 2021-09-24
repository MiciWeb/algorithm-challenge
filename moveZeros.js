// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

var moveZeros = function (arr) {
  let zero = [];
for (let i = arr.length; i>=0; i--) {
    if(arr[i] === 0){
      zero.push(arr[i])
      arr.splice(i,1)
    }
  }
  return arr.concat(zero)
}

// Higher order function way
var moveZeros = function (arr) {
 return arr.filter(item=> item !== 0).concat(arr.filter(item => item === 0))
}
