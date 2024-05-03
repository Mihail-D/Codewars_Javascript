function toAlternatingCase(str) {
	let array = str.split('');
	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === 'string') {
			array[i] === array[i].toUpperCase()
        ? array.splice(i, 1, array[i].toLowerCase())
        : array.splice(i, 1, array[i].toUpperCase());
		}
	}

	return array.join('');
};

console.log(toAlternatingCase("1a2b3c4d5e"));