import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { RootState } from '../store';
import AddBookForm from '../components/books/AddBookForm';
import LenderBooksList from '../components/books/LenderBooksList';

export default function Dashboard() {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const [showAddBook, setShowAddBook] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome, {user?.name}
        </h1>
        {user?.role === 'lender' && (
          <button
            onClick={() => setShowAddBook(!showAddBook)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Book
          </button>
        )}
      </div>

      {user?.role === 'lender' && showAddBook && (
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <h2 className="text-lg font-semibold mb-4">Add a New Book</h2>
          <AddBookForm />
        </div>
      )}

      {user?.role === 'lender' ? (
        <>
          <h2 className="text-lg font-semibold mb-4">Your Books</h2>
          <LenderBooksList />
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Borrowed Books</h2>
            <p className="text-gray-600">No borrowed books</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Reading History</h2>
            <p className="text-gray-600">No reading history</p>
          </div>
        </div>
      )}
    </div>
  );
}