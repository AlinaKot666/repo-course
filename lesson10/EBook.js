const Book = require("./Book");

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("File format must be a valid string");
    }
    this._fileFormat = value;
  }

  printInfo() {
    console.log(
      `"${this.title}" by ${this.author}, published in ${this.year} (E-book format: ${this.fileFormat})`
    );
  }

  // create EBook from existing Book
  static fromBook(book, format) {
    return new EBook(book.title, book.author, book.year, format);
  }
}

module.exports = EBook;
