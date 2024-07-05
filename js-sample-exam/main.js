// Question 1 : Answer The Following Questions (10 points)
// 1- What is an Event Loop
// it controls the entry of the finished steps in the callback queue to the call stack

// 2- How do you add an element at the begining of an array? How do you add one at the end? Hint[ 2 ways ]

let array = [1, 2, 3, 4, 5];

// add in the start
array.unshift(0);
array.splice(0, 0, 9);

// add in the end

array.push(6);
array.splice(array.length, 0, 7);
array[array.length] = 8;
console.log(array);

// Question2 : What is The Output ? (5 points)
// 3;
//------------------------
// for (let i = 0; i < 5; i++) {
// 	setTimeout(function () {
// 		console.log(i);
// 	}, i * 1000);
// }
// i think it should be 5 5 5 5 5 but the output came 0 1 2 3 4 why ??
//------------------------
// ["baz"];
//------------------------
// 1  'hello' true
//------------------------
let car = {
	carName: "bmw",
	carPrice: 1000000,
};

console.log(car instanceof Object); //true
console.log(Object.entries(car)); // [["carName", "bmw"],["carPrice", 1000000]]

// Question 3 : (85 points)
// 1- Create Function sumObjectValues() that will sum all values of the fields that contain numbers . ensure that iteration is done only over own property of the object (15 points)
const ob = {
	name: "hos",
	age: 35,
	education: "engineer",
	kids: 2,
};
function sumObjectValues(object) {
	let sum = 0;
	for (const key in object) {
		if (typeof object[key] === "number") {
			sum += object[key];
		}
	}

	console.log(sum);
}
sumObjectValues(ob);

//todo 2- Show the execution of 3 asynchronous block of code, one after the other in sequence (10 points)

// 3- Get the maximum value from a numbers array along with its index (5 points)

function getMaxValueAndIndex(arr) {
	let maxValue = Math.max(...arr);

	let index = arr.indexOf(maxValue);
	console.log(maxValue, index);
}

getMaxValueAndIndex([10, 54, 46, 43, 6, 2, 35, 65, 23, 5]);

// 4- Write a function which accepts two valid dates and returns the difference between them as number of days (10 points)
function dateDifferance(date1, date2) {
	const dateOne = new Date(date1);
	const dateTwo = new Date(date2);
	if (dateOne == "Invalid Date" || dateTwo == "Invalid Date") {
		return "Invalid date entered";
	}

	const difference = dateOne - dateTwo;

	const differenceInDays = difference / 1000 / 60 / 60 / 24;
	return Math.abs(differenceInDays);
}
console.log(dateDifferance("10 nov 2020", "20 nov 2020"));

// 5- Design a Calulator interface for 2 number inputs which can perform sum, difference, product and dividend whenever invoked on the same interface. (15 points)

const calculator = {
	add: function (num1, num2) {
		return num1 + num2;
	},
	subtract: function (num1, num2) {
		return num1 - num2;
	},
	multiply: function (num1, num2) {
		return num1 * num2;
	},
	divide: function (num1, num2) {
		if (num2 === 0) return "can not divide over zero";
		return num1 / num2;
	},
};

console.log(calculator.divide(10, 0));
console.log(calculator.divide(10, 3));
console.log(calculator.add(10, 3));
console.log(calculator.subtract(10, 3));
console.log(calculator.multiply(10, 3));

// 6- Write a function which can return multiple values from a function (10 points)

function returnMultibleValues() {
	return ["value 1", "value 2", "value 3"];
}

// 7- Write a function to reverse an array. For Example :

function reverse(arr) {
	return arr.reverse();
}
console.log(
	reverse([1, 2, 3, 4]) // ➞ [4, 3, 2, 1] (10 points)
);

// 8- Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.
// For Example :
// ({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]] (10 points)

function convertObjectToArray(ob) {
	return Object.entries(ob);
}

console.log(convertObjectToArray({ a: 1, b: 2 }));

// Bonus ++
// 1- Write a function which can convert the time input given in 12 hours format to 24 hours format [10 points]

function convert12To24(input) {
	let [time, dayOrNight] = input.split(" ");
	let hours = time.split(":")[0];
	let minutes = time.split(":")[1];

	if (!dayOrNight) {
		return "bad input";
	}
	if (dayOrNight.toLowerCase() === "am" && +hours === 12) {
		return `00:${minutes}`;
	}
	if (+hours > 12 || dayOrNight.toLowerCase() === "am") {
		return time;
	}

	let hourIn24 = +hours + 12;
	return `${hourIn24}:${minutes}`;
}

console.log(convert12To24("11:50 pm"));

// 2- Make this syntax possible: var a = add(2)(3); //5 [5 points]

function add(x) {
	return function (y) {
		return x + y;
	};
}
var a = add(2)(3);

console.log(a);
// 3- Check if the user with the name "John" exists in the array of objects [5 points]
const arrOfOB = [
	{
		name: "hos",
		age: 35,
	},
	{
		name: "john",
		age: 35,
	},
	{
		name: "adam",
		age: 35,
	},
	{
		name: "hamza",
		age: 35,
	},
];

function findUserByName(username, arrayOobjects) {
	for (const user of arrayOobjects) {
		for (const key in user) {
			if (key === "name") {
				if (user[key] === username) {
					return user;
				}
			}
		}
	}
	return "not found";
}

console.log(findUserByName("john", arrOfOB));
