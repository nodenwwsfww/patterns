interface Author {
    id: number;
    name: string;
}

interface Genre {
    id: number;
    name: string;
}

interface Book {
    id: string;
    title: string;
    author: Author;
    genre: Genre;
    publishedYear: number;
    tagline?: string;
}


interface AddBookParams {
    title: string;
    author: string;
    genre: string;
    publishedYear: number;
}