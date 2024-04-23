function digital_root(n) {
	let numArray = n.toString().split('');
	if (numArray.length === 1) {
		return n
	}

	while (numArray.length > 1) {
		let sum = 0;
		for (let i = 0; i < numArray.length; i++) {
			let elem = Number(numArray[i]);

			sum += elem;
		}
		numArray = sum.toString().split('')
	}
	return Number(numArray[0])

}