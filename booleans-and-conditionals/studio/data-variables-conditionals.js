// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";

let astronautCount = 7;
let astronautStatus = "ready";

let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;

let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;

let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftoff = true;

if (astronautCount > 7) {
    console.log("Too many astronauts");
    preparedForLiftoff = false;
}

if (astronautStatus !== "ready") {
    console.log("Astronauts are not ready");
    preparedForLiftoff = false;
}

if (totalMassKg > maximumMassLimit) {
    console.log("Total mass exceeds maximum mass limit.");
    preparedForLiftoff = false;
}

if (fuelTempCelsius < -300 || fuelTempCelsius > -150) {
    console.log("Fuel temperature is not within the limits.");
    preparedForLiftoff = false;
}

if (fuelLevel !== 100) {
    console.log("Fuel level is not at 100%.");
    preparedForLiftoff = false;
}

if (weatherStatus !== "clear") {
    console.log("Weather is not clear for liftoff.");
    preparedForLiftoff = false;
}

// Verify shuttle launch can proceed based on above conditions

if(preparedForLiftoff) {
    console.log("All systems are a go! Initiating space shuttle launch sequence.");
    console.log("---------------------------------------------------------------");

    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Astronaut Count:", astronautCount);
    console.log("Crew Mass:", crewMassKg, "kg");
    console.log("Fuel Mass:", fuelMassKg, "kg");
    console.log("Shuttle Mass:", shuttleMassKg, "kg");
    console.log("Total Mass:", totalMassKg, "kg");
    console.log("Fuel Temperature:", fuelTempCelsius, "°C");
    console.log("Weather Status:", weatherStatus);

    console.log("---------------------------------------------------------------");
    console.log("Have a safe trip astronauts!");
} else {
    console.log("---------------------------------------------------------------");
    console.log("Not prepared for liftoff! Shutting down all launch operations!")
}
