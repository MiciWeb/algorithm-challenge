// Complete the method/function so that it converts dash/underscore delimited words into camel casing.
//The first word within the output should be capitalized only if the original word was capitalized
//(known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str) {
    let split;
    if (str.includes("-")) {
        split = str.split("-")
    } else if (str.includes("_")) {
        split = str.split("_")
    }else{
        split = []
    }
    let camel;
    let arr = []
    arr.push(split[0])
    for (let i = 1; i < split.length; i++) {
        camel = split[i].substr(0, 1).toUpperCase() + split[i].substr(1)
        arr.push(camel)
    }
    return arr.join("")
  }