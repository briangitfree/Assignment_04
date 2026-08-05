// Assignment 4 - JavaScript Strings
// Comp 649 - JavaScript II
// Author: Brian Dinh


//STEP 1
let name1 = prompt("Enter your full name:");
alert("Your name has " + name1.length + " characters.");

//STEP 2
let name2 = prompt("Enter your full name:");
let position = parseInt(prompt("Enter a numeric position:"));
alert("The character at position " + position + " is: " + name2.charAt(position - 1));

//STEP 3
let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
alert("Your name is: " + firstName.concat(" ", lastName));

//STEP 4
let text4 = "The dark black fox eats the apples";
alert(text4.indexOf("fox"));

//STEP 5
let text5 = "The Black and brown fox makes friend with another fox";
alert(text5.lastIndexOf("fox"));

//STEP 6
let text6 = "The baby fox plays with the lazy dog";
let fullName = prompt("Enter your full name:");
let result6 = text6.replace("the lazy dog", fullName);
alert(result6);

//STEP 7
let text7 = "The male fox plays with baby dog";
let searchWord = prompt("Enter a word:");
alert(text7.search(searchWord));

//STEP 8
let old_string = "The female fox lay down next to the lazy dog";
let new_string = old_string.slice(old_string.indexOf("the lazy dog"));
alert(new_string.toUpperCase());

//STEP 9
let text9 = "THE MALE AND FEMALE FOXES ARE TAKING A WALK";
alert(text9.trim().toLowerCase());

//STEP 10
let text10 = "my bird scares the fox when the fox gets close to the bird";
let capitalized =
    text10.charAt(0).toUpperCase() + text10.slice(1);
alert(capitalized);
