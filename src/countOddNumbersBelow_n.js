function oddCount(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
			count++;
    }
  }
  return count;
}

// const oddCount = (n) => Math.floor(n / 2);

console.log(oddCount(15023));
