function find_average(array) {
  return array.reduce((a,b) => a + b ) / array.length;
}

console.log(find_average([1, 2, 3]));