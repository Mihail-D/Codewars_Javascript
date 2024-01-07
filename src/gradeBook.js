function getGrade(s1, s2, s3) {
  let mean = (s1 + s2 + s3) / 3;
  switch (true) {
    case mean >= 90 && mean <= 100:
      return "A";
      break;
    case mean >= 80 && mean <= 90:
      return "B";
      break;
    case mean >= 70 && mean <= 80:
      return "C";
      break;
    case mean >= 60 && mean <= 70:
      return "D";
      break;
    case mean >= 0 && mean <= 60:
      return "F";
      break;
    default:
      break;
  }
}

console.log(getGrade(100,85,96));
console.log(getGrade(70, 70, 100));
console.log(getGrade(70, 70, 70));
console.log(getGrade(48, 55, 52));

/*
90 <= score <= 100 	'A'
80 <= score < 90 	  'B'
70 <= score < 80 	  'C'
60 <= score < 70 	  'D'
0 <= score < 60 	  'F'
*/
