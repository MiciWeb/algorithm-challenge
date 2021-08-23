function anagrams(word, words) {
    let split;
    let join;
    let arr = [];
    let correct = word.split("").sort().join("")
    for (let i = 0; i < words.length; i++) {
        split = words[i].split("")
        console.log(split)
        join = split.sort().join("")
        join == correct ? arr.push(words[i]) : []
    }
    return arr
}
