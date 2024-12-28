import { User } from '../types';

export async function loginUser(email: string, password: string): Promise<User> {
  // Simulate API call
  const response = await new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'password') {
        resolve({
          id: '1',
          name: 'Test User',
          email: email,
          role: 'borrower'
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
  
  return response;
}

export async function signupUser(name: string, email: string, password: string, role: 'borrower' | 'lender'): Promise<User> {
  // Simulate API call
  const response = await new Promise<User>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: Math.random().toString(36).substr(2, 9),
        name,
        email,
        role
      });
    }, 1000);
  });
  
  return response;
}