const scores = [85, 90, 78, 92, 65];
let highScorers = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 90) {
        highScorers += 1; 
    }
}
let count = 0;
while (count < scores.length) {
    console.log(scores[count]);
    count++;
}
console.log("High scorers:", highScorers);
