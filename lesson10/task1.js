const Book = require("./Book");
const EBook = require("./EBook");

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);

const ebook1 = new EBook("Clean Code", "Robert Martin", 2008, "PDF");

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

const books = [book1, book2, ebook1];

const oldestBook = Book.getOldestBook(books);
console.log("Oldest book:");
oldestBook.printInfo();

const ebookFromBook = EBook.fromBook(book1, "EPUB");
ebookFromBook.printInfo();
