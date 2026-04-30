# BRAIN TEASERS — Conceptual Depth Round
**[No additional marks — but answers are discussed in the debrief]**

> These questions have no "trick." They test whether you actually understand what the tools you use every day *are*, not just how to use them. Answer in your own words. If you can't explain it without using the word itself, you don't understand it yet.

---

**1. What is a String — really?**

Most people say "a string is text." Go deeper.

- What is a string made of at the lowest level?
- Strings in Python are **immutable**. What does that mean, and what actually happens in memory when you do this:
```python
name = "Alice"
name = name + " Smith"
```
- If strings are immutable, why does the above code seem to "work"? Where does the old value go?

---

**2. What is a List — really?**

- A list is not just "a collection of items." What does Python actually store internally when you create a list?
- What is the difference between **mutability** and **variability**? A list is mutable — what does that mean in terms of memory?
- What does this code do to memory, and why does it matter?
```python
a = [1, 2, 3]
b = a
b.append(4)
print(a)
```
- Why is `a` affected even though you only changed `b`?

---

**3. What is a Loop — really?**

- When Python runs a `for` loop over a list, what is it actually doing step by step? What mechanism makes this possible?
- What is an **iterator**, and how is it different from an **iterable**?
- Can you loop over a string in Python? Why or why not — explain the mechanism, not just the answer.
- What does `range(5)` actually return? Is it a list? How does Python know what the next value is without storing all of them at once?

---

**4. What is a Function — really?**

- A function is not just "a block of code with a name." What is a function in Python at a deeper level?
- What is a **call stack**? What happens to it when a function calls another function? What happens when the function finishes?
- What does this code print? Explain *why* step by step:
```python
x = 10

def change_it():
    x = 99
    print("Inside:", x)

change_it()
print("Outside:", x)
```
- What is the difference between a **local variable** and a **global variable** in terms of where they live in memory?

---

**5. What are Built-in Functions — really?**

- Functions like `len()`, `print()`, `type()`, `range()` are called "built-ins." What makes them different from a function you write yourself?
- When you call `len("hello")`, what is Python actually doing? Who "told" Python how to get the length of a string?
- Why are built-in functions generally faster than writing your own version of the same thing?
- `print()` is one of the most used built-ins. What is it actually doing at the system level when it "prints" something to the screen?

---

**6. What is a Tuple — really?**

- A tuple looks like a list but is immutable. Why does that distinction matter? Can you think of a real scenario where you would *need* a tuple instead of a list?
- What does it mean that tuples are **hashable** but lists are not? What does "hashable" mean?
- Why can you use a tuple as a dictionary key but not a list? Explain the reason, not just the rule.
- What does this do and why?
```python
t = (1, 2, 3)
t[0] = 99
```

---

**7. What is a Set — really?**

- A set stores unique values. But *how* does Python check if a value already exists in a set? What data structure does it use internally?
- Why does a set lookup (`x in my_set`) run in **O(1)** time while a list lookup (`x in my_list`) runs in **O(n)** time? Explain the difference.
- Sets are **unordered**. What does that mean technically? Can you predict what order items will come out of a set? Why or why not?
- Why can you only store **hashable** values in a set? What happens if you try to add a list to a set?

---

**8. What is a Memory Address — really?**

- Every variable in Python doesn't directly store a value. What does it actually store?
- Run this in your head first, then explain the output:
```python
a = [1, 2, 3]
b = a
c = [1, 2, 3]

print(a is b)
print(a is c)
print(a == c)
```
- What is `id()` in Python? What does the number it returns represent?
- What is the difference between **the stack** and **the heap** in terms of how data is stored? Where does a Python list live — stack or heap? What about an integer?
- When Python's garbage collector deletes an object, what triggers it? What is **reference counting**?

---

*End of Assessment*