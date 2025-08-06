// 1. Creation of an object book
const book = {
  title: "The life is hard",
  author: "Alina Kot",
  year: "2025"
};

// 2. Destructuring the title and author (especial author)
const { title, author } = book;

// 3. Destructured Variables (and author of course) Output
console.log("Title:", title);
console.log("Author:", author);