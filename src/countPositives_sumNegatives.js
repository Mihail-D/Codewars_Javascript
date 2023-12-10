function countPositivesSumNegatives(input) {
	let countPositives = input.filter((a) => a > 0).length;
	let sumNegatives = input.filter((a) => a < 0).reduce((a,b) => a + b);
	return [countPositives, sumNegatives];
}

console.log(
  countPositivesSumNegatives([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14,
    -15,
  ])
); // 10 -65