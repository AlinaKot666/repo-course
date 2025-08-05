const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

// 1. Copy the original array
const sortedList = [...numbersList];

// 2. Sort the copy in ascending order
sortedList.sort((a, b) => a - b);

// 3. Output both arrays to the console
console.log("Original array:", numbersList);
console.log("Sorted array:", sortedList);