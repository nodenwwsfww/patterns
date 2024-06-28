import {BookFactory} from "./BookFactory.ts";

class FantasyBookFactory extends BookFactory {
    private readonly genre: Genre = { id: 2, name: 'Fantasy' };

    createBook(
        title: string,
        author: Author,
        _genre: Genre,
        publishedYear: number
    ): Book {
        const book = super.createBook(title, author, this.genre, publishedYear);
        return {
            ...book,
            tagline: 'Something fantasy.'
        };
    }
}

export { FantasyBookFactory };