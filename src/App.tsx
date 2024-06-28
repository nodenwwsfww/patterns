import {BookList} from "./components/BookList";
import {AddBook} from "./components/AddBook";
import React, {useEffect, useState} from "react";
import {BookService} from "./services/BookService.ts";
import {BookRepository} from "./repositories/BookRepository.ts";
import {createBook} from "./utils/bookHelpers.ts";
import {AlertLogger, ConsoleLogger, TimestampLogger} from "./decorators/LoggerDecorator.ts";
import {BookServiceLoggerDecorator} from "./decorators/BookServiceLoggerDecorator.ts";

const bookRepository = BookRepository.getInstance();
const originalBookService = BookService.getInstance(bookRepository);
const logger = new TimestampLogger(new ConsoleLogger());
const bookService = new BookServiceLoggerDecorator(originalBookService, logger);

const alertLogger = new AlertLogger();

const App: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        const initialBooks = bookService.getBooks();
        setBooks(initialBooks);
    }, []);


    const handleAddBook = (params: AddBookParams) => {
        const newBook = createBook(params);
        bookService.addBook(newBook);
        setBooks(bookService.getBooks());
        alertLogger.log(newBook.title + " added successfully");
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                <div className="flex-1">
                    <div className="font-medium uppercase text-xl text-indigo-500">Books app</div>
                    <AddBook onSubmit={handleAddBook} />
                    <BookList books={books} />
                </div>
            </div>
        </div>
    );
};

export default App;