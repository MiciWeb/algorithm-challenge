// This exercices is from a coding series about higher-order function
// https://www.codewars.com/collections/coding-meetup-series
function findSenior(list) {
  let age =  Math.max(...list.map(item=>item.age))
  return list.filter(item=>item.age == age )
}
