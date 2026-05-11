const gradeBook = {
 Alice: [85, 90, 78],
 Bob: [70, 65, 80],
 Charlie: [95, 88, 92],
 Diana: [60, 74, 55]
};
gradeBook.Eve = [88, 74, 91];
delete gradeBook.Bob;

  let highestAverage = 0;
  let topStudent = '';

for(let student in gradeBook) {
  let total = 0;
  for(let grade of gradeBook[student]) {
    total += grade;
  }
   let average = total / gradeBook[student].length;
      if(average > highestAverage) {
        highestAverage = average;
        topStudent = student;
      }

  console.log(` ${student}: average ${average.toFixed(1)}`);
  console.log(`${student} : ${gradeBook[student]}`);
}
  console.log(`Highest average: ${highestAverage.toFixed(1)} (${topStudent})`);
  let winner = null;
  if (gradeBook.Eve) winner = "Eve"; 
  console.log(winner);


