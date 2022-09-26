const fs = require("fs");

fs.writeFileSync("hello.txt", "Hello from Node.js");

// var = variable
// let = changing
// const = constant

const name = "Hanna";
let age = 23;
const hobbies = true;

age = 25;

function summarizeUser(userName, userAge, userHobbies) {
	return (
		"Hi, I am " +
		userName +
		", " +
		userAge +
		" years old. I have hobbies: " +
		userHobbies
	);
}

console.log(summarizeUser(name, age, hobbies));
