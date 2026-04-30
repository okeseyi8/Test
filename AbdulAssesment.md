# Python Developer Internship — Hands-On Assessment
**Duration:** 2 Hours(starting immediately when you get access to this repo) | **Total Marks:** 100

---

## Rules
- You are advised to test yourself with the BrainTeaser (Brain Teasers do not give you any extra mark)
- Stack Overflow or forums is allowed
- Python official docs (`docs.python.org`) are allowed
- Your code **must run** — test it before submitting
- **Explain questions are graded equally to code.** Write answers in your own words. One-word answers get zero marks.
- You may use any text editor or IDE

---

## Grading Breakdown

| Section | Concept | Marks |
|---|---|---|
| 1 | Variables & Data Types | 20 |
| 2 | Control Flow | 20 |
| 3 | Functions | 20 |
| 4 | Data Structures | 20 |
| 5 | Error Handling | 20 |
| **Bonus** | Integration | +10 |

---

---

# SECTION 1 — Variables & Data Types
**[20 marks | ~20 minutes]**

---

### Task 1A — Build (8 marks)

You are setting up a student profile system. Write Python code that does the following:

1. Creates variables to store a student's: **name** (string), **age** (integer), **GPA** (float), and **is_active** (boolean).
2. Prints a formatted profile card exactly like this:
```
Name: John Doe
Age: 21
GPA: 3.75
Status: Active
```
   - If `is_active` is `True`, print `Active`. If `False`, print `Inactive`.
3. On a **single line**, checks if the GPA is between `3.5` and `4.0` inclusive, and prints either `"Dean's List"` or `"Not on Dean's List"`.

---

### Task 1B — Debug (4 marks)

The code below has **bugs**. Fix all of them so it runs correctly. Then, in the space below the code, **list each bug and explain what was wrong**.

```python
student_name = "Alice"
student_age = "20"
gpa = 3.8

years_until_graduation = student_age + 2
print("GPA points x age:", gpa * student_age)

is_adult = student_age > 18
print("Is adult:", is_adult)
```

**Your explanation of the bugs:**

```
Bug 1:
Bug 2:
Bug 3:
```

---

### Explain Questions (8 marks — 2 marks each)

Answer in your own words. No copied definitions.

**Q1.** What is the difference between `str`, `int`, and `float`? Give a real-world example of when you would use each one.

**Q2.** What does this line return, and **why**?
```python
type(True + 1)
```

**Q3.** What is the difference between `=` and `==`? What happens if you accidentally use `=` where `==` should be?

**Q4.** What does this print, and why?
```python
x = "5"
y = 5
print(x == y)
print(x == str(y))
```

---
---

# SECTION 2 — Control Flow
**[20 marks | ~25 minutes]**

---

### Task 2A — Build (10 marks)

Write a program using **only the list below** (no user input):

```python
scores = [45, 72, 88, 91, 55, 38, 67, 94]
```

Your program must:
1. Loop through every score and print it alongside its letter grade using this scale:
   - 90–100 → **A**
   - 70–89 → **B**
   - 50–69 → **C**
   - Below 50 → **F**
2. After the loop, print the **count of students who passed** (score ≥ 50) and the **count who failed**.
3. Print the **highest** and **lowest** score in the list — without using `max()` or `min()`.

**Constraint:** You must use a `continue` statement somewhere in your solution in a way that makes logical sense.

---

### Task 2B — Debug (4 marks)

This code has bugs — some cause crashes, some are silent logic errors. Fix all of them. List and explain each bug below.

