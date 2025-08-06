// 1. Creating an array of users objects
const users = [
  { name: "Alina", email: "alina@example.com", age: 30 },
  { name: "Dmytro", email: "dmytro@example.com", age: 25 },
  { name: "Olena", email: "olena@example.com", age: 35 }
];

// 2. Array traversal with destructuring
for (const { name, email, age } of users) {
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}