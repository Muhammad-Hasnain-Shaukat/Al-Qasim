import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const ShopByCollection: React.FC = () => {
  const collections = [
    {
      title: 'Shalwar Kameez',
      category: 'shalwar-kameez',
      subtitle: 'Pure Egyptian Giza Cottons & Raw Silks',
      image: '/images/collections/p4.webp',
      featured: true, // spans full width on mobile
    },
    {
      title: 'Kurtas',
      category: 'kurtas',
      subtitle: 'Minimalist Slub & Linen Cuts',
      image: '/images/collections/p2.webp',
      featured: false,
    },
    {
      title: 'Waistcoats',
      category: 'waistcoats',
      subtitle: 'Structured Tropical Wools & Jamawar',
      image: '/images/collections/p1.webp',
      featured: false,
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-14 sm:mb-20">
        <p className="text-xs uppercase tracking-ultra text-brass-600 font-semibold mb-3">
          Curated Wardrobe
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-normal leading-tight">
          The everyday, elevated.
        </h2>
        <div className="w-12 h-[1px] bg-brass-400 mx-auto mt-5" />
      </div>

      {/* Editorial Grid:
          Desktop: 3 balanced columns
          Mobile: First card spans 2 columns, next two cards sit side-by-side
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {collections.map((col) => (
          <Link
            key={col.category}
            to={`/collections/${col.category}`}
            className={`group block text-left ${col.featured ? 'col-span-2 md:col-span-1' : 'col-span-1'}`}
          >
            {/* Tall fashion portrait photo container with clean edges */}
            <div className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-sandstone-100 mb-4 border border-sandstone-200/60">
              <img
                src={col.image}
                alt={col.title}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/15 transition-colors duration-500" />
            </div>

            {/* Captions beneath the image */}
            <div className="flex items-start justify-between pt-1 gap-2 min-w-0">
              <div className="min-w-0 flex-1">
                <h3 className="font-serif text-lg sm:text-2xl text-charcoal-900 font-normal group-hover:text-brass-600 transition-colors leading-snug">
                  {col.title}
                </h3>
                <p className="text-xs sm:text-sm text-taupe-500 font-light mt-0.5 line-clamp-2 sm:line-clamp-none">
                  {col.subtitle}
                </p>
              </div>
              <span className="p-1 shrink-0 text-charcoal-400 group-hover:text-charcoal-900 transition-colors">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
