// 1. Creating objects car1 and car2
const car1 = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

const car2 = {
  brand: "Honda",
  model: "Civic",
  owner: "Alina"
};

// 2. Combining car1 and car2 into car3 using the spread operator
const car3 = {
  ...car1,
  ...car2
};

// 3. Вивід об'єкта car3 в консоль
console.log(car3);