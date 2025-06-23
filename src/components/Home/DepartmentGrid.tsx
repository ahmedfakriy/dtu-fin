import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Cpu, Car, Zap, Thermometer, Monitor, BookOpen, Users } from 'lucide-react';
import { departments } from '../../data/departments';

const iconMap = {
  Cpu,
  Car,
  Zap,
  Thermometer,
  Monitor
};

export const DepartmentGrid: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-700 font-semibold">الأقسام الدراسية</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            اختر تخصصك المفضل
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            استكشف الأقسام التعليمية المتنوعة واختر المجال الذي يناسب اهتماماتك وطموحاتك المهنية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, index) => {
            const IconComponent = iconMap[dept.icon as keyof typeof iconMap];
            
            return (
              <Link
                key={dept.id}
                to={`/department/${dept.id}`}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-100/50 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                
                {/* Content */}
                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-6">
                    <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-gray-600 group-hover:-translate-x-1 transition-all duration-300" />
                    <div className={`p-4 bg-gradient-to-r ${dept.color} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="space-y-4 text-right">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors mb-2">
                        {dept.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg">
                      {dept.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <div className="text-sm font-medium text-blue-600 group-hover:text-blue-700 flex items-center">
                        <span>استكشف القسم</span>
                        <ChevronLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                      </div>
                      <div className="text-sm text-gray-500">
                        4 فصول • 8 ترمات • 80 مادة
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform skew-x-12 translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
              </Link>
            );
          })}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">لماذا تختار منصة DTU؟</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">محتوى شامل</h4>
                <p className="text-blue-100">جميع المواد والموارد التعليمية في مكان واحد</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">تحديث مستمر</h4>
                <p className="text-blue-100">محتوى محدث باستمرار ليواكب أحدث التطورات</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-2">دعم مستمر</h4>
                <p className="text-blue-100">فريق دعم متخصص لمساعدتك في رحلتك التعليمية</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};