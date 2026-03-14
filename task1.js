function printMessage(text, delay) {
  setTimeout(() => {
    console.log(text);
  }, delay);
}

// example
printMessage("This message will appear after 2 seconds", 2000);
printMessage("JavaScript is working!", 1000);
