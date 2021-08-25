// In this simple Kata your task is to create a function that turns a string into a Mexican Wave.
// You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
function wave(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            arr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1))
        }
    }
    return arr;
}
