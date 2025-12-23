import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, TrendingUp, Star, Clock, Flame } from 'lucide-react';
import { featuredManga } from '../data/manga';

const rankingCategories = [
  { id: 'daily', label: 'Daily', icon: Clock },
  { id: 'weekly', label: 'Weekly', icon: TrendingUp },
  { id: 'monthly', label: 'Monthly', icon: Flame },
  { id: 'all-time', label: 'All Time', icon: Crown },
];

export default function RankingsPage() {
  const [activeCategory, setActiveCategory] = useState('weekly');

  // Sort manga by rating for rankings
  const rankedManga = [...featuredManga].sort((a, b) => b.rating - a.rating);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3">
            <Crown className="text-yellow-300" size={32} />
            <h1 className="text-3xl font-bold text-white">Rankings</h1>
          </div>
          <p className="text-white/80 mt-2">See what's trending in the community</p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto py-4">
            {rankingCategories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={18} />
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Rankings List */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {rankedManga.map((manga, index) => (
            <Link
              key={manga.id}
              to={`/series/${manga.id}`}
              className="group flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Rank Number */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                index === 0 ? 'bg-yellow-400 text-yellow-900' :
                index === 1 ? 'bg-gray-300 text-gray-700' :
                index === 2 ? 'bg-orange-400 text-orange-900' :
                'bg-gray-100 text-gray-600'
              }`}>
                {index + 1}
              </div>

              {/* Cover Image */}
              <div className="flex-shrink-0 w-16 h-20 rounded-lg overflow-hidden">
                <img
                  src={manga.cover}
                  alt={manga.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-800 group-hover:text-pink-500 transition-colors line-clamp-1">
                  {manga.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{manga.author}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="flex items-center gap-1 text-sm text-gray-600">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    {manga.rating}
                  </span>
                  <span className="text-sm text-gray-500">
                    {manga.chapters} chapters
                  </span>
                  <div className="flex gap-1">
                    {manga.genre.slice(0, 2).map((g) => (
                      <span key={g} className="text-xs bg-pink-50 text-pink-600 px-2 py-0.5 rounded">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trend Indicator */}
              <div className="flex-shrink-0 hidden md:flex items-center gap-1 text-green-500">
                <TrendingUp size={16} />
                <span className="text-sm font-medium">+{Math.floor(Math.random() * 20) + 1}%</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Genre Rankings */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Top by Genre</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Romance', 'Comedy', 'Drama', 'Fantasy', 'School Life', 'Mystery'].map((genre) => {
              const genreManga = rankedManga.filter(m => m.genre.includes(genre)).slice(0, 3);
              return (
                <div key={genre} className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="bg-pink-500 text-white px-2 py-1 rounded text-sm">
                      {genre}
                    </span>
                  </h3>
                  <div className="space-y-3">
                    {genreManga.map((manga, idx) => (
                      <Link
                        key={manga.id}
                        to={`/series/${manga.id}`}
                        className="flex items-center gap-3 group"
                      >
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium ${
                          idx === 0 ? 'bg-yellow-400 text-yellow-900' :
                          idx === 1 ? 'bg-gray-300 text-gray-700' :
                          'bg-orange-300 text-orange-900'
                        }`}>
                          {idx + 1}
                        </span>
                        <span className="text-gray-700 group-hover:text-pink-500 transition-colors line-clamp-1">
                          {manga.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
