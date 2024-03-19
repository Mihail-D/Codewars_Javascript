const reverseSeq = (n) => {
	let arr = [];
	for (let i = 1; i < n + 1; i++) {
		arr.push(i)
	}

	return arr.sort((a,b) => a - b).reverse();
};

console.log(reverseSeq(5));