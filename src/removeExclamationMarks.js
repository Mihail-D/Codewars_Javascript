function removeExclamationMarks(s) {
	let arr = s.split('');
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '!') {
			arr.splice(i,1);
		}
	}
	return arr.join('');
}

console.log(removeExclamationMarks("Hello World!"));

/* function removeExclamationMarks(str) {
  var arr = str.split("");
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== "!") {
      newArr.push(arr[i]);
    }
  }
  var str = newArr.join("");
  return str;
} */