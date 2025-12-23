import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, User, UserPlus } from 'lucide-react';
import { magazines } from '../data/manga';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-pink-500 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">ComicPlus+</span>
          </Link>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-pink-600 rounded-full transition-colors"
            >
              <Search size={20} />
            </button>
            <Link to="/login" className="hidden md:flex items-center gap-1 hover:bg-pink-600 px-3 py-1 rounded transition-colors">
              <User size={18} />
              <span>Login</span>
            </Link>
            <Link to="/register" className="hidden md:flex items-center gap-1 bg-white text-pink-500 px-3 py-1 rounded font-medium hover:bg-pink-50 transition-colors">
              <UserPlus size={18} />
              <span>Sign Up Free</span>
            </Link>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-pink-600 rounded-full transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="bg-gray-100 py-3 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for manga, authors, or genres..."
                className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 focus:outline-none focus:border-pink-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-12 overflow-x-auto">
            <div className="flex items-center gap-6 whitespace-nowrap">
              <Link to="/series" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
                Series
              </Link>
              <Link to="/oneshots" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">
                One-shots
              </Link>
              <div className="hidden lg:flex items-center gap-4">
                {magazines.map((mag) => (
                  <Link 
                    key={mag.id}
                    to={`/magazine/${mag.id}`}
                    className="text-gray-600 hover:text-pink-500 text-sm transition-colors"
                  >
                    {mag.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link 
              to="/missions"
              className="flex items-center gap-1 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium hover:bg-yellow-500 transition-colors"
            >
              <span>🎯</span>
              <span>Missions</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-4 px-4">
          <div className="flex flex-col gap-4">
            <Link to="/login" className="flex items-center gap-2 text-gray-700 hover:text-pink-500">
              <User size={18} />
              <span>Login</span>
            </Link>
            <Link to="/register" className="flex items-center gap-2 text-pink-500 font-medium">
              <UserPlus size={18} />
              <span>Sign Up Free</span>
            </Link>
            <hr className="border-gray-200" />
            <div className="grid grid-cols-2 gap-2">
              {magazines.map((mag) => (
                <Link 
                  key={mag.id}
                  to={`/magazine/${mag.id}`}
                  className="text-gray-600 hover:text-pink-500 text-sm py-1"
                >
                  {mag.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
