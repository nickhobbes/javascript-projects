// Declare and assign the variables below
let spaceShuttleName = "Determination";
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
const milesPerKilo = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKilo);

// Calculate a space mission below

let milesToMars = distanceToMars * milesPerKilo;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below

console.log(spaceShuttleName, "will take", daysToMars, "days to reach Mars.");

// Calculate a trip to the moon below

let milesToMoon = distanceToMoon * milesPerKilo;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below

console.log(spaceShuttleName, "will take", daysToMoon, "days to reach the Moon.");
