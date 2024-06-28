import {BookFactory} from "../factories/BookFactory.ts";
import {RomanceBookFactory} from "../factories/RomanceBookFactory.ts";
import {FantasyBookFactory} from "../factories/FantasyBookFactory.ts";

export function createBook(params: AddBookParams): Book {
    const author: Author = { id: Date.now(), name: params.author };

    let bookFactory: BookFactory;
    if (params.genre === 'Fantasy') {
        bookFactory = new FantasyBookFactory();
    } else if (params.genre === 'Romance') {
        bookFactory = new RomanceBookFactory();
    } else {
        const genre: Genre = { id: Date.now(), name: params.genre };
        bookFactory = new BookFactory();
        return bookFactory.createBook(params.title, author, genre, params.publishedYear);
    }

    const genre: Genre = { id: 0, name: params.genre };
    return bookFactory.createBook(params.title, author, genre, params.publishedYear);
}