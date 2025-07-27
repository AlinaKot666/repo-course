function countdown(num) {
  if (num <= 0) {
    return; // Stop recursion
  }

  console.log(num); // Displays curently meaning
  countdown(num - 3); // Recursive call
}

// Function with argument 15
countdown(15);