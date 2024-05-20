function divide(weight) {
  let firstValue = Math.floor(weight / 2);
  let secondValue = Math.ceil(weight / 2);
  if (weight === 2) {
    return false;
  }
  if (firstValue % 2 === 0 && secondValue % 2 === 0) {
    return true;
  } else if (firstValue % 2 !== 0 || secondValue % 2 !== 0) {
    if ((firstValue - 1) % 2 === 0 && (secondValue + 1) % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(divide(2));

// return (
//   Math.floor(firstValue.toString()) + " " + Math.ceil(secondValue.toString())
// );
