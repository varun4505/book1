import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Book, LogIn, LogOut, User } from 'lucide-react';
import { RootState } from '../../store';
import { logout } from '../../store/slices/authSlice';

export default function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Book className="h-6 w-6 text-indigo-600" />
          <span className="text-xl font-bold text-gray-900">BookShare</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link
            to="/catalog"
            className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
          >
            Browse Books
          </Link>

          {isAuthenticated ? (
            <>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </Link>
              <div className="flex items-center space-x-2">
                <Link to="/profile" className="flex items-center space-x-1">
                  <User className="h-5 w-5" />
                  <span>{user?.name}</span>
                </Link>
                <button
                  onClick={() => dispatch(logout())}
                  className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            </>
          ) : (
            <Link
              to="/login"
              className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600"
            >
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}