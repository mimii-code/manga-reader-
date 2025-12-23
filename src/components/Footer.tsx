import { Link } from 'react-router-dom';
import { Twitter, Instagram, Youtube, Facebook } from 'lucide-react';
import { magazines } from '../data/manga';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="text-2xl font-bold text-pink-400">
              ComicPlus+
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Your destination for the best manga and novel content. Read your favorite series anytime, anywhere.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Magazines */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Magazines</h3>
            <ul className="space-y-2">
              {magazines.slice(0, 6).map((mag) => (
                <li key={mag.id}>
                  <Link 
                    to={`/magazine/${mag.id}`}
                    className="text-gray-400 hover:text-pink-400 text-sm transition-colors"
                  >
                    {mag.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/series" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                  All Series
                </Link>
              </li>
              <li>
                <Link to="/rankings" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                  Rankings
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/missions" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                  Missions
                </Link>
              </li>
              <li>
                <Link to="/free" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                  Free Chapters
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-pink-400 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* App Download */}
      <div className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h4 className="font-semibold">Download the App</h4>
              <p className="text-gray-400 text-sm">Read on the go with our mobile app</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="bg-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="bg-black px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2025 ComicPlus+. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
