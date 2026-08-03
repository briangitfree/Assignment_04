//STEP 1

//STEP 2

//STEP 3

//STEP 4

//STEP 5





//STEP 1
// Get the number of days in the current month
let today1 = new Date();
let daysInMonth = new Date(
    today1.getFullYear(),
    today1.getMonth() + 1,
    0
).getDate();

console.log("Number of days in this month: " + daysInMonth);


//STEP 2
// Get the month name from a particular date
let date2 = new Date("2026-07-15");
let monthNames = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

console.log("Month name: " + monthNames[date2.getMonth()]);


//STEP 3
// Test whether a date is a weekend
let date3 = new Date(prompt("Enter a date (YYYY-MM-DD):"));
let dayOfWeek3 = date3.getDay();

if (dayOfWeek3 === 0 || dayOfWeek3 === 6) {
    console.log("This date falls on a weekend.");
} else {
    console.log("This date does not fall on a weekend.");
}


//STEP 4
// Get yesterday's day of the week
let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

let dayNames = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday",
    "Friday", "Saturday"
];

console.log("Yesterday was: " + dayNames[yesterday.getDay()]);


//STEP 5
// Get the first letter of the current day of the week
let today5 = new Date();
let currentDay = dayNames[today5.getDay()];

console.log("First letter of today: " + currentDay.charAt(0));
