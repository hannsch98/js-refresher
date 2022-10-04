const person = {
	name: "Nico",
	age: "25",
	greet() {
		console.log("Hi, I am " + this.name);
	},
};

//object destructuring:
//instead of personData.name as property => {name}
const printName = ({ name }) => {
	console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);

const hobbies = ["Running", "Dying", "Fighting"];

//array destructuring:
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// /* for (let hobby of hobbies) {
// 	console.log(hobby);
// } */

// //console.log(hobbies.map((hobby) => "Hobby: " + hobby));
// //array.map edits the array without changing it (for display reasons for example)

// hobbies.push("Being gay");

// const copiedArray = [...hobbies, "sleeping"];
// //... is like ++ or --
// //spread operator

// const toArray = (...args) => args;
// //... in this case called rest operator
// //

// console.log(toArray(1, 2, 3, 4));
