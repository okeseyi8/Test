const scores = [45, 72, 88, 91, 55, 38, 67, 94];
let passcount = 0;
let failcount = 0;

let highestScore = scores[0];
let lowestScore = scores[0];


for (let i = 0; i < scores.length; i++) {

  if (scores[i] > highestScore) highestScore = scores[i];
  if (scores[i] < lowestScore) lowestScore = scores[i];



  if (scores[i] >= 90 && scores[i] <= 100) {
    console.log("A");
  } else if(scores[i] >= 70 && scores[i] <= 89) {
    console.log("B");
  } else if(scores[i] >= 50 && scores[i] <= 69) {
    console.log("C");
  } else if(scores[i] < 50) {
    console.log("F");
  }
  if (scores[i] >= 50) {
    passcount++;
  } else {
        failcount++;
  }
}

  
  console.log("Passed " + passcount);
  console.log("Failed " + failcount);

  console.log("Highest Score: " + highestScore);
  console.log("Lowest Score: " + lowestScore);