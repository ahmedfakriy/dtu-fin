export interface Department {
  id: string;
  name: string;
  nameAr: string;
  icon: string;
  color: string;
  description: string;
  descriptionAr: string;
}

export interface Subject {
  id: string;
  name: string;
  nameAr: string;
  driveLink: string;
  description?: string;
}

export interface Term {
  id: string;
  name: string;
  nameAr: string;
  subjects: Subject[];
}

export interface Semester {
  id: string;
  name: string;
  nameAr: string;
  terms: Term[];
}

export interface DepartmentData extends Department {
  semesters: Semester[];
}