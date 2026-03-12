const Book = require("./Book");
const EBook = require("./EBook");

// обычные книги
const book1 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);
const book2 = new Book("Pride and Prejudice", "Jane Austen", 1813);
const book3 = new Book("The Little Prince", "Antoine de Saint-Exupéry", 1943);

// электронная книга
const ebook1 = new EBook("Atomic Habits", "James Clear", 2018, "EPUB");

// вывод информации
book1.printInfo();
book2.printInfo();
book3.printInfo();
ebook1.printInfo();

// массив книг (и Book, и EBook)
const books = [book1, book2, book3, ebook1];

// найти самую старую книгу
const oldestBook = Book.getOldestBook(books);
console.log("\nOldest book in the list:");
oldestBook.printInfo();

// создать EBook из обычной книги
const ebookFromBook = EBook.fromBook(book2, "PDF");
console.log("\nEBook created from Book:");
ebookFromBook.printInfo();
