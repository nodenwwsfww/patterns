import { v4 as uuidv4 } from 'uuid';

class BookFactory {
    createBook(
        title: string,
        author: Author,
        genre: Genre,
        publishedYear: number
    ): Book {
        return { id: uuidv4(), title, author, genre, publishedYear};
    }
}

export { BookFactory };