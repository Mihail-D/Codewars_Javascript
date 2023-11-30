function bmi(weight, height) {
  let square;
  let bmiTotal = weight / (height * height);

  if (bmiTotal <= 18.5) {
    return "Underweight";
  } else if (bmiTotal <= 25.0) {
    return "Normal";
  } else if (bmiTotal <= 30.0) {
    return "Overweight";
  } else if (bmiTotal > 30) {
    return "Obese";
  }
}

console.log(bmi(80, 1.8));

/* if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese" */
