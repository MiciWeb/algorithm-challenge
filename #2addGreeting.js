// This exercices is from a coding series about higher-order function
// https://www.codewars.com/collections/coding-meetup-series
function greetDevelopers(list) {
    list.map(item => item["greeting"] = "Hi "+item.firstName+", what do you like the most about "+item.language+"?" )
    return list
}