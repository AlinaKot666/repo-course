// === Function for checking an order ===
function checkOrder(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty";
  } else if (ordered > available) {
    return "Your order is too large, we don’t have enough goods.";
  } else {
    return "Your order is accepted";
  }
}

// === 1. Empty order ===
const available1 = 10;
const ordered1 = 0;
const result1 = checkOrder(available1, ordered1);
console.log("1 — Empty order:", result1);

// === 2. To large order ===
const available2 = 5;
const ordered2 = 8;
const result2 = checkOrder(available2, ordered2);
console.log("2 — Not enough goods:", result2);

// === 3. Order is accepted ===
const available3 = 20;
const ordered3 = 15;
const result3 = checkOrder(available3, ordered3);
console.log("3 — Order is accepted:", result3);