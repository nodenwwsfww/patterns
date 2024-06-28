interface IBookService {
    getBooks(): Book[];
    addBook(book: Book): void;
    updateBook(book: Book): void;
    deleteBook(id: string): void;
    getBook(id: string): Book | undefined;
}

export type { IBookService };