
function findSenior(list) {
  let age =  Math.max(...list.map(item=>item.age))
  return list.filter(item=>item.age == age )
}
