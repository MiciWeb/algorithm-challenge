// This exercices is from a coding series about higher-order function
// https://www.codewars.com/collections/coding-meetup-series
function isRubyComing(list) {
    return list.filter(item => item.language == "Ruby").length > 0
}