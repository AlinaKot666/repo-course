// age function 
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// function with argument
const result1 = isAdult(21);
const result2 = isAdult(11);


console.log("21 is adult?", result1); // true
console.log("11 is adult?", result2); // false