function invert(array) {
  return (map = array.map((x) => -x));
}

console.log(invert([1, -2, 3, -4, 5])); // [-1,2,-3,4,-5]
