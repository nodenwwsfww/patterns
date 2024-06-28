
import { BookRepository } from '../repositories/BookRepository';
import {IBookRepository} from "../repositories/IBookRepository.ts";
import {IBookService} from "./IBookService.ts";

class BookService implements IBookService {
    private static instance: BookService;
    private bookRepository: IBookRepository;

    private constructor(bookRepository: BookRepository) {
        this.bookRepository = bookRepository;
    }

    public static getInstance(bookRepository: BookRepository): BookService {
        if (!BookService.instance) {
            BookService.instance = new BookService(bookRepository);
        }
        return BookService.instance;
    }

    getBooks(): Book[] {
        return this.bookRepository.getAll();
    }

    addBook(book: Book): void {
        this.bookRepository.add(book);
    }

    updateBook(book: Book): void {
        this.bookRepository.update(book);
    }

    deleteBook(id: string): void {
        this.bookRepository.delete(id);
    }

    getBook(id: string): Book | undefined {
        console.log(`Fetching book with id: ${id}`);
        return this.bookRepository.get(id);
    }
}

export { BookService };