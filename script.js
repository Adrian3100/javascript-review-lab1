// Function to print the full song
function printSong() {
  console.log("Row, row, row your boat,\nGently down the stream.");
  console.log("Merrily, merrily, merrily, merrily,\nLife is but a dream.\n");
  console.log("Row, row, row your boat,\nGently down the stream.");
  console.log("If you see a crocodile,\nDon't forget to scream!\n");
}

// Function for repeated refrain
function refrain() {
  console.log("Row, row, row your boat,\nGently down the stream.");
}

// Function to simplify the song using refrain()
function simplifiedSong() {
  refrain();
  console.log("Merrily, merrily, merrily, merrily,\nLife is but a dream.\n");
  refrain();
  console.log("If you see a crocodile,\nDon't forget to scream!\n");
}

// Refactored function using return statement
function refactoredRefrain() {
  return "Row, row, row your boat,\nGently down the stream.";
}

// Refactored song function using `refactoredRefrain()`
function refactoredSong() {
  console.log(refactoredRefrain());
  console.log("Merrily, merrily, merrily, merrily,\nLife is but a dream.\n");
  console.log(refactoredRefrain());
  console.log("If you see a crocodile,\nDon't forget to scream!\n");
}

// Run the final refactored song
refactoredSong();
