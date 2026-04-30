# JavaScript Developer Internship — Hands-On Assessment
**Duration:** 2 Hours(starting immediately when you get access to this repo) | **Total Marks:** 100

---

## Rules
- You are advised to test yourself with the BrainTeaser(Brain Teasers do not give you any extra mark)
- Stack Overflow or forums is allowed
- MDN Web Docs (`developer.mozilla.org`) are allowed
- Run your code in a browser console or Node.js — test it before submitting
- **Explain questions are graded equally to code.** Write answers in your own words. One-word answers get zero marks.
- You may use any text editor or IDE

---

## Grading Breakdown

| Section | Concept | Marks |
|---|---|---|
| 1 | Variables & Data Types | 20 |
| 2 | Control Flow | 20 |
| 3 | Functions | 20 |
| 4 | Data Structures (Arrays & Objects) | 20 |
| 5 | Error Handling | 20 |
| **Bonus** | Integration | +10 |

---

---

# SECTION 1 — Variables & Data Types
**[20 marks | ~20 minutes]**

---

### Task 1A — Build (8 marks)

You are setting up a student profile system. Write JavaScript code that does the following:

1. Declares variables (using the correct `let` or `const`) to store a student's: **name** (string), **age** (number), **gpa** (number), and **isActive** (boolean).
2. Prints a formatted profile card to the console exactly like this:
```
Name: John Doe
Age: 21
GPA: 3.75
Status: Active
```
   - If `isActive` is `true`, print `Active`. If `false`, print `Inactive`. Use a **ternary operator** for this — not an if/else block.
3. On a **single line**, checks if the GPA is between `3.5` and `4.0` inclusive, and logs either `"Dean's List"` or `"Not on Dean's List"`.

---

### Task 1B — Debug (4 marks)

The code below has **bugs**. Fix all of them so it runs correctly. List each bug and explain what was wrong in the space below.

```javascript
const studentName = "Alice";
let studentAge = "20";
const gpa = 3.8;

let yearsUntilGraduation = studentAge + 2;
console.log("GPA x Age:", gpa * studentAge);

if (studentAge > 18) {
    console.log("Is an adult");
}

studentName = "Bob";
console.log(studentName);
```

**Your explanation of the bugs:**
```
Bug 1:
Bug 2:
Bug 3:
```

---

### Explain Questions (8 marks — 2 marks each)

**Q1.** What is the difference between `var`, `let`, and `const`? Why would using `var` in modern JavaScript be considered bad practice?

**Q2.** What does each of these log, and why?
```javascript
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
```

**Q3.** What is the difference between `==` and `===`? What does this log and why?
```javascript
console.log("5" == 5);
console.log("5" === 5);
console.log(0 == false);
console.log(0 === false);
```

**Q4.** JavaScript has a famous floating-point quirk. What does this log, and why does it happen?
```javascript
console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2);
```

---
---

# SECTION 2 — Control Flow
**[20 marks | ~25 minutes]**

---

### Task 2A — Build (10 marks)

Write a program using **only the array below** (no user input):

```javascript
const scores = [45, 72, 88, 91, 55, 38, 67, 94];
```

Your program must:
1. Loop through every score and log it alongside its letter grade using this scale:
   - 90–100 → **A**
   - 70–89 → **B**
   - 50–69 → **C**
   - Below 50 → **F**
2. After the loop, log the count of students who **passed** (score ≥ 50) and the count who **failed**.
3. Log the **highest** and **lowest** score in the array — **without** using `Math.max()`, `Math.min()`, or `.sort()`.

**Constraint:** You must use a `continue` statement somewhere in your solution in a way that makes logical sense.

---

### Task 2B — Debug (4 marks)

This code has bugs — some crash, some are silent logic errors. Fix all of them and explain each one below.

```javascript
const scores = [85, 90, 78, 92, 65];
let highScorers = 0;

for (let i = 0; i <= scores.length; i++) {
    if (scores[i] >= 90) {
        highScorers + 1;
    }
}

let count = 0;
while (count < scores.length) {
    console.log(scores[count]);
}

console.log("High scorers:", highScorers);
```

**Your explanation of the bugs:**
```
Bug 1:
Bug 2:
Bug 3:
Bug 4:
```

---

### Explain Questions (6 marks — 2 marks each)

**Q1.** What is the difference between `for...of` and `for...in`? What happens if you use `for...in` on an array? Write a short example to show the difference.

**Q2.** If a `for` loop runs with `for (let i = 0; i < 5; i++)`, write out every value `i` takes during the loop.

**Q3.** What does `break` do versus `continue`? Write one short code snippet for each that shows them being used meaningfully.

---
---

# SECTION 3 — Functions
**[20 marks | ~25 minutes]**

---

### Task 3A — Build (12 marks)

Using the student data below, write three separate functions:

```javascript
const students = {
    Alice: 88,
    Bob: 95,
    Charlie: 72,
    Diana: 60,
    Eve: 45
};
```

1. **`getLetterGrade(score)`** — Takes a score (0–100) and **returns** the letter grade (A/B/C/F). No `console.log` inside the function.

