var min = function (list) {
  return list.sort((a,b) => a - b)[0];
};

var max = function (list) {
	return list.sort((a, b) => a - b)[list.length - 1];
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));