import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Tag } from 'lucide-react';
import { news } from '../data/manga';

const newsCategories = [
  { id: 'all', label: 'All News' },
  { id: 'releases', label: 'New Releases' },
  { id: 'events', label: 'Events' },
  { id: 'merchandise', label: 'Merchandise' },
  { id: 'announcements', label: 'Announcements' },
];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">News & Updates</h1>
          <p className="text-white/80 mt-2">Stay up to date with the latest announcements</p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto py-4">
            {newsCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main News */}
          <div className="lg:col-span-2">
            {/* Featured News */}
            {news.length > 0 && (
              <Link
                to={`/news/${news[0].id}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-8"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={news[0].image}
                    alt={news[0].title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                    <Calendar size={14} />
                    {news[0].date}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 group-hover:text-pink-500 transition-colors">
                    {news[0].title}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    {news[0].excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-pink-500 font-medium mt-4">
                    Read More
                    <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            )}

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.slice(1).map((item) => (
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                      <Calendar size={14} />
                      {item.date}
                    </div>
                    <h3 className="font-semibold text-gray-800 group-hover:text-pink-500 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Recent Updates */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Tag size={18} className="text-pink-500" />
                Recent Updates
              </h3>
              <div className="space-y-4">
                {news.slice(0, 5).map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.id}`}
                    className="group block"
                  >
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <h4 className="text-gray-700 group-hover:text-pink-500 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Stay Updated!</h3>
              <p className="text-white/80 text-sm mb-4">
                Subscribe to our newsletter for the latest news and exclusive offers.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg text-gray-800 mb-3 focus:outline-none"
              />
              <button className="w-full bg-white text-pink-500 px-4 py-2 rounded-lg font-medium hover:bg-pink-50 transition-colors">
                Subscribe
              </button>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-xl p-6 shadow-sm mt-6">
              <h3 className="font-bold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a href="#" className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-center hover:bg-blue-600 transition-colors">
                  Twitter
                </a>
                <a href="#" className="flex-1 bg-pink-500 text-white py-2 rounded-lg text-center hover:bg-pink-600 transition-colors">
                  Instagram
                </a>
                <a href="#" className="flex-1 bg-red-500 text-white py-2 rounded-lg text-center hover:bg-red-600 transition-colors">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
