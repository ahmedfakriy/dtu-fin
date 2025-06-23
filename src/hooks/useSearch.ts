import { useState, useMemo } from 'react';
import { departments } from '../data/departments';
import { Department, Subject } from '../types';

interface SearchResult {
  type: 'department' | 'subject';
  department: Department;
  subject?: Subject;
  semester?: string;
  term?: string;
}

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const results: SearchResult[] = [];
    const query = searchQuery.toLowerCase();

    departments.forEach(dept => {
      // Search in department names
      if (dept.name.toLowerCase().includes(query) || 
          dept.nameAr.includes(query) ||
          dept.description.toLowerCase().includes(query) ||
          dept.descriptionAr.includes(query)) {
        results.push({
          type: 'department',
          department: dept
        });
      }

      // Search in subjects
      dept.semesters.forEach(semester => {
        semester.terms.forEach(term => {
          term.subjects.forEach(subject => {
            if (subject.name.toLowerCase().includes(query) || 
                subject.nameAr.includes(query)) {
              results.push({
                type: 'subject',
                department: dept,
                subject,
                semester: semester.name,
                term: term.name
              });
            }
          });
        });
      });
    });

    return results.slice(0, 10); // Limit results
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults
  };
};