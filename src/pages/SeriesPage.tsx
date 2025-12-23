import { useState } from 'react';
import { Filter, Grid, List, Search } from 'lucide-react';
import MangaCard from '../components/MangaCard';
import { featuredManga, latestReleases } from '../data/manga';

const allManga = [...featuredManga, ...latestReleases];

const genres = [
  'All', 'Romance', 'Comedy', 'Drama', 'Fantasy', 'School Life', 
  'Slice of Life', 'Mystery', 'Historical', 'Sports', 'Family'
];

const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest First' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'updated', label: 'Recently Updated' },
];

export default function SeriesPage() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredManga = allManga.filter((manga) => {
    const matchesGenre = selectedGenre === 'All' || manga.genre.includes(selectedGenre);
    const matchesSearch = manga.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          manga.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  const sortedManga = [...filteredManga].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return b.id - a.id;
      case 'rating':
        return b.rating - a.rating;
      case 'updated':
        return (b.isUpdated ? 1 : 0) - (a.isUpdated ? 1 : 0);
      default:
        return b.rating - a.rating;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">All Series</h1>
          <p className="text-white/80 mt-2">Discover your next favorite manga</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Search Bar */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search series or authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:border-pink-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

          {/* Genre Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedGenre === genre
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          {/* Sort and View Options */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-pink-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-pink-100 text-pink-500' : 'text-gray-500'}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-pink-100 text-pink-500' : 'text-gray-500'}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-gray-600 mb-6">{sortedManga.length} series found</p>
        
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {sortedManga.map((manga) => (
              <MangaCard key={manga.id} manga={manga} variant="compact" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sortedManga.map((manga) => (
              <MangaCard key={manga.id} manga={manga} />
            ))}
          </div>
        )}

        {sortedManga.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No series found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedGenre('All');
                setSearchQuery('');
              }}
              className="mt-4 text-pink-500 hover:text-pink-600 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
