function strCount(str,letter) {
	return str.split("").filter((a) => a === letter).length;
}

console.log(strCount("Hello", "o"));
