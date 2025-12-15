// Chapter 9-11

// Chapter 9-11 / (Q:1)
let userCity = prompt("Enter your city name:");
let cities = ["karachi", "lahore", "islamabad", "faisalabad"];
if (cities.includes(userCity.toLowerCase())) {
    alert("City found!");
} else {
    alert("City not found.");
}

// Chapter 9-11 / (Q:2)
let userGender = prompt("Enter your gender (male/female):").toLowerCase();
if (userGender === "male") {
    alert("Good Morning Sir.");
} else if (userGender === "female") {
    alert("Good Morning Ma'am.");
} else {
    alert("Good Morning.");
}

// Chapter 9-11 / (Q:3)
let trafficSignal = prompt("Enter traffic signal color (red/yellow/green):").toLowerCase();
if (trafficSignal === "red") {
    alert("Must Stop");
} else if (trafficSignal === "yellow") {
    alert("Ready to move");
} else if (trafficSignal === "green") {
    alert("Move now");
} else {
    alert("Invalid color");
}

// Chapter 9-11 / (Q:4)
let fuelLevel = parseFloat(prompt("Enter remaining fuel in car (in liters):"));
if (fuelLevel < 0.25) {
    alert("Please refill the fuel in your car");
}

// Chapter 9-11 / (Q:5)
// a.
let a = 4;
if (a === 4) {
    alert("The condition is true");
}
// b.
let b = 82;
if (b === 83) {
    alert("The condition is true");
}
// c.
let c = 12;
if (c++ === 13) {
    alert("The condition is true");
}
// d.
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
// e.
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
// f.
if ("car" < "cat") {
    alert("car is smaller than cat");
}
// Chapter 9-11 / (Q:6)
let subject1 = parseInt(prompt("Enter marks obtained in Subject 1:"));
let subject2 = parseInt(prompt("Enter marks obtained in Subject 2:"));
let subject3 = parseInt(prompt("Enter marks obtained in Subject 3:"));
let totalMarks = 300;
let obtainedMarks = subject1 + subject2 + subject3;
let percentage = (obtainedMarks / totalMarks) * 100;
let grade, remarks;
if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
}
else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}
alert("Total Marks: " + totalMarks + "\nMarks Obtained: " + obtainedMarks + "\nPercentage: " + percentage.toFixed(2) + "%\nGrade: " + grade + "\nRemarks: " + remarks);

// Chapter 9-11 / (Q:7)
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer.");
}
else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer.");
}
else {
    alert("Wrong guess. The correct number was " + secretNumber);
}

// Chapter 9-11 / (Q:8)
let userNumber = parseInt(prompt("Enter a number to check if it's divisible by 3:"));
if (userNumber % 3 === 0) {
    alert(userNumber + " is divisible by 3.");
}
else {
    alert(userNumber + " is not divisible by 3.");
}

// Chapter 9-11 / (Q:9)
let userNumber2 = parseInt(prompt("Enter a number to check if it's even or odd:"));
if (userNumber2 % 2 === 0) {
    alert(userNumber2 + " is an even number.");
}
else {
    alert(userNumber2 + " is an odd number.");
}

// Chapter 9-11 / (Q:10)
let temperature = parseFloat(prompt("Enter the temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
}
else if (temperature > 30) {
    alert("The weather today is normal.");
}
else if (temperature > 20) {
    alert("Today's weather is cool.");
}
else if (temperature > 10) {
    alert("OMG! Today's weather is so cool.");
}

// Chapter 9-11 / (Q:11)
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /, %):");
let result;
if (operation === "+") {
    result = num1 + num2;
}
else if (operation === "-") {
    result = num1 - num2;
}
else if (operation === "*") {
    result = num1 * num2;
}
else if (operation === "/") {
    result = num1 / num2;
}
else if (operation === "%") {
    result = num1 % num2;
}
alert("Result: " + result);

// Chapter 12-13

// Chapter 12-13 / (Q:1)
let char = prompt("Enter a character:");
if (char.length === 1) {
    let ascii = char.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
        alert(char + " is an uppercase letter.");
    }
    else if (ascii >= 97 && ascii <= 122) {
        alert(char + " is a lowercase letter.");
    }
    else if (ascii >= 48 && ascii <= 57) {
        alert(char + " is a digit.");
    }
    else {
        alert(char + " is a special character.");
    }
} else {
    alert("Please enter a single character.");
}

// Chapter 12-13 / (Q:2)
let int1 = parseFloat(prompt("Enter first integer:"));
let int2 = parseFloat(prompt("Enter second integer:"));
if (int1 > int2) {
    alert(int1 + " is larger.");
}
else if (int2 > int1) {
    alert(int2 + " is larger.");
}
else {
    alert("Both integers are equal.");
}

// Chapter 12-13 / (Q:3)
let number = parseFloat(prompt("Enter a number:"));
if (number > 0) {
    alert(number + " is positive.");
}
else if (number < 0) {
    alert(number + " is negative.");
}
else {
    alert("The number is zero.");
}

// Chapter 12-13 / (Q:4)
let vowelChar = prompt("Enter a character to check if it's a vowel:").toLowerCase();
if (vowelChar.length === 1 && "aeiou".includes(vowelChar)) {
    alert(vowelChar + " is a vowel.");
}
else {
    alert(vowelChar + " is not a vowel.");
}

// Chapter 12-13 / (Q:5)
let correctPassword = "password123";
let userPassword = prompt("Enter your password:");
if (userPassword === "") {
    alert("Please enter your password.");
}
else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
}
else {
    alert("Incorrect password.");
}

// Chapter 12-13 / (Q:6)
let greeting;
let hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}
alert(greeting);

// Chapter 12-13 / (Q:7)
let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"));
if (time >= 0 && time < 1200) {
    alert("Good morning!");
}
else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
}
else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
}
else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
}
else {
    alert("Invalid time format.");
}