import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser, signupUser } from '../services/auth';
import { setUser, setError, setLoading } from '../store/slices/authSlice';

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    dispatch(setLoading(true));
    
    try {
      const user = await loginUser(email, password);
      dispatch(setUser(user));
      navigate('/dashboard');
    } catch (error) {
      dispatch(setError(error instanceof Error ? error.message : 'Login failed'));
    } finally {
      setIsLoading(false);
      dispatch(setLoading(false));
    }
  };

  const signup = async (name: string, email: string, password: string, role: 'borrower' | 'lender') => {
    setIsLoading(true);
    dispatch(setLoading(true));
    
    try {
      const user = await signupUser(name, email, password, role);
      dispatch(setUser(user));
      navigate('/dashboard');
    } catch (error) {
      dispatch(setError(error instanceof Error ? error.message : 'Signup failed'));
    } finally {
      setIsLoading(false);
      dispatch(setLoading(false));
    }
  };

  return { login, signup, isLoading };
}