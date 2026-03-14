function showMessageLater(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

// examples
showMessageLater("Preparing your report...", 1500);
showMessageLater("Connecting to the server...", 2000);
showMessageLater("Data loaded successfully!", 3000);
