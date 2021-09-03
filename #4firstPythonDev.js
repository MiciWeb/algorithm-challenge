// This exercices is from a coding series about higher-order function
// https://www.codewars.com/collections/coding-meetup-series
function getFirstPython(list) {
    const filter = list.filter(item => item.language == "Python")[0]
    return filter === undefined ? "There will be no Python developers" : filter.firstName + ", " + filter.country
  }