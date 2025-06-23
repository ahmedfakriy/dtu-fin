import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, BookOpen, Download } from 'lucide-react';
import { departments } from '../../data/departments';

export const TermView: React.FC = () => {
  const { departmentId, semesterId, termId } = useParams();
  
  const department = departments.find(d => d.id === departmentId);
  const semester = department?.semesters.find(s => s.id === semesterId);
  const term = semester?.terms.find(t => t.id === termId);

  if (!department || !semester || !term) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">الصفحة غير موجودة</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <div className={`bg-gradient-to-l ${department.color} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to={`/department/${departmentId}`}
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <span>العودة إلى {department.name}</span>
            <ArrowRight className="w-5 h-5 mr-2" />
          </Link>
          
          <div className="space-y-3 text-right">
            <h1 className="text-5xl font-bold">
              {term.name}
            </h1>
            <h2 className="text-2xl text-white/90">
              {department.name} • {semester.name}
            </h2>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              المواد الدراسية
            </h3>
            <p className="text-xl text-gray-600 mb-4">
              جميع المواد متاحة مع روابط Google Drive
            </p>
            <div className="inline-flex items-center px-6 py-3 bg-green-100 rounded-full">
              <span className="text-green-700 font-semibold">
                {term.subjects.length} مادة متاحة
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {term.subjects.map((subject, index) => (
              <div
                key={subject.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`h-1 bg-gradient-to-l ${department.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="ml-4">
                      <div className="p-4 bg-gray-100 rounded-2xl group-hover:bg-blue-50 transition-colors">
                        <BookOpen className="w-8 h-8 text-gray-600 group-hover:text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1 text-right">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {subject.name}
                      </h4>
                      {subject.description && (
                        <p className="text-sm text-gray-500">
                          {subject.description}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <a
                      href={subject.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl transition-colors group/link font-medium"
                    >
                      <span>فتح Google Drive</span>
                      <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform mr-2" />
                    </a>
                    
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <span>الموارد متاحة للتحميل</span>
                      <Download className="w-4 h-4 mr-2" />
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent transform skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-700"></div>
              </div>
            ))}
          </div>

          {/* Summary Card */}
          <div className="mt-16 bg-gradient-to-l from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-8 text-white">
            <div className="text-center">
              <h4 className="text-3xl font-bold mb-6">
                ملخص الترم
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-3">
                    {term.subjects.length}
                  </div>
                  <div className="text-xl font-medium text-blue-100">إجمالي المواد</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-3">
                    100%
                  </div>
                  <div className="text-xl font-medium text-blue-100">الموارد المتاحة</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-3">
                    24/7
                  </div>
                  <div className="text-xl font-medium text-blue-100">الوصول متاح</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};