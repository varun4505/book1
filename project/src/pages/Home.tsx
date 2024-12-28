import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Users, Clock, Star } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Library"
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Share Books, Share Knowledge
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Join our community of book lovers. Lend your books to others and borrow
            books you want to read. Make reading accessible to everyone.
          </p>
          <div className="mt-10">
            <Link
              to="/signup"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Rest of the component remains the same */}
    </div>
  );
}