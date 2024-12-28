import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook as addBookAction } from '../store/slices/booksSlice';
import { addBook as addBookService } from '../services/books';
import type { Book } from '../types';
import type { RootState } from '../store';

export function useBooks() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useSelector((state: RootState) => state.auth);

  const addBook = async (bookData: Partial<Book>) => {
    if (!user) {
      throw new Error('User must be logged in to add books');
    }

    setIsLoading(true);
    try {
      const newBook = await addBookService(bookData, user.id);
      dispatch(addBookAction(newBook));
      return newBook;
    } catch (error) {
      console.error('Failed to add book:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { addBook, isLoading };
}