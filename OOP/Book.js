// Creation of the Book class
class Book {
  constructor(title, author, year) {
    this.title = title;   // name
    this.author = author; // author
    this.year = year;     // year of publication
  }

  // Method for displaying a book description
  printInfo() {
    console.log(`Книга: "${this.title}", Автор: ${this.author}, Рік: ${this.year}`);
  }
}

// Create a bunch of objects for the Book class
const book1 = new Book("The Maister and Margarita", "Mikhailo Bulgakov", 1967);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Kobzar", "Taras Shevchenko", 1840);

// Call the printInfo method for the skin book
book1.printInfo();
book2.printInfo();
book3.printInfo();