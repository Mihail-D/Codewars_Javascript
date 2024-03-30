function findSmallestInt(args) {
  args.sort(function (a, b) {
    return a - b;
	});
	return args[0];
}

console.log(findSmallestInt([78, 56, 232, 12, 18, 8]));
