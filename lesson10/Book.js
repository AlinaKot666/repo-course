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
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Title must be a valid string");
    }
    this._title = value;
  }

  set author(value) {
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error("Author must be a valid string");
    }
    this._author = value;
  }

  set year(value) {
    if (typeof value !== "number" || value < 1000 || value > new Date().getFullYear()) {
      throw new Error("Year must be a valid number");
    }
    this._year = value;
  }

  // print book info
  printInfo() {
    console.log(`"${this.title}" by ${this.author}, published in ${this.year}`);
  }

  // static method to find the oldest book
  static getOldestBook(books) {
    return books.reduce((oldest, current) =>
      current.year < oldest.year ? current : oldest
    );
  }
}

module.exports = Book;
