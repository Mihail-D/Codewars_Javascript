function countWords(str) {
	let count = 0;
	for (const i of str.split(' ')) {
		if (i !== '') {
			count++;
		}
	}
	return count;
}

console.log(countWords('Dear   Victoria, I love  to press   space button.'));  //8 