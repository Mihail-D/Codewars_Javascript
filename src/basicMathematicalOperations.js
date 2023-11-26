function basicOp(operation, value1, value2) {
  let x;
	switch (operation) {
    case "+":
      x = value1 + value2;
      break;
    case "-":
      x = value1 - value2;
      break;
    case "*":
      x = value1 * value2;
      break;
    case "/":
      x = value1 / value2;
      break;
  }

	return x;
}

console.log(basicOp("+", 4, 7));

