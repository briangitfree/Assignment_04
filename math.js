//STEP 1

//STEP 2

//STEP 3

//STEP 4

//STEP 5






//STEP 1
// Prompt the user for a number and display its positive value
let number1 = parseFloat(prompt("Enter a number:"));
console.log(Math.abs(number1));


//STEP 2
// Prompt the user for a decimal number and round it up
let number2 = parseFloat(prompt("Enter a decimal number:"));
console.log(Math.ceil(number2));


//STEP 3
// Prompt the user for a decimal number and round it down
let number3 = parseFloat(prompt("Enter a decimal number:"));
console.log(Math.floor(number3));


//STEP 4
// Prompt the user for 5 comma-delimited numbers
let input = prompt("Enter 5 numbers separated by commas (example: 1,2,3,4,5):");

// Convert the string into an array of numbers
let numbers = input.split(",").map(Number);

// Find the largest and smallest numbers
let largest = Math.max(...numbers);
let smallest = Math.min(...numbers);

// Display the results
console.log("Largest number: " + largest);
console.log("Smallest number: " + smallest);


//STEP 5
// Prompt the user for a number and display its square root
let number5 = parseFloat(prompt("Enter a number:"));
console.log(Math.sqrt(number5));