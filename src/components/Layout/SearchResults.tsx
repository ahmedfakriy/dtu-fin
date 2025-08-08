import React from 'react';
import { useSearch } from '../../hooks/useSearch';

export const SearchResults = () => {
  const { searchQuery, searchResults } = useSearch();

  const hasQuery = searchQuery?.trim().length > 0;

  if (!hasQuery) return null;

  return (
    <div className="p-4">
      {searchResults.length === 0 ? (
        <p className="text-gray-500">
          لا توجد نتائج مطابقة للبحث عن "<strong>{searchQuery}</strong>"
        </p>
      ) : (
        <ul className="space-y-2">
          {searchResults.map((result, index) => (
            <li key={index} className="bg-white p-2 rounded shadow">
              {result.type === 'department' ? (
                <span>📚 قسم: {result.department.nameAr}</span>
              ) : (
                <span>
                  📘 مادة: {result.subject?.nameAr} - في قسم: {result.department.nameAr}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
