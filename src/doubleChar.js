function doubleChar(str) {
  let doubleStr = "";
  str.split("");

  for (let i = 0; i < str.length; i++) {
    doubleStr += str[i] + str[i];
  }

  return doubleStr;
}

console.log(doubleChar("illuminati"));