```python
scores = [85, 90, 78, 92, 65]
high_scorers = 0

for score in scores:
    if score = 90:
        high_scorers + 1

count = 0
while count < len(scores)
    print(scores[count])
    count + 1
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

**Q1.** What is the difference between a `for` loop and a `while` loop? When would you deliberately choose a `while` loop over a `for` loop?

**Q2.** If a `for` loop runs over `range(1, 6)`, write out every value it will iterate over.

**Q3.** What does `break` do versus `continue`? Write one short code snippet for each that shows them being used meaningfully (not just `break` inside an empty loop).

---
---

# SECTION 3 — Functions
**[20 marks | ~25 minutes]**

---

### Task 3A — Build (12 marks)

Using the student data below, write three separate functions:

```python
students = {
    "Alice": 88,
    "Bob": 95,
    "Charlie": 72,
    "Diana": 60,
    "Eve": 45
}
```

1. **`get_letter_grade(score)`** — Takes a score (0–100) and returns the letter grade (A/B/C/F). No print statements inside this function — it must `return` the grade.

2. **`calculate_average(scores_list)`** — Takes a **list** of numbers and returns their average rounded to **2 decimal places**. It must work for a list of any length. Do not hardcode the length.

3. **`get_top_student(student_dict)`** — Takes a dictionary (names → scores) and returns the **name** of the student with the highest score. Do not use the built-in `max()` function with a key argument — find the top student using a loop.

After defining your functions, call all three and print the results using the `students` dictionary above. Show that `get_letter_grade` works for each student.

---

### Task 3B — Debug (4 marks)

Run this code mentally first. Then fix the bug and explain what is wrong and **why it happens**.

```python
def add_bonus(scores, bonus=5, result=[]):
    for score in scores:
        result.append(score + bonus)
    return result

class_a = [70, 80, 90]
class_b = [60, 75, 85]

print(add_bonus(class_a))  # Expected: [75, 85, 95]
print(add_bonus(class_b))  # Expected: [65, 80, 90] — but what actually prints?
```

**Your explanation:**
```
What actually prints on the second call:

Why this happens:

How to fix it:
```

---

### Explain Questions (4 marks — 2 marks each)

**Q1.** What is the difference between a **parameter** and an **argument**? Use the function below in your explanation:
```python
def greet(name):
    print("Hello", name)

greet("Alice")
```

**Q2.** What does a function return if it has no `return` statement? What **type** is that value? Write a short code snippet to prove it.

---
---

# SECTION 4 — Data Structures (Lists & Dicts)
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

1. Store this in a dictionary called `grade_book` where each key is a student name and each value is a **list** of their scores.
2. Loop through `grade_book` and print each student's name and their **average score** (rounded to 1 decimal place).
3. Find and print the name of the student with the highest average — using your loop, not a shortcut.
4. Add a new student **"Eve"** with scores `[88, 74, 91]` to the grade book **without rewriting the whole dictionary**.
5. Remove **"Bob"** from the grade book entirely and print the updated grade book keys to confirm he's gone.

---

### Task 4B — Debug (4 marks)

This code has a bug that will not always crash but will give wrong results. Find it, explain it, and fix it.

```python
students = ["Alice", "Bob", "Charlie", "Diana"]

for student in students:
    if student == "Bob" or student == "Diana":
        students.remove(student)

print(students)
```

**Your explanation:**
```
What actually prints:

Why this happens:

How to fix it:
```

---

### Explain Questions (4 marks — 2 marks each)

**Q1.** What is the difference between a **list** and a **dictionary**? Describe a real scenario where you would choose a dictionary over a list.

**Q2.** What happens when you try to access a dictionary key that does not exist? Write two different ways to safely handle this.

---
---



### Explain Questions (4 marks — 2 marks each)

**Q1.** What is the difference between a **syntax error** and a **runtime error**? Give a Python code example of each.

**Q2.** What is `finally` used for in a try/except block? Describe a real-world situation where you would need it.

---
---

# BONUS — Integration Task
**[+10 marks | Only attempt if you have time remaining]**

Build a mini **Student Report System** from scratch that brings together everything from this test.

**Requirements:**
- Store at least **4 students**, each with **4 scores**, in a data structure of your choice
- Loop through each student, calculate their average, and assign a letter grade using a function
- Print a clean, formatted report that looks like a real output (think headers, spacing)
- Handle at least **2 types of potential errors** — e.g. missing data, non-numeric scores, empty lists
- Write at least **one comment** in your code explaining a non-obvious decision you made

**There are no further instructions.** The design is yours. You will be asked to walk through and explain every line of your bonus code.

---

---
---

