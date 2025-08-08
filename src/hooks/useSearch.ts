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
  const [searchQuery, setSearchQuery] = useState<string>('');

  const normalize = (text: string) =>
    text?.toLowerCase().trim().normalize('NFKC');

  const searchResults = useMemo(() => {
    if (!searchQuery?.trim()) return [];

    const results: SearchResult[] = [];
    const query = normalize(searchQuery);

    departments.forEach(dept => {
      if (
        normalize(dept.name).includes(query) ||
        normalize(dept.nameAr).includes(query) ||
        normalize(dept.description).includes(query) ||
        normalize(dept.descriptionAr).includes(query)
      ) {
        results.push({
          type: 'department',
          department: dept,
        });
      }

      dept.semesters.forEach(semester => {
        semester.terms.forEach(term => {
          term.subjects.forEach(subject => {
            if (
              normalize(subject.name).includes(query) ||
              normalize(subject.nameAr).includes(query)
            ) {
              results.push({
                type: 'subject',
                department: dept,
                subject,
                semester: semester.name,
                term: term.name,
              });
            }
          });
        });
      });
    });

    return results.slice(0, 20);
  }, [searchQuery]);

  return {
    searchQuery,
    setSearchQuery,
    searchResults,
  };
};
