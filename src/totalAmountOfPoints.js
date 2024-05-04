function points(games) {
  let score = 0;

  for (let i = 0; i < games.length; i++) {
    if (+games[i].charAt(0) > +games[i].charAt(2)) {
      score += 3;
    } else if (+games[i].charAt(0) === +games[i].charAt(2)) {
      score += 1;
    }
  }

  return score;
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
); // 30

/*  if x>y - 3 points
    if x<y - 0 point
		if x=y - 1 point
*/
