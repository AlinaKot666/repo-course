lesson10/Book.js
class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  // getters
  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  // setters with validation
  set title(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new Error("Title must be a non-empty string");
    }
    this._title = value;
  }

  set author(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new Error("Author must be a non-empty string");
    }
    this._author = value;
  }

  set year(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("Year must be a positive number");
    }
    this._year = value;
  }

  // method to print info
  printInfo() {
    console.log(`Book: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
  }

  // static method to find oldest book
  static getOldestBook(books) {
    return books.reduce((oldest, book) => {
      return book.year < oldest.year ? book : oldest;
    });
  }
}

module.exports = Book;
