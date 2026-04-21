import { Book } from './Book.js';

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    printInfo() {
        super.printInfo();
        console.log(`Формат файлу: ${this._fileFormat}`);
    }

    get fileFormat() { return this._fileFormat; }
    set fileFormat(value) {
        if (typeof value === 'string' && value.length > 0) this._fileFormat = value;
        else console.error('File format must be a non-empty string');
    }

    static fromBook(bookInstance, fileFormat) {
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}