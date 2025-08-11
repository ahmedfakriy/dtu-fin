import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { Hero } from './components/Home/Hero';
import { DepartmentGrid } from './components/Home/DepartmentGrid';
import { SearchResults } from './components/Layout/SearchResults';
import { DepartmentView } from './components/Department/DepartmentView';
import { TermView } from './components/Term/TermView';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { useSearch } from './hooks/useSearch';

function App() {
  const { searchQuery, setSearchQuery, searchResults } = useSearch();

  const HomePage = () => (
    <>
      {searchQuery.trim() ? (
        <SearchResults results={searchResults} />
      ) : (
        <>
          <section id="hero">
            <Hero />
          </section>

          <section id="departments">
            <DepartmentGrid />
          </section>
        </>
      )}
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header
          onSearchChange={setSearchQuery}
          searchQuery={searchQuery}
        />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/department/:departmentId" element={<DepartmentView />} />
            <Route 
              path="/department/:departmentId/semester/:semesterId/term/:termId" 
              element={<TermView />} 
            />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16" dir="rtl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Logo and Description */}
              <div className="text-center md:text-right">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  منصة DTU
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  المنصة التعليمية التقنية المتقدمة لجميع التخصصات الهندسية والتقنية
                </p>
              </div>

              {/* روابط سريعة */}
              <div className="text-center">
                <h4 className="text-xl font-bold mb-6">روابط سريعة</h4>
                <div className="space-y-3">
                  <a href="/" className="block text-gray-300 hover:text-white transition-colors">الرئيسية</a>
                  <a href="/#departments" className="block text-gray-300 hover:text-white transition-colors">الأقسام الدراسية</a>
                  <a href="/#achievements" className="block text-gray-300 hover:text-white transition-colors">الإنجازات</a>
                  <a href="/#contact" className="block text-gray-300 hover:text-white transition-colors">اتصل بنا</a>
                  <a href="/#about" className="block text-gray-300 hover:text-white transition-colors">عن المنصة</a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold mb-6">تواصل معنا</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">+201023099469</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">ahmedfakriy010230@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-4 space-x-reverse pt-4">
                    <a
                      href="https://www.facebook.com/ahmedfikryfauz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/ahmed_fekry_fauz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-pink-600 hover:bg-pink-700 rounded-xl transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
              <p className="text-gray-400 text-lg">
                © 2024 منصة DTU التعليمية. جميع الحقوق محفوظة.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                تمكين الجيل القادم من المهنيين التقنيين
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;


