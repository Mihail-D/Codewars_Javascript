let stringy = function (n) {
  let str = "";
  if (n % 2 === 0) {
    for (let i = 0; i < n / 2; i++) {
      str += "10";
    }
  } else if (n % 2 !== 0) {
    for (let i = 0; i < Math.floor(n / 2); i++) {
      str += "10";
    }
    str += "1";
  }
  return str;
};

console.log(stringy(5));
console.log(stringy(7));
