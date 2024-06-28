import React, { useState } from 'react';

interface AddBookProps {
    onSubmit: (params: AddBookParams) => void;
}

const AddBook: React.FC<AddBookProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');
    const [publishedYear, setPublishedYear] = useState(0);

    const genres = ['Fantasy', 'Romance']; // Add more genres as needed

    const handleAddBook = () => {
        const params: AddBookParams = {
            title,
            author,
            genre,
            publishedYear: Number(publishedYear)
        };
        onSubmit(params);
        setTitle('');
        setAuthor('');
        setGenre('');
        setPublishedYear(0);
    };

    return (
        <div className="mt-8">
            <h2 className="mb-4 text-lg font-bold text-gray-700">Add Book</h2>
            <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" />
            <select className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" value={genre} onChange={(e) => setGenre(e.target.value)}>
                {genres.map((genre) => (
                    <option key={genre} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
            <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="number" value={publishedYear} onChange={(e) => setPublishedYear(Number(e.target.value))} placeholder="Published Year" />
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" onClick={handleAddBook}>Add Book</button>
        </div>
    );
};

export { AddBook };