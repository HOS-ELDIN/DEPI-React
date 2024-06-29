// Question 3 : Write Js Code to solve these problems (50 points)
// 1- Check if string is palindrome or not
// Hint : A palindrome is a word or sentence that’s spelled the
// same way both forward and backward
// For example : eye is palindrome
// Welcome isn’t palindrome

function isPalindrome(word) {
	let reversedWord = word.split("").reverse().join("");

	if (word === reversedWord) {
		console.log(`the word ${word} is palindrome`);
	} else {
		console.log(`the word ${word} is not palindrome`);
	}
}

isPalindrome("welcome");
isPalindrome("eye");

// 2- Create a function to check if the given number is even
// Hint : return true if number is even and false if not .
// Solve this problem in two ways
// 1- Use only if statement without else
// 2- Use ternary operator

function oddOrEven(num) {
	if (num % 2 === 0) {
		return console.log(true);
	}
	return console.log(false);
}
oddOrEven(3);
oddOrEven(4);

function oddOrEvenTernary(num) {
	num % 2 === 0 ? console.log(true) : console.log(false);
}
oddOrEvenTernary(3);
oddOrEvenTernary(4);

// 3- Find Largest Number In Array
// Ex: [10 , 100 , 50 , 4] => output : 100

function FindLargestNumber(array) {
	console.log(Math.max(...array));
}
FindLargestNumber([10, 100, 50, 4]);

// 4- Write a function that takes an integer hours and converts it
// to seconds.

function convertToSeconds(hours) {
	if (Number.isInteger(hours)) {
		console.log(hours * 60 * 60);
	} else {
		console.log("input is not integer");
	}
}
convertToSeconds(3);

// 5- Write a JS code to find the power of a number using for loop
function findPower(num, power) {
	let result = 1;

	if (power > 0) {
		for (let index = 0; index < power; index++) {
			result *= num;
		}
	} else if (power === 0) {
		result = 1;
	}

	console.log(result);
}
findPower(2, 0);
findPower(2, 3);
findPower(2, 2);

// Question 5 : (20 points)
// 1- Refactor this code by doing it in another two ways
// let keyNum = +prompt("enter key num : ");
let keyNum = 3;

keyNum === 1 ? console.log("the key is on") : console.log("the key is off");

switch (keyNum) {
	case 1:
		console.log("the key is on");
		break;

	default:
		console.log("the key is off");
		break;
}
// 2- Refactor this code using for loop

for (let index = 5; index >= 1; index--) {
	console.log(index);
}
