const numbers = [1,2,3,4,5];
// Imperative 

// Map
// *2 all the numbers inside the array
let answer1Imp = [];
for (let i = 0; i < numbers.length; i++){
  answer1Imp.push(numbers[i]*2)
}
console.log("Imperative",answer1Imp); // [2,4,6,8,10]

// Declarative
// Untuk setiap nilai (val) di dalam array numbers lakukan ... val *2
// For each item (val) in the array do .... val * 2
const answer1Dec = numbers.map(val=> val*2);
console.log("Declarative", answer1Dec)

// Filter

let answer2Imp = [];
for (let i = 0; i < numbers.length; i++){
  // ==  equality /  "2" == 2 [true]   /Equality on value
  // === strict equality / "2" === 2 = [false] // Equality on value and type
  // 0 == false (true) [falsy and truthy value]
  // 0 === false (false) [ falsy and truthy value]
  if (numbers[i] % 2 === 0){
    answer2Imp.push(numbers[i]);
  }
}
console.log("Imperative", answer2Imp);

// Declarative (filter)
// Untuk setiap nilai di dalam array .. pastikan 
// For each value in the array, ensure that the condition is fulfilled
const answer2Decl = numbers.filter(val=> val % 2 === 0)
console.log(answer2Decl);

// Imperative
let answer3Imp = 0;
for (let i = 0; i < numbers.length; i++){
  answer3Imp += numbers[i];
}
console.log("Imperative",answer3Imp);
// acc = accumulator
// 0 + 1 
// 1 + 2
// 3 + 3
// 6  + 4
//  10 + 5
const answer3Decl = numbers.reduce((acc,val)=> acc+val,10);
console.log("Declarative",answer3Decl);

//  [1,2,3,4,5]

// ? : (ternary operator) -> Shortcut for if else

const answerEx1 = numbers.map(val=> val % 2 === 0 ? val *2 : val)
console.log(answerEx1);

const data = [
  {
    country: 'China',
    population: 1409517397,
  },
  {
    country: 'India',
    population: 1339180127,
  },
  {
    country: 'USA',
    population: 324459463,
  },
  {
    country: 'Indonesia',
    population: 263991379,
  }
]

const answerEx2 = data.filter(val=>val.population > 500000000).map(val=> val.country)
console.log(answerEx2)

// Filter out China (filter)
// Get the population (map)
// Sum the population (reduce)
const answerEx3 = data.filter(val=>val.country !== "China").map(val=>val.population).reduce((acc,val)=>acc+val)
console.log(answerEx3);
