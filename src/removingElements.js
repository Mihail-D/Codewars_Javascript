function removeEveryOther(arr) {
  var answer = [];
  arr.map(function (current, index, array) {
    if (index % 2 === 0) {
      answer.push(current);
    }
  });
  return answer;
}

console.log(
  removeEveryOther([
    ["Hello", "Goodbye", "Hello Again"],
    ["Hello", "Hello Again"],
  ])
);
//['Hello', 'Hello Again']
