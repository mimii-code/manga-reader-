import { Link } from 'react-router-dom';
import { Star, BookOpen } from 'lucide-react';
import type { Manga } from '../data/manga';

interface MangaCardProps {
  manga: Manga;
  variant?: 'default' | 'compact' | 'featured';
}

export default function MangaCard({ manga, variant = 'default' }: MangaCardProps) {
  if (variant === 'compact') {
    return (
      <Link to={`/series/${manga.id}`} className="group">
        <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <img
            src={manga.cover}
            alt={manga.title}
            className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {manga.isNew && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-medium">
              NEW
            </span>
          )}
          {manga.isUpdated && (
            <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded font-medium">
              UPDATED
            </span>
          )}
          {manga.freeChapters && (
            <span className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded font-medium">
              {manga.freeChapters} FREE
            </span>
          )}
        </div>
        <h3 className="mt-2 text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-pink-500 transition-colors">
          {manga.title}
        </h3>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link to={`/series/${manga.id}`} className="group block">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
          <div className="relative">
            <img
              src={manga.cover}
              alt={manga.title}
              className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {manga.isUpdated && (
              <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                UPDATED
              </span>
            )}
            {manga.freeChapters && (
              <span className="absolute bottom-3 left-3 bg-yellow-400 text-yellow-900 text-xs px-3 py-1 rounded-full font-medium">
                {manga.freeChapters} Episodes Free
              </span>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-pink-500 transition-colors">
              {manga.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{manga.author}</p>
            <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                {manga.rating}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen size={14} />
                {manga.chapters} chapters
              </span>
            </div>
            <div className="flex flex-wrap gap-1 mt-3">
              {manga.genre.map((g) => (
                <span key={g} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {g}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/series/${manga.id}`} className="group flex gap-4 bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative flex-shrink-0 w-20 overflow-hidden rounded-lg">
        <img
          src={manga.cover}
          alt={manga.title}
          className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {manga.isNew && (
          <span className="absolute top-1 left-1 bg-red-500 text-white text-[10px] px-1 py-0.5 rounded font-medium">
            NEW
          </span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium text-gray-800 line-clamp-2 group-hover:text-pink-500 transition-colors">
          {manga.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{manga.author}</p>
        <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
          <span className="flex items-center gap-1">
            <Star size={12} className="text-yellow-400 fill-yellow-400" />
            {manga.rating}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen size={12} />
            {manga.chapters}
          </span>
        </div>
        <div className="flex flex-wrap gap-1 mt-2">
          {manga.genre.slice(0, 2).map((g) => (
            <span key={g} className="text-xs bg-pink-50 text-pink-600 px-2 py-0.5 rounded">
              {g}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
