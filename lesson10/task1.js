const Book = require("./Book");
const EBook = require("./EBook");

// create book objects
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

// create ebook object
const ebook1 = new EBook("Clean Code", "Robert C. Martin", 2008, "PDF");

// print info about all books
book1.printInfo();
book2.printInfo();
book3.printInfo();
ebook1.printInfo();

// array of books
const library = [book1, book2, book3, ebook1];

// find the oldest book
const oldestBook = Book.getOldestBook(library);
console.log("\nOldest book in the library:");
oldestBook.printInfo();

// create ebook from book
const ebookFromBook = EBook.fromBook(book2, "EPUB");
console.log("\nEBook created from existing book:");
ebookFromBook.printInfo();
