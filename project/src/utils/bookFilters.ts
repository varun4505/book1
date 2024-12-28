import { Book } from '../types';

export interface BookFilters {
  search: string;
  category: string;
  availability: string;
  sortBy: string;
}

export function filterBooks(books: Book[], filters: BookFilters): Book[] {
  return books
    .filter((book) => {
      if (filters.search && !book.title.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }
      if (filters.category && book.category !== filters.category) {
        return false;
      }
      if (filters.availability === 'available' && !book.available) {
        return false;
      }
      if (filters.availability === 'borrowed' && book.available) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'author':
          return a.author.localeCompare(b.author);
        case 'newest':
        default:
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      }
    });
}