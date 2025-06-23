import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, BookOpen } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';

interface SearchResultsProps {
  searchQuery: string;
}

export const SearchResults: React.FC<SearchResultsProps> = ({ searchQuery }) => {
  const { searchResults } = useSearch();

  if (!searchQuery.trim() || searchResults.length === 0) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" dir="rtl">
      <div className="bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-right">
          نتائج البحث عن "{searchQuery}"
        </h2>
        
        <div className="space-y-6">
          {searchResults.map((result, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
              {result.type === 'department' ? (
                <Link to={`/department/${result.department.id}`} className="block">
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className={`p-4 bg-gradient-to-r ${result.department.color} rounded-2xl`}>
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {result.department.name}
                      </h3>
                      <p className="text-gray-600">{result.department.description}</p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="flex items-center justify-between">
                  <a
                    href={result.subject?.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 transition-colors"
                  >
                    <span>فتح Drive</span>
                    <ExternalLink className="w-4 h-4 mr-2" />
                  </a>
                  <div className="text-right">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {result.subject?.name}
                    </h3>
                    <p className="text-gray-600">
                      {result.department.name} • {result.semester} • {result.term}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};