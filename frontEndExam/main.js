// Question 1 : Answer The Following Questions [12 Points]
// 1- What do you understand by hoisting in JavaScript?
// moving the declaration up in the js file before excuting

// 2- Why is super used in JavaScript?
// to acces the parent class

// 3- What is let and const? And how it differs from var?
// entroduced by es to solve the scope and hoisting problem

// 4- Discuss the Rest parameter in ES6?
// allowing a function to take unknown number of parameters as an array

// What is Arrow function?
//  shorter syntax for writing function expressions

// What are all its uses?
// in array methods like  map, filter, reduce, forEach
// for inline callbacks
// When creating higher-order functions

// How it differs from normal function?
// They also have lexical this binding, which means they capture the this value of the enclosing context.
// No arguments object: Arrow functions do not have their own arguments object.
// Cannot be used as constructors: Arrow functions cannot be used with the new keyword, because they do not have a [[Construct]] method.

// 5- What is the difference between the readonly and disabled attributes for the <textarea> element
// readonly allow to user to interact with the input copy its content but not editing it
// disabled not allowing the user to interact with the inputs by any means
// also disabled input value wont be sent to server

// 6- How do you specify units in the CSS?. What are the different ways to do it?
// by write its key like (px, em,rem,vh,vw) by the value
// use variables or but it directly in the proberty

// 7- What property is used for changing the font face?
// font-family

// 8- How to center align a div inside another div? [2 Ways]
// display:grid;
// place-content:center;
// or
// display:flex;
// align-items:center;
// justify-content:center

// Question2: True Or False [16 points]
// 1- Encapsulation is a mechanism which represent the essential features without including implementation details.
// false Abstraction

// 2- Encapsulation lets you focus on what the object does instead of how it does it
// false Abstraction

// 3- Abstraction means hiding the internal details or mechanics of how an object does something
// false Encapsulation

// 4- Overriding happens at compile-time
false;

// 5- Overloading happens at runtime
false;

// 6- Static binding is being used for overloaded methods and dynamic binding is being used for overridden/overriding method
true; //static poly

// 7- binding object state(fields) and behavior(methods) together. If you are creating class, you are doing encapsulation.
true; //dynamic poly

// 8- Polymorphism is a object oriented programming feature that allows us to perform a single action in different ways.
true;

// Question 3 : Mcq [2 Points]
// 1- JavaScript is ……
// ===> 1- synchronous, blocking, single-threaded language.

// 2- is the concept of object-oriented programming used to hide the internal representation, or state, of an object from the
// outside
// ===> 2) Encapsulation

// Question 4 : What is The Output [20 Points]

function Person(a, b) {
	this.a = a;
	this.b = b;
}

const hossam = new Person("ssa", "ss");

Person.getFullName = function () {
	return `${this.a} ${this.b}`;
};

console.log(hossam.getFullName());

// Question 5 : [100 Points]
// 1- Write a function that returns the length of a string. Make your function recursive. [15 points]

function stringLengthRecursive(str) {
	// Base case: if the string is empty, its length is 0
	if (str === "") {
		return 0;
	}
	// Recursive case: remove the first character and add 1 to the length
	return 1 + stringLengthRecursive(str.slice(1));
}
console.log(stringLengthRecursive("hossam"));

// 2- Write a program that prints a multiplication table for numbers
// up to 12. Expected Output :
// 12 * 1 = 12 ============ 12 * 12 = 144 [5 points]
function printMultiplicationTable() {
	const max = 12;

	for (let i = 1; i <= 12; i++) {
		const product = i * max;
		console.log(`${i} * ${max} = ${product}`);
	}
}

printMultiplicationTable();

// 3- Write a function that returns the elements on odd positions in a list. [5 points]
function getOddPositionElements(arr) {
	// Filter elements at odd positions (1-based index)
	return arr.filter((_, index) => (index + 1) % 2 !== 0);
}

console.log(getOddPositionElements([10, 20, 30, 40, 50, 60]));

// 4- Check If The Number Is Prime Or Not . [5 points]

// 6- Write a short javascript function that counts the number of vowels in a given character string . [12 points]

// 7- Write a probram with a mother class animal. Inside it define a name and an age variables, and set_value() function.Then create two bases variables Zebra and Dolphin which write a message telling the age, the name and giving some extra information (e.g. place of origin). [5 points]
