// Write a function that will find all the anagrams of a word from a list. 
// You will be given two inputs a word and an array with words.
// You should return an array of all the anagrams or an empty array if there are none. 
// Example anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
function anagrams(word, words) {
    let correct = word.split("").sort().join("")
    return words.filter(item => item.split("").sort().join("") === correct)
}
