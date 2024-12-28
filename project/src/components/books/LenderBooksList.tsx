import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import BookCard from './BookCard';

export default function LenderBooksList() {
  const { books } = useSelector((state: RootState) => state.books);
  const { user } = useSelector((state: RootState) => state.auth);

  const lenderBooks = books.filter(book => book.ownerId === user?.id);

  if (lenderBooks.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">You haven't added any books yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lenderBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}