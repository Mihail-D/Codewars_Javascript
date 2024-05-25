function check(a, x) {
	return a.some((n) => x === n);
}

console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45));
