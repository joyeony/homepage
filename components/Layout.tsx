import React from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS, HERO_DATA } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#2C3E50] font-sans pb-12">
      {/* Top Navigation Bar - Sticky & Centered */}
      <nav className="sticky top-0 z-50 bg-[#F5F7FA]/95 backdrop-blur-md border-b border-gray-200 shadow-sm transition-all">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-center">
          {/* Navigation Links */}
          <div className="flex gap-6 md:gap-10 overflow-x-auto no-scrollbar w-full md:w-auto justify-start md:justify-center px-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-bold whitespace-nowrap transition-all duration-200 py-1 border-b-2 ${
                    isActive 
                    ? 'text-[#2C3E50] border-[#3498DB]' 
                    : 'text-gray-400 border-transparent hover:text-[#3498DB]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Document Container */}
      <main className="max-w-4xl mx-auto mt-8 px-4 sm:px-6">
        <div className="bg-white shadow-xl min-h-[calc(100vh-8rem)] rounded-sm p-8 md:p-12 relative overflow-hidden ring-1 ring-gray-900/5">
            {/* Paper texture overlay (subtle) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M5 0h1v1H5V0zM0 5h1v1H0V5z\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>
            
            <div className="relative z-10">
                {children}
            </div>

            {/* Footer inside the paper */}
            <div className="mt-20 pt-8 border-t-2 border-gray-100 text-center">
                <p className="text-[#2C3E50] font-serif font-bold text-lg mb-2">Jiyeon Park</p>
                <p className="text-gray-400 text-sm font-medium tracking-wide">
                    Bridging the gap between Data and Decision Making.
                </p>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;