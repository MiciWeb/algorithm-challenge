// You will be given a number and you will need to return it as a string in Expanded Form. For example:  
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
function expandedForm(num) {
    let f = []
    let x = []
    let j = []
    for (let i = 0; i < String(num).length; i++) {
        let arr = String(num).split("").map(item => Number(item))
        f.push(arr.fill(0, i + 1))
    }
    for (let i = 0; i < String(num).length; i++) {
        j = f[i].slice(i)
        j.push(" + ")
        if (j[0] !== 0){
            x.push(...j)
        }
    }
    let arr = x.join("")
    return arr.slice(0, -3)
}

// cleaner solution find in codewars.com
function expandedForme(num) {
    return num
        .toString()
        .split("")
        .reverse("")
        .map((item, i) => item * Math.pow(10,i))
        .filter(item => item > 0)
        .reverse("")
        .join(" + ")
}
