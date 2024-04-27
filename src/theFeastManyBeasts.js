function feast(beast, dish) {
  return (
    beast.charAt(0) + beast.charAt(beast.length - 1) ===
    dish.charAt(0) + dish.charAt(dish.length - 1)
  );
}

console.log(feast("chickadee","chocolate cake")); //tr
console.log(feast("brown bear", "bear claw")); // fa
