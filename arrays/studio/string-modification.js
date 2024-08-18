const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let tempString = str.slice(0, 3);
tempString = str.slice(3, str.length) + tempString;

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original String: ${str}`);
console.log(`Modified String: ${tempString}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let numOfLetters = input.question("How many letters do you want relocated to the end? ")
let errorMsg = "";

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if(numOfLetters > str.length) {
    numOfLetters = 3;
    errorMsg = "| Default Value Used";
}

let tempString2 = str.slice(0, numOfLetters);
tempString2 = str.slice(numOfLetters, str.length) + tempString2;

console.log(`Original String: ${str}`);
console.log(`Modified String: ${tempString2} ${errorMsg}`);