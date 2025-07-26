// 1. Function that accepts 3 parameters
function handleNum(number, evenCallback, oddCallback) {
  if (number % 2 === 0) {
    evenCallback(); // Callback for a paired number
  } else {
    oddCallback(); // Callback for an unpaired number
  }
}

// 2. Callback function for a paired number
 function handleEven() {
   console.log("number is even");
 }

// 3. Callback function for an unpaired number
 function handleOdd() {
   console.log("number is odd");
 }

// 4. HandleNum with an example
handleNum(10, handleEven, handleOdd); // number is even
handleNum(9, handleEven, handleOdd);  // number is odd