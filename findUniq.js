// 2 way to regroup same elements in unique value inside an array
const ages = ["foo", "foo", 26, 26, 28, 28, 29, 29, 30]

const unique = ages.filter((x, i, a) => a.indexOf(x) == i)
const unique2 = [...new Set(ages)]
