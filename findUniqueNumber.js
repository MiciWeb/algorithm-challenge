// There is an array with some numbers.
// All numbers are equal except for one.
// Try to find it!

function findUniq(arr) {
    let sort = arr.sort((a, b) => a-b)
    for (let i = 0; i < sort.length; i++) {
        if(sort[0] != sort[1]){
            return sort[0]
        }
        return sort.pop()
    }
}