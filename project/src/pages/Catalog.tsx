import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import BookCard from '../components/books/BookCard';
import BookFilters from '../components/catalog/BookFilters';
import { filterBooks, BookFilters as FilterOptions } from '../utils/bookFilters';

export default function Catalog() {
  const { books, loading } = useSelector((state: RootState) => state.books);
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    category: '',
    availability: '',
    sortBy: 'newest',
  });

  const handleFilterChange = (newFilters: Partial<FilterOptions>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const filteredBooks = filterBooks(books, filters);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <BookFilters onFilterChange={handleFilterChange} />
        </div>
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No books found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}