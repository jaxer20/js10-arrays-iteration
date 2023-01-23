const prices = [100, 250, 50, 89]
for(let price of prices){
    console.log(price);
}
console.log("---------------");
// forEach kullanımı
prices.forEach(price => console.log(price))

console.log("---------------");

prices.forEach(yazdir)
function yazdir(v){
    console.log(v); 
}

console.log("---------------");
