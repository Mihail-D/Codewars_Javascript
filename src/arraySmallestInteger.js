function getSmallestInt(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  })[0];
}

console.log(getSmallestInt([32, 1, 2, 3, 4]));
