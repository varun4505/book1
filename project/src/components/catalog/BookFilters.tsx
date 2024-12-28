import React from 'react';
import { Search } from 'lucide-react';

interface BookFiltersProps {
  onFilterChange: (filters: any) => void;
}

export default function BookFilters({ onFilterChange }: BookFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm space-y-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search books..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          onChange={(e) => onFilterChange({ search: e.target.value })}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          onChange={(e) => onFilterChange({ category: e.target.value })}
        >
          <option value="">All Categories</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="science">Science</option>
          <option value="technology">Technology</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Availability
        </label>
        <select
          className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          onChange={(e) => onFilterChange({ availability: e.target.value })}
        >
          <option value="">All</option>
          <option value="available">Available</option>
          <option value="borrowed">Borrowed</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Sort By
        </label>
        <select
          className="w-full border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          onChange={(e) => onFilterChange({ sortBy: e.target.value })}
        >
          <option value="newest">Newest First</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
      </div>
    </div>
  );
}