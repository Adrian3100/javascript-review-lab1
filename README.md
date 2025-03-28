# Simplify a Song Using JavaScript Functions

## **Project Overview**

This project demonstrates how to **use functions in JavaScript** to simplify repetitive code. We take a well-known song, "Row, Row, Row Your Boat," and break it into reusable functions.

---

## Technologies Used

- HTML
- JavaScript
- GitHub

---

## **How It Works**

1. **printSong()** - Prints the full song without any optimization.
2. **refrain()** - A function that prints the repeated lines.
3. **simplifiedSong()** - Calls `refrain()` to reduce code repetition.
4. **refactoredRefrain()** - Returns the repeated lines as a string.
5. **refactoredSong()** - Uses `console.log(refactoredRefrain())` to print the refrain efficiently.

---

## Code Example

```javascript
function refactoredRefrain() {
  return "Row, row, row your boat,\nGently down the stream.";
}

function refactoredSong() {
  console.log(refactoredRefrain());
  console.log("Merrily, merrily, merrily, merrily,\nLife is but a dream.\n");
  console.log(refactoredRefrain());
  console.log("If you see a crocodile,\nDon't forget to scream!\n");
}
```
