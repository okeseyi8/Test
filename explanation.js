// // x = 0 
// //  y = 0

// let x  = 3
// // y = 0
// var y = 5
// function blockScope() {
//   var y = 4
//   console.log(x + 1 + y)

// }
// function anotherScope(){
//   console.log(x  + 3 + y)
// }
// blockScope()
// anotherScope()
// find the highest score

const scores = [85, 90, 78, 92, 65];
let highScorers = 0;

for (let i = 0; i <= scores.length; i++) {
    if (scores[i] >= 90) {
        highScorers += 1;
    }
}

let count = 0;
while (count < scores.length) {
    console.log(scores[count]);
    break
}

console.log("High scorers:", highScorers);