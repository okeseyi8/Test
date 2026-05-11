const students = {
    Alice: 88,
    Bob: 95,
    Charlie: 72,
    Diana: 60,
    Eve: 45
};

function getLetterGrade(score) {
  if(score >= 80) return "A";
  if(score >= 70) return "B";
  if(score >= 50) return "C";
  if(score >= 40) return "D";
  if(score < 40) return "F";
}

function calculateAverage(scoresArray) {
  let total = 0;
  for(let score of scoresArray) {
    total += score;
  }
  let average = total / scoresArray.length;
  return average.toFixed(2);
}

function getTopStudent(studentObj) {  
  let topName = "";
  let topScore = 0;

  for(let name in studentObj) {
    let currentScore = studentObj[name];

    if(currentScore > topScore) {
      topScore = currentScore;
      topName = name;
    }
  }
  return topName;
}

console.log("Student Grades");
for(let name in students) {
  let score = students[name];
  let grade = getLetterGrade(score);
  console.log(`${name} : ${grade}`);
}

const allScores = Object.values(students);
const classAverage = calculateAverage(allScores);
console.log(`Average : ${classAverage}`);

const firstPosition = getTopStudent(students);
console.log("Top Student: " + firstPosition);