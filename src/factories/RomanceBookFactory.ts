import {BookFactory} from "./BookFactory.ts";

class RomanceBookFactory extends BookFactory {
    private readonly genre: Genre = { id: 1, name: 'Romance' };

    createBook(
        title: string,
        author: Author,
        _genre: Genre,
        publishedYear: number
    ): Book {
        const book = super.createBook(title, author, this.genre, publishedYear);
        return {
            ...book,
            tagline: 'Something romance.'
        };
    }
}

export { RomanceBookFactory };