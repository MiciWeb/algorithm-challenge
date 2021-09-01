// This exercices is from a coding series about higher-order function
// https://www.codewars.com/collections/coding-meetup-series
function countDevelopers(list) {
    return list.filter(item => item.continent == "Europe" && item.language == "JavaScript").length
  }