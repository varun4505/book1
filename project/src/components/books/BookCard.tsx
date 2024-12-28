import React from 'react';
import { Link } from 'react-router-dom';
import type { Book } from '../../types';

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={book.coverImage}
        alt={book.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
        <p className="text-sm text-gray-600">{book.author}</p>
        <div className="mt-2 flex items-center justify-between">
          <span
            className={`px-2 py-1 text-xs rounded-full ${
              book.available
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {book.available ? 'Available' : 'Borrowed'}
          </span>
          <Link
            to={`/books/${book.id}`}
            className="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}