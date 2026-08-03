//STEP 1

//STEP 2

//STEP 3

//STEP 4

//STEP 5






//STEP 1
// Return a string with letters in alphabetical order
function alphabetOrder(str) {
    return str.split("").sort().join("");
}

console.log(alphabetOrder("webmaster")); // abeemrstw


//STEP 2
// Convert the first letter of each word to uppercase
function capitalizeWords(str) {
    return str
        .split(" ")
        .map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
}

console.log(capitalizeWords("the quick brown fox")); // The Quick Brown Fox


//STEP 3
// Count the number of vowels in a string
function countVowels(str) {
    let vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

console.log(countVowels("The quick brown fox")); // 5


//STEP 4
// Generate a random string ID of a specified length
function generateId(length) {
    let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

console.log(generateId(8)); // Example: RCv1SBUC


//STEP 5
// Return the longest country name from an array
function longestCountryName(countries) {
    let longest = countries[0];

    for (let i = 1; i < countries.length; i++) {
        if (countries[i].length > longest.length) {
            longest = countries[i];
        }
    }

    return longest;
}

console.log(
    longestCountryName([
        "Australia",
        "Germany",
        "United States of America"
    ])
); // United States of America