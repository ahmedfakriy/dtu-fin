import React from 'react';
import { BookOpen, Users, Award, TrendingUp, GraduationCap, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" dir="rtl">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 left-32 animate-bounce delay-300">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
        </div>
        <div className="absolute bottom-32 right-32 animate-bounce delay-700">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
            <Star className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="space-y-12 animate-fade-in">
          <div className="space-y-6">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-8">
              <BookOpen className="w-6 h-6 text-blue-600 ml-2" />
              <span className="text-blue-700 font-semibold">منصة DTU التعليمية</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                مرحباً بك في
              </span>
              <br />
              <span className="text-gray-900">منصة DTU</span>
            </h1>
            
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 space-y-3">
              <div className="transform hover:scale-105 transition-transform">
                المنصة التعليمية التقنية المتقدمة
              </div>
              <div className="text-xl md:text-2xl text-blue-600 font-medium">
                لجميع التخصصات الهندسية والتقنية
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            استكشف أحدث المناهج التعليمية في الميكاترونكس والأوتوترونكس والطاقة المتجددة 
            والتبريد والتكييف وتكنولوجيا المعلومات
            <br />
            <span className="text-lg text-gray-500 mt-3 block">
              منصة شاملة تضم جميع الموارد التعليمية والمواد الدراسية بأحدث التقنيات
            </span>
          </p>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mt-16">
            {[
              { icon: BookOpen, value: '5', label: 'أقسام دراسية', color: 'from-blue-500 to-blue-600' },
              { icon: Users, value: '20', label: 'فصل دراسي', color: 'from-green-500 to-green-600' },
              { icon: Award, value: '400', label: 'مادة دراسية', color: 'from-purple-500 to-purple-600' },
              { icon: TrendingUp, value: '100%', label: 'معدل النجاح', color: 'from-orange-500 to-orange-600' }
            ].map((stat, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-3xl mb-4 group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-2xl`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="pt-8">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <BookOpen className="w-6 h-6 ml-3" />
              ابدأ رحلتك التعليمية الآن
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-2 h-4 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};