2. **`calculateAverage(scoresArray)`** — Takes an **array** of numbers and returns their average rounded to **2 decimal places**. It must work for arrays of any length.

3. **`getTopStudent(studentObj)`** — Takes an object (names → scores) and returns the **name** of the student with the highest score. Do not use `Math.max()` with spread — find the top student with a loop.

After defining your functions, call all three and log the results using the `students` object above. Show that `getLetterGrade` works for each student's score.

**Bonus within this task (no extra marks, but noted):** Rewrite `getLetterGrade` as an **arrow function** after your regular version.

---

### Task 3B — Debug (4 marks)

This code has two different bugs. One crashes, one is a silent behaviour issue. Find both, explain them, and fix the code.

```javascript
console.log(greetStudent("Alice"));

const greetStudent = function(name) {
    return "Welcome, " + name;
};

// ---

function updateScore(student, newScore) {
    student.score = newScore;
    return student;
}

const original = { name: "Bob", score: 75 };
const updated = updateScore(original, 90);

console.log("Original:", original.score);  // Expecting 75
console.log("Updated:", updated.score);    // Expecting 90
```

**Your explanation:**
```
Bug 1 (the crash):
  What happens:
  Why it happens:
  How to fix it:

Bug 2 (the silent issue):
  What actually logs for original.score:
  Why this happens:
  How to fix it:
```

---

### Explain Questions (4 marks — 2 marks each)

**Q1.** What is **hoisting** in JavaScript? How does it behave differently for `function declarations` vs `function expressions`? Write a code example showing where one works before its definition and the other does not.

**Q2.** What is the difference between a **regular function** and an **arrow function** when it comes to `this`? You do not need to explain `this` in full — just explain what is different between the two.

---
---

# SECTION 4 — Data Structures (Arrays & Objects)
**[20 marks | ~25 minutes]**

---

### Task 4A — Build (12 marks)

Build a **grade book** using the data below:

```
Alice:   [85, 90, 78]
Bob:     [70, 65, 80]
Charlie: [95, 88, 92]
Diana:   [60, 74, 55]
```

1. Store this as a JavaScript **object** called `gradeBook` where each key is a student name and each value is an **array** of their scores.
2. Loop through `gradeBook` and log each student's name and their **average score** (rounded to 1 decimal place).
3. Find and log the name of the student with the **highest average** — using your loop, not a built-in shortcut.
4. Add a new student **"Eve"** with scores `[88, 74, 91]` to the grade book **without rewriting the whole object**.
5. Delete **"Bob"** from the grade book entirely. Log the remaining keys to confirm he is gone.

---

### Task 4B — Debug (4 marks)

This code looks correct but does not behave as expected. Find the bug, explain why it happens, and fix it.

```javascript
const scores = [10, 20, 30, 40, 50];
let total = 0;

for (let score in scores) {
    total = total + score;
}

console.log("Total:", total);
// Expected: 150
```

**Your explanation:**
```
What actually logs:

Why this happens:

How to fix it:
```

---

### Explain Questions (4 marks — 2 marks each)

**Q1.** In JavaScript, objects and arrays are **reference types**. What does this mean? What does this code log, and why?
```javascript
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a);
```

**Q2.** What is the difference between `null` and `undefined` in JavaScript? Write one scenario where you would intentionally assign `null` to a variable, and explain why.

---
---

# SECTION 5 — Error Handling
**[20 marks | ~20 minutes]**

---

### Task 5A — Build (12 marks)

Write two functions:

**Function 1: `safeDivide(a, b)`**
- Divides `a` by `b` and returns the result
- If `b` is zero: log `"Error: Cannot divide by zero"` and return `null`
- If `a` or `b` is not a number (`typeof` check): log `"Error: Both inputs must be numbers"` and return `null`
- Must use `try/catch` — do not rely only on `if` checks

**Function 2: `processDivisions(pairs)`**
- Takes an array of arrays like: `[[10, 2], [5, 0], [8, "x"], [9, 3]]`
- Calls `safeDivide` on each pair
- For each pair, logs either the result or the error
- After processing all pairs, logs how many divisions **succeeded** and how many **failed**

Test with this input:
```javascript
const testPairs = [[10, 2], [5, 0], [8, "x"], [9, 3], [0, 5], [7, 0]];
```

---

### Task 5B — Debug (4 marks)

This code runs without crashing but has serious problems in its error handling. Identify **at least 2 issues**, explain them, and rewrite the function correctly.

```javascript
function parseScore(scoreStr) {
    try {
        const score = parseInt(scoreStr);
        if (score < 0 || score > 100) {
            console.log("Score out of range");
        }
        return score;
    } catch(e) {
        console.log("Something went wrong");
        return -1;
    }
}

console.log(parseScore("85"));
console.log(parseScore("abc"));
console.log(parseScore(null));
console.log(parseScore("150"));
```

**Your explanation:**
```
Issue 1:
Issue 2:
(Issue 3 if you find one):

Your corrected version:
```

---

### Explain Questions (4 marks — 2 marks each)

