var countSheep = function (num) {
	let str = '';
	for (let i = 1; i < num + 1; i++) {
		str += i.toString() + ' sheep...';
	}
	return str;
};

console.log(countSheep(5));