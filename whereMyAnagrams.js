function anagrams(word, words) {
    let correct = word.split("").sort().join("")
    return words.filter(item => item.split("").sort().join("") === correct)
}
