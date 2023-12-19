function expressionMatter(a, b, c) {
  let arr = [];
	arr.push(a * b * c);
	arr.push(a + b + c);
	arr.push(a * (b + c));
  arr.push((a + b) * c);
  arr.push(a * b + c);
  arr.push(a + b * c);

  return arr.sort((a, b) => a - b)[arr.length - 1];
}

console.log(expressionMatter(1, 2, 3));
console.log(expressionMatter(1, 1, 1));
//const expressionMatter = (a,b,c) => Math.max( a+b+c, (a+b)*c, a*(b+c), a*b*c ) ;
