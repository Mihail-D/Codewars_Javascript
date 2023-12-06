function digitize(n) {
  return n
    .toString()
    .split("")
    .map((x) => +x)
    .reverse();
}

console.log(digitize(123456789));
