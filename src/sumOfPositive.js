function positiveSum(arr) {
	 let sum = 0;

  arr.forEach((num) => {
    (num > 0) ?	sum += num : sum += 0;
  })
	return sum;
}

console.log(positiveSum([1, -2, 3, 4, 5])); // 13
