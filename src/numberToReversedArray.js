function digitize(n) {
let arr = (n + "").split("").reverse();

return (map = arr.map((x) => parseInt(x)));
}

console.log(digitize(35231));
