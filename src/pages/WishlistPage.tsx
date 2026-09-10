import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { QuickViewModal } from '../components/modals/QuickViewModal';
import { Product } from '../types';

export const WishlistPage: React.FC = () => {
  const { wishlist } = useWishlist();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const wishlistedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-2xl mb-10 text-left border-b border-sandstone-300 pb-6">
        <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal mb-2">
          Your Saved Pieces
        </h1>
        <p className="text-xs sm:text-sm text-taupe-500 font-light">
          Review garments and fabrics you have bookmarked for future occasions.
        </p>
      </div>

      {wishlistedProducts.length === 0 ? (
        <div className="text-center py-20 bg-sandstone-50/50 border border-sandstone-200 p-8">
          <div className="w-16 h-16 rounded-full bg-sandstone-100 flex items-center justify-center text-taupe-400 mx-auto mb-4">
            <Heart className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-2xl text-charcoal-800 mb-2">
            Your wishlist is empty
          </h2>
          <p className="text-xs sm:text-sm text-taupe-500 max-w-sm mx-auto mb-8 font-light">
            Explore our collections and click the heart icon on any garment to save it here.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-charcoal-900 transition-colors shadow-subtle"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {wishlistedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={(p) => setQuickViewProduct(p)}
            />
          ))}
        </div>
      )}

      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
