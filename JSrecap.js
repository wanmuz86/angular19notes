// JS - Original 

// Creating a variable (name in JS)
var name = "Muzaffar"; // Variable is of type String - character, words  or sentence
console.log(name);

// Concatenation - Combining two string , variable
var message = "Hello "+name;
console.log(message);

//  Interpolation
var goodbye = `Goodbye ${name}`;
console.log(goodbye)

//Numbers

var a = 10;
var b = 3;

// Numbers operation
var sum = a+b;
console.log(sum);

var minus = a-b;
console.log(minus);

var product = a*b;
console.log(product);

var division = a/b;
console.log(division);

var modulo = a % b; // remainder of division operation (10/3 baki 1)
console.log(modulo);

var powerOf = a**b; // 10^3
console.log(powerOf);

// boolean

var hungry = true;
var tired = false;

console.log(hungry && tired); // Both needs to be true for it to be true
console.log(hungry || tired); //One of it needs to be true for it to be true
console.log(!hungry);  // Reverse of 

// Example with if else

var age = 17;
var withParent = false;

if ( age < 12 || (age < 18 && !withParent)) {
  console.log("You cannot watch the movie");
}
else {
  console.log("You can watch the movie");
}

// Array , - To store more than one item / collection of objects []

var scores = [30,50,90,100,70,80];

// Adding an item at the end of the array
scores.push(60);
console.log(scores);

// Removing an item from the end of the array
scores.pop();
console.log(scores);

//How may items in the array?
console.log(scores.length);

// Retrieve item at index 3
console.log(scores[3]);

// Remove from index 2, 1 item = remove 90
scores.splice(2,1); 
console.log(scores);

// Object = To store an item with key - value pairing {} 
// eg: Representing a row in the DB

var info = {name:"Muzaffar", address:"Bangi",age:40};
console.log(info.name); // Retrieving value from the object
console.log(info["age"]);


// String interpolation - You can add operation or call a function inside the ${}

var finalMessage = `My name is ${info.name.toUpperCase()}, I am ${info["age"] +5} years old and I live in ${info.address}`;
console.log(finalMessage)
