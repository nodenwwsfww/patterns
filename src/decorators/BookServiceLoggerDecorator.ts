import { IBookService } from '../services/IBookService';
import { Logger } from './LoggerDecorator';

class BookServiceLoggerDecorator implements IBookService {
    private bookService: IBookService;
    private logger: Logger;

    constructor(bookService: IBookService, logger: Logger) {
        this.bookService = bookService;
        this.logger = logger;
    }

    private logError(method: string, error: unknown): void {
        const errorMessage = (error instanceof Error) ? error.message : JSON.stringify(error);
        console.error(`Error in method ${method}:`, errorMessage);
    }

    getBooks(): Book[] {
        try {
            this.logger.log('Fetching all books');
            const books = this.bookService.getBooks();
            this.logger.log(`Fetched ${books.length} books`);
            return books;
        } catch (error) {
            this.logError('getBooks', error);
            return [];
        }
    }

    addBook(book: Book): void {
        try {
            this.logger.log(`Adding book: ${JSON.stringify(book)}`);
            this.bookService.addBook(book);
            this.logger.log('Book added successfully');
        } catch (error) {
            this.logError('addBook', error);
        }
    }

    updateBook(book: Book): void {
        try {
            this.logger.log(`Updating book: ${JSON.stringify(book)}`);
            this.bookService.updateBook(book);
            this.logger.log('Book updated successfully');
        } catch (error) {
            this.logError('updateBook', error);
        }
    }

    deleteBook(id: string): void {
        try {
            this.logger.log(`Deleting book with id: ${id}`);
            this.bookService.deleteBook(id);
            this.logger.log('Book deleted successfully');
        } catch (error) {
            this.logError('deleteBook', error);
        }
    }

    getBook(id: string): Book | undefined {
        try {
            this.logger.log(`Fetching book with id: ${id}`);
            const book = this.bookService.getBook(id);
            if (book) {
                this.logger.log(`Retrieved book: ${JSON.stringify(book)}`);
            } else {
                this.logger.log(`No book found with id: ${id}`);
            }
            return book;
        } catch (error) {
            this.logError('getBook', error);
            return undefined;
        }
    }
}

export { BookServiceLoggerDecorator };
