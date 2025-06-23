import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, Users } from 'lucide-react';
import { departments } from '../../data/departments';
import { Cpu, Car, Zap, Thermometer, Monitor } from 'lucide-react';

const iconMap = {
  Cpu,
  Car,
  Zap,
  Thermometer,
  Monitor
};

export const DepartmentView: React.FC = () => {
  const { departmentId } = useParams();
  const department = departments.find(d => d.id === departmentId);

  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center" dir="rtl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">القسم غير موجود</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[department.icon as keyof typeof iconMap];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" dir="rtl">
      {/* Header */}
      <div className={`bg-gradient-to-l ${department.color} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <span>العودة للأقسام</span>
            <ArrowRight className="w-5 h-5 mr-2" />
          </Link>
          
          <div className="flex items-center space-x-6 space-x-reverse">
            <div className="p-6 bg-white/20 rounded-3xl backdrop-blur-sm">
              <IconComponent className="w-16 h-16" />
            </div>
            <div className="text-right">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {department.name}
              </h1>
              <p className="text-2xl text-white/90 mb-4 leading-relaxed">
                {department.description}
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full">
                <span className="text-white/90">قسم متخصص ومتقدم</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <div className="p-4 bg-blue-100 rounded-2xl">
                  <Calendar className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900">4</div>
              <div className="text-gray-600 font-medium">فصول دراسية</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <div className="p-4 bg-green-100 rounded-2xl">
                  <BookOpen className="w-10 h-10 text-green-600" />
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900">8</div>
              <div className="text-gray-600 font-medium">ترمات دراسية</div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <div className="p-4 bg-purple-100 rounded-2xl">
                  <Users className="w-10 h-10 text-purple-600" />
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900">80</div>
              <div className="text-gray-600 font-medium">مادة دراسية</div>
            </div>
          </div>
        </div>
      </div>

      {/* Semesters Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              الفصول الدراسية
            </h3>
            <p className="text-xl text-gray-600">
              اختر الفصل الدراسي للوصول إلى المواد والموارد التعليمية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {department.semesters.map((semester, index) => (
              <div
                key={semester.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-l ${department.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                      {index + 1}
                    </div>
                    <div className="text-right">
                      <h4 className="text-3xl font-bold text-gray-900 mb-2">
                        {semester.name}
                      </h4>
                      <p className="text-gray-600">
                        {semester.terms.length} ترمات دراسية
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {semester.terms.map((term) => (
                      <Link
                        key={term.id}
                        to={`/department/${departmentId}/semester/${semester.id}/term/${term.id}`}
                        className="p-6 border-2 border-gray-200 rounded-2xl hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group/term text-center"
                      >
                        <h5 className="font-bold text-gray-900 group-hover/term:text-blue-700 text-lg mb-2">
                          {term.name}
                        </h5>
                        <p className="text-sm text-gray-500 group-hover/term:text-blue-600">
                          {term.subjects.length} مادة دراسية
                        </p>
                      </Link>
                    ))}
                  </div>

                  <div className="text-center pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500">
                      إجمالي: {semester.terms.reduce((acc, term) => acc + term.subjects.length, 0)} مادة دراسية
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};