export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'lender' | 'borrower';
  avatar?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  isbn?: string;
  category: 'fiction' | 'non-fiction' | 'science' | 'technology';
  description?: string;
  condition: 'new' | 'like-new' | 'good' | 'fair';
  coverImage?: string;
  available: boolean;
  createdAt: string;
  ownerId: string;
}

export interface BorrowingRecord {
  id: string;
  bookId: string;
  borrowerId: string;
  lenderId: string;
  borrowedAt: string;
  returnedAt?: string;
  dueDate: string;
  status: 'active' | 'returned' | 'overdue';
}