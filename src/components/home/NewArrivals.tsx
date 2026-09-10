import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../product/ProductCard';
import { QuickViewModal } from '../modals/QuickViewModal';
import { Product } from '../../types';

export const NewArrivals: React.FC = () => {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Four key featured new arrivals matching the specifications:
  // 1. Classic Ivory Shalwar Kameez
  // 2. Sandstone Everyday Kurta
  // 3. Charcoal Tailored Waistcoat
  // 4. Olive Essential Shalwar Kameez
  const featuredProducts = [
    PRODUCTS.find((p) => p.slug === 'classic-ivory-shalwar-kameez')!,
    PRODUCTS.find((p) => p.slug === 'sandstone-everyday-kurta')!,
    PRODUCTS.find((p) => p.slug === 'charcoal-tailored-waistcoat')!,
    PRODUCTS.find((p) => p.slug === 'olive-essential-shalwar-kameez')!,
  ].filter(Boolean);

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-sandstone-200/80">
      {/* Header with Title and Link */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
        <div>
          <p className="text-xs uppercase tracking-ultra text-brass-600 font-semibold mb-2">
            New Arrivals
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-normal leading-tight">
            Season Essentials
          </h2>
        </div>
        <Link
          to="/collections/all?tag=new-in"
          className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal-800 hover:text-brass-600 border-b border-charcoal-800/40 hover:border-brass-600 pb-1 transition-colors w-fit"
        >
          <span>View All New Arrivals</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Grid: 4 products on desktop, 2 columns on mobile */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={(prod) => setQuickViewProduct(prod)}
          />
        ))}
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
};
