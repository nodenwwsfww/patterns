import { IBookRepository } from './IBookRepository';
import { STORAGE_KEY } from '../constants';

class BookRepository implements IBookRepository {
    private static instance: BookRepository = new BookRepository();

    private constructor() { }

    public static getInstance(): BookRepository {
        return BookRepository.instance;
    }

    private save(books: Book[]): void {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
        console.info(`Saved ${books.length} books to localStorage`);
    }

    getAll(): Book[] {
        try {
            const books = localStorage.getItem(STORAGE_KEY);
            const parsedBooks: Book[] = books ? JSON.parse(books) : [];
            console.info(`Retrieved ${parsedBooks.length} books from localStorage`);
            return parsedBooks;
        } catch (error) {
            console.error('Error reading from local storage', error);
            return [];
        }
    }

    add(book: Book): void {
        const books = this.getAll();
        books.push(book);
        this.save(books);
        console.info(`Added book: ${JSON.stringify(book)}`);
    }

    update(updatedBook: Book): void {
        const books = this.getAll().map(book => (book.id === updatedBook.id ? updatedBook : book));
        this.save(books);
        console.info(`Updated book: ${JSON.stringify(updatedBook)}`);
    }

    delete(id: string): void {
        const books = this.getAll().filter(book => book.id !== id);
        this.save(books);
        console.info(`Deleted book with id: ${id}`);
    }

    get(id: string): Book | undefined {
        const books = this.getAll();
        const book = books.find(book => book.id === id);
        if (book) {
            console.info(`Retrieved book with id: ${id}`);
        } else {
            console.info(`No book found with id: ${id}`);
        }
        return book;
    }
}

export { BookRepository };