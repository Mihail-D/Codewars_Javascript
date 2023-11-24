function findNeedle(haystack) {
  let pos;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      pos = i;
    }
  }
  return "found the needle at position " + pos;
}

console.log(
  findNeedle([
    "283497238987234",
    "a dog",
    "a cat",
    "some random junk",
    "a piece of hay",
    "needle",
    "something somebody lost a while ago",
  ])
);
