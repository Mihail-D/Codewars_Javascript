const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  }
  switch (true) {
    case p1 === "rock":
      switch (p2) {
        case "scissors":
          return "Player 1 won!";
          break;
        case "paper":
          return "Player 2 won!";
          break;
      }
      break;
    case p1 === "scissors":
      switch (p2) {
        case "paper":
          return "Player 1 won!";
          break;
        case "rock":
          return "Player 2 won!";
          break;
      }
      break;
    case p1 === "paper":
      switch (p2) {
        case "scissors":
          return "Player 2 won!";
          break;
        case "rock":
          return "Player 1 won!";
          break;
      }
      break;
  }
};

console.log(rps("scissors", "rock"));
console.log(rps("paper", "scissors"));
console.log(rps("rock", "rock"));
