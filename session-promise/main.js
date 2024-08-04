let cache = {};

function incrementByone(num) {
	cache.forEach((obj) => {
		if (obj[num]) {
			console.log("from cache");
			return obj[num];
		}
	});

	let sum = num + 1;

	let chachedObj = {
		num,
		sum,
	};

	cache.push(chachedObj);
	console.log("from func");
	return sum;
}

incrementByone(1);
incrementByone(2);
incrementByone(1);
