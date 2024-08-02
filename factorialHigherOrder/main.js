function memoizeFactorial() {
	let cache = {};

	return function (num) {
		if (num in cache) {
			console.log("Printed From Cache");
			return cache[num];
		} else {
			cache[num] = factorial(num);
			return cache[num];
		}
	};
}

function factorial(num) {
	return num == 0 ? 1 : num * factorial(num - 1);
}

const memoizeFactorialInstance = memoizeFactorial();
console.log(memoizeFactorialInstance(5));
console.log(memoizeFactorialInstance(6));
console.log(memoizeFactorialInstance(5));

// function factorial(num) {
//     return num == 0 ? 1 : num * factorial(num-1)
// }

// factorial(5) // 120
// factorial(6) // 720
// factorial(5) // 120
