function getAverage(marks) {
	console.log(marks.reduce((a, b) => a + b));
	return Math.floor(marks.reduce((a,b) => a + b) / marks.length);
}

console.log(getAverage([1, 5, 87, 45, 8, 8]));