import React from 'react';

interface BookListProps {
    books: Book[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
    return (
        <div className="mt-8">
            <h2 className="mb-4 text-lg font-bold text-gray-700">Book List</h2>
            <ul className="space-y-4">
                {books.map((book: Book) => (
                    <li key={book.id} className="p-3 bg-gray-200 rounded-md">{book.title} by {book.author.name}</li>
                ))}
            </ul>
        </div>
    );
};

export { BookList };