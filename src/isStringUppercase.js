let isUpperCase = function (str) {
	str.split('');
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toLowerCase()) {
			return false;
		}
	}
return true;
};

console.log(isUpperCase("IAMDONALD"));