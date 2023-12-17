function xor(a, b) {
  return (a === true && b === false) || (b === true && a === false)
    ? true
    : false;
}
