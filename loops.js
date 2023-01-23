const grades = [55, 77, 23, 89, 100, 88, 95];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}
console.log((sum / grades.length).toFixed(3));

const arr = [-5, 8, 19, -8, -234635];
let positives = [];
let negatives = [];
for (let j = 0; j < arr.length; j++) {
  if (arr[j] < 0) {
    negatives.push(arr[j]);
  } else {
    positives.push(arr[j]);
  }
}

console.log(positives);
console.log(negatives);
console.log(arr);

const sayi = [-5, 8, 19, -8, -2, 25, 30];
let sonuç = 0
for (let i in sayi){
    sonuç += sayi[i]
}
console.log(sonuç);

let araclar = ["BMW", "Volvo", "Mini"]
let yazi = [""] 
for (let arac of araclar) {
    yazi += arac + "."
}
console.log(yazi);



const students = [
    "ahmet",
    "mehmet",
    "ismet",
    "feyza",
    "ahmet",
    "feyza",
    "can",
    "mehmet",
    "cem",] 
const findStudentForOf = (name) => {
    let counter = 0
  
for (let student of students) {

student === name.toLowerCase() && counter++
}

return !counter
  ? `${name} can not be found`
  : `${name} found ${counter} times`
}

console.log(findStudentForOf("MehMet"))
console.log(findStudentForOf("ismet"))
console.log(findStudentForOf("feyza"))
