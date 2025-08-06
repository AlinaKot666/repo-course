// 1. Creating an object person
const person = {
  firstName: "Alina",
  lastName: "Kot",
  age: 30
};

// 2. Adding a property email
person.email = "alina@example.com";

// 3. Deleting a property age
delete person.age;

// 4. Outputting the updated object to the console
console.log(person);