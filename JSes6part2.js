const NAME = "Muzaffar"
console.log(NAME); 
// NAME = "Wan Muzaffar"; // Variable declare with const cannot be reassigned to a new value

// 1) hoisted variable
// var y ;
// console.log(y);
// var y = 20;
// console.log(y);

// Variable hoisting with let
// console.log(z);
// let z = 10;
// console.log(z);

// var y = 10;

// if (true) {
//   var y = 20;
//   console.log(y)
// }
// console.log(y)

let y = 10;

if (true) {
  let y = 20;
  console.log(y)
}
console.log(y)

//

// Traditional function declaration
function add(a,b) {
  return a+b;
}

// Arrow declaration - if it is one line, you can omit return 
const sum = (a,b) => a+b;

console.log(sum(10,3));
console.log(add(20,5));

const sumOfSquares = (a,b) => a**2 + b**2
console.log(sumOfSquares(3,4));

// Array destructuring
const numbers = [1,2,3];
const [first, second, third] = numbers;

// equivalent to const first = numbers[0], const second = numbers[1], const third = numbers[2];
console.log(first);
console.log(second);
console.log(third);

//Object desctucturing [JS]
const person = {"name":"Alice", "age":30,"address":"Kulim"};
// Equivalent to const name = person.name, const age = person.age, const address = person.address

const {name, age, address} = person;
console.log(name);
console.log(age);


// Spread operator on An Array
const arr1 = [1,2,3];
const arr2 = [4,5,6];

//Transform arr1 into individual element, 1,2,3
//Transform arr2 into individual element, 4,5,6
// Combine into one array = combinedArray
// For spread operator, the result is normally inside new array
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray)

// Adding an item at the end of an array
const anotherArray = [...arr1, 5];
console.log(anotherArray); // [1,2,3,5]

// Rest parameter on a function 
// transform individual element into an array

const sumOfAllNumbers = (...numbers) => {
  let sum = 0;
  for (let i = 0; i< numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}
console.log(sumOfAllNumbers(1,2,3));
console.log(sumOfAllNumbers(1,2,3,4,5));
console.log(sumOfAllNumbers(1,2,3,4,5,6,7,8,9,10));

// Example of nested object
const nestedObj = {"name":"Muzaffar","home":{"number":1,"street":"ABC","postcode":12345}}

// Combining multiple object
const personJohn = {"name":"John","age":25}
const details = {"city":"New York", "occupation":"Engineer"};
const mergedPerson = {...personJohn, ...details};

// {"name","city","age","occupation"}

console.log(mergedPerson);

// Update a value from an object
// The right age, (30) will overwrite the left age (25)
const updatedMergePerson = {...mergedPerson, "age":30};
console.log(updatedMergePerson)
                                             
