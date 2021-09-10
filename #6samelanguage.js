// This exercices is from a coding series about higher-order function
// https://www.codewars.com/collections/coding-meetup-series
function isSameLanguage(list) {
    return list.every(item => list[0].language === item.language)
}
 