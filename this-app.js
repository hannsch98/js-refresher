class NameField {
	constructor(name) {
		const field = document.createElement("li");
		field.textContent = name;
		const nameListHook = document.querySelector("#names");
		nameListHook.appendChild(field);
	}
}

/*
THIS refers to the class in which it is called
but THIS also refers to whatever called the function (for example a button)
*/

class NameGenerator {
	constructor() {
		const btn = document.querySelector("button");

		this.names = ["Nico", "Will", "Ruby"];
		//not a constant or variable with 'this.' but a property (like a variable attached to the class)
		this.currentName = 0;

		btn.addEventListener("click", this.addName.bind(this));
		//removing () after the method name this.addName passes a reference to the function, to the eventlistener.
		//"here is the adress/reference of the function, call it when 'click' "
		//with () it would be executed immediately after page load

		//bind(this) tells the function addName that THIS refers to the constructor/class, not the button
	}

	addName() {
		const name = new NameField(this.names[this.currentName]);
		this.currentName++;
		if (this.currentName >= this.names.length) {
			this.currentName = 0;
		}
	}
}

const gen = new NameGenerator();
