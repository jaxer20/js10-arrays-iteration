// INCLUDES
const numbers = [3, 5, 2, "4", "four", 3, "4", "bes", "1"]
console.log(numbers.includes(4));
console.log(numbers.includes("4"));
console.log(numbers.includes("5"));
console.log(numbers.includes(2));
console.log(numbers.includes("four"));
console.log(numbers.includes(2345));

// indexOf - lastIndexOF
console.log(numbers.lastIndexOf(3));
console.log(numbers.lastIndexOf(31));

// join
const strNumbers = numbers.join("_")
console.log(strNumbers);

const data = [3,1,6,88,143,5,7,8,9,10,22,3]
data.sort ((a, b) => b - a);
console.log(data.join(" "));

// toString
console.log(numbers.toString());

// slice
const cars = ["BMW", "Mercedes", "Fiat", "Anadol"]
console.log(cars.slice(2, 4));
console.log(cars.slice(0));

// concat()
const message = ["The weather", "is", "very", "nice"]
const now = [new Date().toLocaleString()]
const concattedMsg = message.concat(now, "JS Arrays", [[1,5325,55]])
console.log(concattedMsg);