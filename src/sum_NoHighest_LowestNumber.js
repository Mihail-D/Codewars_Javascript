function sumArray(array) {
	let arr = array.sort((a, b) => a - b).slice(1,array.length - 1);
	return arr.length > 1 && arr !== null ? arr.reduce((a, b) => a + b) : 0;
}

console.log(sumArray([6, 2, 1, 8, 10]));

