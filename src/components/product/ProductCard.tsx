import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { formatPrice } from '../../utils/format';
import { useWishlist } from '../../context/WishlistContext';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const isWishlisted = isInWishlist(product.id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColorHex, setSelectedColorHex] = useState(product.colors[0]?.hex || '');

  // Second image for hover preview if available
  const hasAlternateImage = product.images.length > 1;

  const handleColorClick = (e: React.MouseEvent, hex: string, colorImg?: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedColorHex(hex);
    if (colorImg) {
      const idx = product.images.findIndex((img) => img === colorImg);
      if (idx !== -1) {
        setActiveImageIndex(idx);
      }
    }
  };

  return (
    <div className="group relative flex flex-col text-left">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-sandstone-100 border border-sandstone-200/60 mb-3 sm:mb-4">
        <Link to={`/product/${product.slug}`} className="block w-full h-full">
          {/* Primary image */}
          <img
            src={product.images[activeImageIndex] || product.images[0]}
            alt={product.name}
            className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
              hasAlternateImage ? 'group-hover:opacity-0' : 'group-hover:scale-[1.03]'
            }`}
          />

          {/* Alternate Hover Image if exists */}
          {hasAlternateImage && (
            <img
              src={product.images[1]}
              alt={`${product.name} detail`}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out group-hover:scale-[1.03]"
            />
          )}
        </Link>

        {/* Action buttons:
            Desktop: subtle slide-in / hover
            Mobile: always visible on tap / accessible
        */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleWishlist(product.id);
            }}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-sm transition-all shadow-xs ${
              isWishlisted
                ? 'bg-charcoal text-brass-400 opacity-100'
                : 'bg-ivory/90 text-charcoal-700 hover:text-charcoal hover:bg-ivory opacity-90 sm:opacity-0 sm:group-hover:opacity-100'
            }`}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-brass-400' : ''}`} />
          </button>
        </div>

        {/* Quick View Button:
            Bottom banner over image, visible on mobile and desktop
        */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onQuickView(product);
          }}
          className="absolute bottom-0 inset-x-0 py-2.5 bg-charcoal-900/85 backdrop-blur-xs text-ivory text-[11px] uppercase tracking-widest font-medium transition-all duration-300 opacity-90 sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 flex items-center justify-center gap-2 hover:bg-charcoal-950"
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Quick View</span>
        </button>
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-1">
        {/* Category & Tags (kept below image so photo is never covered) */}
        <div className="flex items-center justify-between gap-2 mb-1">
          <p className="text-[11px] tracking-widest uppercase text-taupe-400">
            {product.category.replace('-', ' ')}
          </p>

          {(product.tags.includes('new-in') || product.compareAtPrice) && (
            <div className="flex items-center gap-1.5">
              {product.tags.includes('new-in') && (
                <span className="text-[9px] uppercase tracking-wider font-medium text-charcoal-800 bg-sandstone-200/80 px-1.5 py-0.5 rounded-xs">
                  New In
                </span>
              )}
              {product.compareAtPrice && (
                <span className="text-[9px] uppercase tracking-wider font-medium text-brass-700 bg-brass-100/70 px-1.5 py-0.5 rounded-xs">
                  Curated Offer
                </span>
              )}
            </div>
          )}
        </div>

        {/* Product Name */}
        <Link
          to={`/product/${product.slug}`}
          className="font-serif text-lg sm:text-xl text-charcoal-900 font-normal leading-snug hover:text-brass-600 transition-colors mb-1.5"
        >
          {product.name}
        </Link>

        {/* Price in PKR */}
        <div className="flex items-center gap-2 mb-2.5">
          <span className="text-sm font-medium text-charcoal-900">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs text-taupe-400 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        {/* Color Swatches */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-1.5 mt-auto pt-1" aria-label="Available colors">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={(e) => handleColorClick(e, c.hex, c.image)}
                title={c.name}
                aria-label={`Select color ${c.name}`}
                className={`w-3.5 h-3.5 rounded-full border transition-all ${
                  selectedColorHex === c.hex
                    ? 'ring-1 ring-charcoal-800 scale-110 border-transparent'
                    : 'border-sandstone-300 hover:scale-105'
                }`}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
