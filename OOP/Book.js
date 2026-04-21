export class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    printInfo() {
        console.log(`Назва: ${this._title}, Автор: ${this._author}, Рік: ${this._year}`);
    }


    get title() { return this._title; }
    get author() { return this._author; }
    get year() { return this._year; }

    set title(value) {
        if (typeof value === 'string' && value.length > 0) this._title = value;
        else console.error('Title must be a non-empty string');
    }
    set author(value) {
        if (typeof value === 'string' && value.length > 0) this._author = value;
        else console.error('Author must be a non-empty string');
    }
    set year(value) {
        if (Number.isInteger(value) && value > 0) this._year = value;
        else console.error('Year must be a positive integer');
    }

   
    static getOldestBook(books) {
        return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest), books[0]);
    }
}