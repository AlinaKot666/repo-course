function divide(numerator, denominator) {
  // Validation
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error("Error: both arguments must be numbers");
  }

  // Валідація на ділення на 0
  if (denominator === 0) {
    throw new Error("Error: You cannot divide by zero.");
  }

  // Division result
  return numerator / denominator;
}

// Examles of testing
const testCases = [
  [10, 2],     // valid case
  [6, 0],      // division by zero
  [5, 'a'],    // denominator isnt a number
  ['b', 2],    // numerator isnt a number
  [9, 3],      // another valid case
];

// Checking each case
for (const [num, den] of testCases) {
  try {
    const result = divide(num, den);
    console.log(`Result: ${result}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  } finally {
    console.log("Work is done\n");
  }
}