import React from 'react';
import { Search, BookOpen, Menu, X, Award, Facebook, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

interface HeaderProps {
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

export const Header: React.FC<HeaderProps> = ({ onSearchChange, searchQuery }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white/95 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl group-hover:scale-105 transition-transform shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                مرحباً بك في منصة DTU
              </h1>
              <p className="text-sm text-gray-600 font-medium">المنصة التعليمية المتقدمة</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                location.pathname === '/' 
                  ? 'bg-blue-100 text-blue-700 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              الرئيسية
            </Link>
            
            <div className="flex items-center space-x-2 px-4 py-2 bg-green-50 rounded-lg">
              <Award className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-medium">الإنجازات</span>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/ahmedfikryfauz?locale=ar_AR"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ahmed_fekry_fauz/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <div className="relative">
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="البحث في المواد والأقسام..."
                className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-right"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                dir="rtl"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="البحث..."
                  className="w-full pr-12 pl-4 py-3 border border-gray-300 rounded-lg text-right"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  dir="rtl"
                />
              </div>
              <Link
                to="/"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-medium">الإنجازات</span>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href="https://www.facebook.com/ahmedfikryfauz?locale=ar_AR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/ahmed_fekry_fauz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-pink-600 hover:bg-pink-50 rounded-lg"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};