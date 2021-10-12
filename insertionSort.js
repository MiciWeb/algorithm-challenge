// Sort an array with insertion sort method that doesn't mutate the parameters (pure function)

let arr = [1, 4, 2, 3]
function swap_elem(arr) {
  let array = arr.slice()
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i; j > 0; j--) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
      }
    }
  }
  return array
}
console.log(swap_elem(arr))
