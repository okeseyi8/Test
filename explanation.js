// // // x = 0 
// // //  y = 0

// // let x  = 3
// // // y = 0
// // var y = 5
// // function blockScope() {
// //   var y = 4
// //   console.log(x + 1 + y)

// // }
// // function anotherScope(){
// //   console.log(x  + 3 + y)
// // }
// // blockScope()
// // anotherScope()
// // find the highest score

// const scores = [85, 90, 78, 92, 65];
// let highScorers = 0;

// for (let i = 0; i <= scores.length; i++) {
//     if (scores[i] >= 90) {
//         highScorers += 1;
//     }
// }

// let count = 0;
// while(count <= 5){
//   console.log(scores[count])
//   count = count + 1


// }
// // while (count < scores.length) {
// //     console.log(scores[count]);
// //     // count = count + 1
    
// // }

// console.log("High scorers:", highScorers);


// const phones = ["iphone 12", "iphone 13", "iphone 14"];

// for(let phone of phones) {
//   console.log(phone);
// }

// for(let phone in phones) {
//   console.log(phone);
// }


// const numbers = [1,2,3,4,5];

// for(let num of numbers) {
//   if(num === 3) break;
//   console.log(num);
// }

// for(let num of numbers) {
//   if(num % 2 === 0) continue;
//   console.log(num);
// }



const greetStudent = function (name) {
    return "Welcome, " + name;
};
console.log(greetStudent("Alice"));
// ---

function updateScore(student, newScore) {
    student.score = newScore;
    return student;
}

const original = { name: "Bob", score: 75 };
console.log("Original:", original.score);  // Expecting 75
const updated = updateScore(original, 90);

console.log("Updated:", updated.score);    // Expecting 90



// announcement ();
// function announcement() {
//   console.log("Welcome to the class!");
// }



// const announcement = function () {
//   console.log("Welcome to the class!");
// }
// announcement ();



// const scores = [10, 20, 30, 40, 50];
// let total = 0;

// for (let score in scores) {
//     total = total + score;
// }

// console.log("Total:", total);


// const a = [1, 2, 3];
// const b = a;
// b.push(4);
// console.log(a);