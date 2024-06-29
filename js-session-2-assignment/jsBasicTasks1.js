// Write Js Programs To Solve These Problems

// 1- Check The Number Is Even or Odd
// let num = +prompt("Enter number:");
let num = 2;

if (num % 2 === 0) {
	console.log("Even");
} else {
	console.log("odd");
}

// 2- Fizz Buzz Game
if (num % 3 === 0 && num % 5 === 0) {
	console.log(`${num} fizzbuzz`);
} else if (num % 3 === 0) {
	console.log(`${num} fizz`);
} else if (num % 5 === 0) {
	console.log(`${num} buzz`);
} else {
	console.log(num);
}

// 3- Reverse String for example welcome => emoclew
let str = "welcome";

let reverseStr = str.split("").reverse().join("");
console.log(reverseStr);

// 4- Compute Circle Area and Circumference
// let rad = +prompt("Enter radius:");
rad = 10;
let area = Math.PI * Math.pow(rad, 2);
let circumference = 2 * Math.PI * rad;

console.log(`area is: ${area}`);
console.log(`circumference is: ${circumference}`);

// 5- check two given numbers and return true if one of the number is 50 or if their sum is 50.
let numOne = 20;
let numTwo = 30;

function check50(num1, num2) {
	if (num1 === 50 || num2 === 50) {
		return console.log(
			`${true} => ${num1 === 50 ? "first" : "second"} number equals 50 `
		);
	}
	if (num1 + num2 === 50) {
		console.log(`${true} => sum equals 50`);
	}
}

check50(numOne, numTwo);

// 6- check from two given integers, whether one is positive and another one is negative.
let firstNum = -10;
let secondNum = 10;

function negativeAndPositive(num1, num2) {
	if (num1 < 0 && num2 > 0) {
		return console.log(
			`first number is negative and second number is positive`
		);
	}

	if (num2 < 0 && num1 > 0) {
		return console.log(
			`first number is positive and second number is negative`
		);
	}

	if (num1 > 0 && num2 > 0) {
		console.log("both is positive");
	}

	if (num1 < 0 && num2 < 0) {
		console.log("both is negative");
	}
}
negativeAndPositive(firstNum, secondNum);

// 7- check whether a given positive number is a multiple of 5 or a multiple of 8.
let positiveNum = 40;

function fiveOrEight(num) {
	if (num % 5 === 0 || num % 8 === 0) {
		console.log(true);
	}
}
fiveOrEight(positiveNum);

// 8- find the largest of three given integers
let nums = [4, 15, 9];
function FindLargestNumber(num1, num2, num3) {
	console.log(Math.max(num1, num2, num3));
}
FindLargestNumber(...nums);

// 9- Compute The sum of the numbers from 1 to 10
let startNum = 1;
let endNum = 10;

function sumAll(start, end) {
	let sum = 0;
	for (let i = start; i <= end; i++) {
		sum += i;
	}
	console.log(sum);
}

sumAll(startNum, endNum);

// 10- display the pattern like right angle triangle using an asterisk.
// *
// **
// ***
// ****
// *****
let start = 1;
let end = 6;
for (let i = start; i <= end; i++) {
	console.log("*".repeat(i));
}

// 11- check whether a given number is positive or negative.
function isNegative(num) {
	if (num < 0) {
		console.log(`${num} is positive`);
	} else {
		console.log(`${num} is negative`);
	}
}

isNegative(-10);

// 12- store elements in an array and print it.
// Test Data:
// Input 10 elements in the array:
// element - 0 : 1
// element - 1 : 1
// element - 2 : 2

let array = [];
let numOfElements = 10;
for (let index = 0; index < numOfElements; index++) {
	if (index === 0) {
		array.push(1);
	} else {
		array.push(index);
	}
}
console.log(array);

// 13- print the sum of two numbers
function sum(num1, num2) {
	if (typeof num1 === "number" && typeof num2 === "number") {
		console.log(num1 + num2);
	} else {
		console.log("please enter numbers");
	}
}
sum(10, 20);

// 14- calculate the factorial of a given number
// Test Data :
// Input the number : 5
// Expected Output :
// The Factorial of 5 is: 120

function calculateFactorial(num) {
	let result = 1;
	for (let index = num; index > 0; index--) {
		result *= index;
	}
	console.log(result);
}

calculateFactorial(5);

// 15- Create Simple Calculator (+ , - , * , /)
function calculator(num1, num2, operator) {
	switch (operator) {
		case "+":
			console.log(num1 + num2);
			break;
		case "-":
			console.log(num1 - num2);
			break;
		case "*":
			console.log(num1 * num2);
			break;
		case "/":
			console.log(num1 / num2);
			break;

		default:
			console.log("wrong operator");
			break;
	}
}
calculator(10, 5, "+");
calculator(10, 5, "-");
calculator(10, 5, "*");
calculator(10, 5, "/");
// Good Luck 􀦸􀦹􀦺􀦻

for (var index = 1; index <= 10; index *= 2) {
	console.log(index);
}
console.log(index);
