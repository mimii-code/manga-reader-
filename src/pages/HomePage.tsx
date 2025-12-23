import { Link } from 'react-router-dom';
import { ChevronRight, Flame, Clock, Star, Gift } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';
import MangaCard from '../components/MangaCard';
import { featuredManga, latestReleases, news, magazines } from '../data/manga';

export default function HomePage() {
  return (
    <div>
      {/* Hero Banner */}
      <HeroBanner />

      {/* Quick Links */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Link 
              to="/free"
              className="flex items-center gap-2 bg-pink-50 text-pink-600 px-4 py-2 rounded-full whitespace-nowrap hover:bg-pink-100 transition-colors"
            >
              <Gift size={18} />
              <span className="font-medium">Free Chapters</span>
            </Link>
            <Link 
              to="/rankings"
              className="flex items-center gap-2 bg-orange-50 text-orange-600 px-4 py-2 rounded-full whitespace-nowrap hover:bg-orange-100 transition-colors"
            >
              <Flame size={18} />
              <span className="font-medium">Hot Rankings</span>
            </Link>
            <Link 
              to="/new"
              className="flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full whitespace-nowrap hover:bg-blue-100 transition-colors"
            >
              <Clock size={18} />
              <span className="font-medium">New Releases</span>
            </Link>
            <Link 
              to="/top-rated"
              className="flex items-center gap-2 bg-yellow-50 text-yellow-600 px-4 py-2 rounded-full whitespace-nowrap hover:bg-yellow-100 transition-colors"
            >
              <Star size={18} />
              <span className="font-medium">Top Rated</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Series */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Featured Series</h2>
            <Link 
              to="/series"
              className="flex items-center gap-1 text-pink-500 hover:text-pink-600 font-medium transition-colors"
            >
              View All
              <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {featuredManga.slice(0, 6).map((manga) => (
              <MangaCard key={manga.id} manga={manga} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* Updated Today */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Updated Today
              </span>
              <h2 className="text-2xl font-bold text-gray-800">Latest Updates</h2>
            </div>
            <Link 
              to="/updates"
              className="flex items-center gap-1 text-pink-500 hover:text-pink-600 font-medium transition-colors"
            >
              View All
              <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredManga.filter(m => m.isUpdated).slice(0, 6).map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Series Grid */}
      <section className="py-8 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Popular This Week</h2>
            <Link 
              to="/rankings"
              className="flex items-center gap-1 text-pink-500 hover:text-pink-600 font-medium transition-colors"
            >
              View Rankings
              <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredManga.slice(0, 8).map((manga) => (
              <MangaCard key={manga.id} manga={manga} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Releases */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                NEW
              </span>
              <h2 className="text-2xl font-bold text-gray-800">Latest Releases</h2>
            </div>
            <Link 
              to="/new"
              className="flex items-center gap-1 text-pink-500 hover:text-pink-600 font-medium transition-colors"
            >
              View All
              <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {latestReleases.map((manga) => (
              <MangaCard key={manga.id} manga={manga} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* Magazines */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Magazine</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {magazines.map((mag) => (
              <Link
                key={mag.id}
                to={`/magazine/${mag.id}`}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="h-12 flex items-center justify-center mb-2">
                  <span className="text-lg font-semibold text-gray-700">{mag.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">News & Updates</h2>
            <Link 
              to="/news"
              className="flex items-center gap-1 text-pink-500 hover:text-pink-600 font-medium transition-colors"
            >
              View All
              <ChevronRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.slice(0, 6).map((item) => (
              <Link
                key={item.id}
                to={`/news/${item.id}`}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <h3 className="font-medium text-gray-800 mt-1 line-clamp-2 group-hover:text-pink-500 transition-colors">
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
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Reading Today!
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Sign up for free and get access to thousands of manga chapters. New users get 100 bonus coins!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
            >
              Sign Up Free
            </Link>
            <Link
              to="/series"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              Browse Series
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