**Q1.** What is the difference between a **syntax error**, a **runtime error**, and a **logical error**? Give a JavaScript code example of each type.

**Q2.** What is `finally` used for in a try/catch block? Write a real-world scenario in JavaScript where `finally` is essential — not just convenient.

---
---

# BONUS — Integration Task
**[+10 marks | Only attempt if you have time remaining]**

Build a mini **Student Report System** in JavaScript from scratch that brings together everything from this test.

**Requirements:**
- Store at least **4 students**, each with **4 scores**, in a data structure of your choice
- Loop through each student, calculate their average, and assign a letter grade using a function
- Print a clean, formatted report to the console (think headers, separators, alignment)
- Handle at least **2 types of potential errors** — e.g. missing scores, non-numeric values, empty arrays
- Use at least **one arrow function** and at least **one regular function** — each where it makes the most sense
- Write at least **one comment** explaining a non-obvious decision you made

**There are no further instructions.** The design is entirely yours. You will be asked to walk through and explain every line of your bonus code.

---

---
---

**[No additional marks — but answers are discussed in the debrief]**

> These questions have no "trick." They test whether you actually understand what the tools you use every day *are*, not just how to use them. Answer in your own words. If you can't explain it without using the word itself, you don't understand it yet.

---

**1. What is a String — really?**

Most people say "a string is text." Go deeper.

- What is a string made of at the lowest level?
- Strings in JavaScript are **primitive** and **immutable**. What does immutable mean, and what actually happens when you do this:
```javascript
let name = "Alice";
name = name + " Smith";
```
- If strings are immutable, why does the above code seem to work? Is the original `"Alice"` string changed or replaced?
- JavaScript strings have methods like `.toUpperCase()` and `.slice()`. But strings are primitives — so how do they have methods? What is actually happening when you call `"hello".toUpperCase()`?

---

**2. What is an Array — really?**

- An array is not just "a collection of items." What does JavaScript actually store internally when you create an array?
- Arrays in JavaScript are **objects**. What does that mean? What does `typeof []` return, and why?
- What does this code do to memory, and why?
```javascript
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a);
```
- Why is `a` affected even though you only modified `b`? What does `const` protect here, and what does it NOT protect?

---

**3. What is a Loop — really?**

- When JavaScript runs a `for...of` loop over an array, what is it actually doing internally? What mechanism makes this possible?
- What is an **iterable** in JavaScript? What makes an array iterable but a plain object not iterable by default?
- What does `for...in` iterate over — and why is it dangerous to use on arrays? What is it actually iterating?
- JavaScript is **single-threaded**. So how does a `while(true)` loop affect everything else running in the browser or Node.js?

---

**4. What is a Function — really?**

- A function is not just "a block of code with a name." In JavaScript, functions are **first-class objects**. What does that mean specifically?
- What is the **call stack**? Walk through what happens to it when this code runs:
```javascript
function multiply(a, b) {
    return a * b;
}
function square(n) {
    return multiply(n, n);
}
console.log(square(4));
```
- What is a **closure**? What does this code print and why?
```javascript
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
```
- How does the inner function still have access to `count` even after `makeCounter` has finished running?

---

**5. What are Built-in Functions/Methods — really?**

- Methods like `.push()`, `.map()`, `.filter()`, `console.log()` are built-in. What makes them different from a function you write yourself?
- When you call `[1, 2, 3].length`, you're accessing a property. When you call `[1, 2, 3].push(4)`, you're calling a method. Where do these properties and methods actually come from? What is the **prototype chain**?
- `console.log()` "prints" to the console. What is it actually doing at a lower level? What is the console?
- Why is `Array.isArray([])` more reliable than `typeof []` for checking if something is an array?

---

**6. What is a Set — really?**

- A JavaScript `Set` stores unique values. But *how* does it check if a value already exists? What data structure is it built on?
- Why does a `Set` lookup run faster than searching through an array with `.includes()`? Explain the difference in how they search.
- Sets are **iterable** but have no index. What does that mean — can you do `mySet[0]`?
- What does this code output and why?
```javascript
const s = new Set([1, 2, 3, 2, 1]);
console.log(s.size);

const s2 = new Set([[1,2], [1,2]]);
console.log(s2.size);
```
- Why are the results different? What does JavaScript use to determine if two values are "the same" in a Set?

---

**7. What is a Memory Address — really?**

- In JavaScript, **primitives** (numbers, strings, booleans) and **objects/arrays** are stored differently. Explain the difference between storing by **value** vs storing by **reference**.
- Look at this code. Predict the output and explain exactly why:
```javascript
let a = 5;
let b = a;
b = 10;
console.log(a);

let obj1 = { score: 5 };
let obj2 = obj1;
obj2.score = 10;
console.log(obj1.score);
```
- What is the **heap** vs the **stack** in terms of memory? Where does a JavaScript number live? Where does an object live?
- JavaScript has a **garbage collector**. What problem does it solve, and what triggers it to clean up an object?
- What does it mean when developers say two variables point to the same object "in memory"? What is actually happening at the hardware level in plain terms?

---

*End of Assessment*