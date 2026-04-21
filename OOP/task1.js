import { Book } from './Book.js';
import { EBook } from './EBook.js';

const book1 = new Book('Кобзар', 'Тарас Шевченко', 2015);
const book2 = new Book("Кайдашева сім'я", 'Іван Нечуй-Левицький', 2010);
book1.printInfo();
book2.printInfo();


const ebook1 = new EBook('Цифровий світ', 'Автор Х', 2020, 'PDF');
ebook1.printInfo();


ebook1.title = 'Нова назва';
ebook1.fileFormat = 'EPUB';
console.log(ebook1.title, ebook1.fileFormat);

const oldestBook = Book.getOldestBook([book1, book2, ebook1]);
console.log('Найдавніша книга:');
oldestBook.printInfo();

const ebookFromBook = EBook.fromBook(book1, 'MOBI');
ebookFromBook.printInfo();