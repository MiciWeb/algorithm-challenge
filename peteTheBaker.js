function cakes(recipe, available) {
    let count;
    for (const i in recipe) {
        if(available[i] > 0){
            available[i] - recipe[i]
            count =+ 1
            console.log(available[i])
        }
    }
}
console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})) 
