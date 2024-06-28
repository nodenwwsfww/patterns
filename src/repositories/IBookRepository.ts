export interface IBookRepository {
    getAll(): Book[];
    add(book: Book): void;
    update(book: Book): void;
    delete(id: string): void;
    get(id: string): Book | undefined;
}