import { useState, ChangeEvent, FormEvent } from 'react';
import { z } from 'zod';

// Separate schemas for different form types
const authSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().optional(),
  role: z.enum(['borrower', 'lender']).optional(),
});

const bookSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  isbn: z.string().optional(),
  category: z.enum(['fiction', 'non-fiction', 'science', 'technology']),
  description: z.string().optional(),
  condition: z.enum(['new', 'like-new', 'good', 'fair']),
  coverImage: z.string().url().optional(),
});

type FormType = 'auth' | 'book';

export function useFormValidation(
  initialValues: Record<string, any>,
  onSubmit?: (data: any) => Promise<void>,
  formType: FormType = 'auth'
) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const schema = formType === 'auth' ? authSchema : bookSchema;
      const validatedData = schema.parse(values);
      if (onSubmit) {
        await onSubmit(validatedData);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            formattedErrors[err.path[0]] = err.message;
          }
        });
        setErrors(formattedErrors);
      }
    }
  };

  return { values, errors, handleChange, handleSubmit };
}