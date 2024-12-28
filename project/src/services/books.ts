import { Book } from '../types';

export async function addBook(bookData: Partial<Book>, userId: string): Promise<Book> {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Math.random().toString(36).substr(2, 9),
        title: bookData.title!,
        author: bookData.author!,
        isbn: bookData.isbn || '',
        category: bookData.category || 'fiction',
        description: bookData.description || '',
        condition: bookData.condition || 'new',
        coverImage: bookData.coverImage || 'https://via.placeholder.com/150',
        available: true,
        createdAt: new Date().toISOString(),
        ownerId: userId
      });
    }, 1000);
  });
}

export async function getBooks(): Promise<Book[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([]);
    }, 1000);
  });
}