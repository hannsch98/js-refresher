const person = {
	name: "Nico",
	age: "25",
	greet() {
		console.log("Hi, I am " + this.name);
	},
};

//person.greet();

const hobbies = ["Running", "Dying", "Fighting"];
/* for (let hobby of hobbies) {
	console.log(hobby);
} */

//console.log(hobbies.map((hobby) => "Hobby: " + hobby));
//array.map edits the array without changing it (for display reasons for example)

hobbies.push("Being gay");

const copiedArray = [...hobbies, "sleeping"];
//... is like ++ or --
//spread operator

const toArray = (...args) => args;
//... in this case called rest operator
//

console.log(toArray(1, 2, 3, 4));
