const person = {
	name: "Nico",
	age: "25",
	greet() {
		console.log("Hi, I am " + this.name);
	},
};

person.greet();

const hobbies = ["Running", "Dying", "Fighting"];
/* for (let hobby of hobbies) {
	console.log(hobby);
} */
console.log(hobbies.map((hobby) => "Hobby: " + hobby));
//array.map edits the array without changing it (for display reasons for example)
hobbies.push("Being gay");
console.log(hobbies);
