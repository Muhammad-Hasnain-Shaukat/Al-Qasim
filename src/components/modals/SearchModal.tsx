import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { formatPrice } from '../../utils/format';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();
  const results = normalizedQuery
    ? PRODUCTS.filter((p) => {
        const matchesName = p.name.toLowerCase().includes(normalizedQuery);
        const matchesCategory = p.category.toLowerCase().includes(normalizedQuery);
        const matchesFabric = p.fabric.toLowerCase().includes(normalizedQuery);
        const matchesColors = p.colors.some((c) => c.name.toLowerCase().includes(normalizedQuery));
        return matchesName || matchesCategory || matchesFabric || matchesColors;
      })
    : [];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-ivory-50/98 backdrop-blur-md animate-fadeIn" role="dialog" aria-modal="true">
      {/* Top bar */}
      <div className="border-b border-sandstone-300/80 px-4 sm:px-8 py-4 sm:py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-3">
            <Search className="w-5 h-5 text-taupe-400 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search shalwar kameez, kurtas, waistcoats, fabrics..."
              className="w-full bg-transparent text-charcoal-800 text-lg sm:text-xl font-light placeholder:text-taupe-400 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-taupe-400 hover:text-charcoal p-1 transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-charcoal-700 hover:text-charcoal transition-colors rounded-full hover:bg-sandstone-100"
            aria-label="Close search"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Results area */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          {query.trim() === '' ? (
            <div className="py-12">
              <p className="text-xs uppercase tracking-widest text-taupe-400 font-medium mb-4">
                Popular Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {['Classic Ivory Shalwar Kameez', 'Charcoal Tailored Waistcoat', 'Giza Cotton Unstitched', 'Linen Kurta', 'Occasion Wear'].map(
                  (term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-4 py-2 border border-sandstone-300 text-xs tracking-wider uppercase text-charcoal hover:border-charcoal hover:bg-sandstone-100 transition-all rounded-sm"
                    >
                      {term}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div>
              <p className="text-xs uppercase tracking-widest text-taupe-400 mb-6 font-medium">
                {results.length} {results.length === 1 ? 'Result' : 'Results'} found
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {results.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                    onClick={onClose}
                    className="group flex gap-4 p-3 bg-white/60 border border-sandstone-200 hover:border-charcoal/40 transition-all rounded-sm"
                  >
                    <div className="w-20 h-28 bg-sandstone-100 overflow-hidden shrink-0">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-between py-1">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-taupe-400">
                          {product.category.replace('-', ' ')}
                        </span>
                        <h4 className="font-serif text-base text-charcoal-800 font-medium line-clamp-1 group-hover:text-brass-600 transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-xs text-taupe-500 line-clamp-1 mt-0.5">
                          {product.fabric}
                        </p>
                      </div>
                      <p className="text-sm font-medium text-charcoal-900 mt-2">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-charcoal-700 mb-2">No matching products found</p>
              <p className="text-sm text-taupe-500 max-w-md mx-auto mb-6">
                We couldn't find anything matching "{query}". Try checking your spelling or search for categories like "kurtas", "waistcoats", or "shalwar kameez".
              </p>
              <button
                onClick={() => setQuery('')}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal border-b border-charcoal pb-1 hover:text-brass-600 hover:border-brass-600 transition-colors"
              >
                Clear search <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
