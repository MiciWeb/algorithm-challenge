// This exercices is from a coding series about higher-order function
// https://www.codewars.com/collections/coding-meetup-series
function countLanguages(list) {
    const arr = list.map(el => el.language)
    return arr.reduce((a, i)=> {
      a[i] = a[i] + 1 || 1
      return a
    }, {})
  }