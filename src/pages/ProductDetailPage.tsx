import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Heart,
  Share2,
  Check,
  Ruler,
  Minus,
  Plus,
  ShieldCheck,
  Truck,
  RotateCcw,
  Maximize2,
  X,
  ChevronRight,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { SizeGuideModal } from '../components/modals/SizeGuideModal';
import { QuickViewModal } from '../components/modals/QuickViewModal';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { formatPrice } from '../utils/format';
import { Product } from '../types';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.slug === slug);

  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const purchaseControlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setActiveImageIndex(0);
      setSelectedColor(product.colors[0]?.name || '');
      setSelectedSize('');
      setQuantity(1);
      setSizeError(false);
    }
  }, [slug, product]);

  // Observer for mobile sticky purchase bar
  useEffect(() => {
    const target = purchaseControlRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky bar when main purchase control is scrolled out of view
        setShowStickyBar(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 pt-32">
        <h1 className="font-serif text-3xl text-charcoal-900 mb-4">Product Not Found</h1>
        <p className="text-sm text-taupe-500 mb-6">
          The requested garment is not in our current catalog.
        </p>
        <Link
          to="/shop"
          className="px-6 py-3 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);

  // Related products from same category or tag
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.tags.some((t) => product.tags.includes(t)))
  ).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      // Scroll to size selector if not visible
      purchaseControlRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setSizeError(false);
    addToCart(product, selectedColor, selectedSize, quantity);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Al Qasim - ${product.name}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-taupe-400 mb-8">
        <Link to="/" className="hover:text-charcoal transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to={`/collections/${product.category}`} className="hover:text-charcoal transition-colors">
          {product.category.replace('-', ' ')}
        </Link>
        <span>/</span>
        <span className="text-charcoal font-medium truncate max-w-[200px]">
          {product.name}
        </span>
      </nav>

      {/* Main Grid: Left Gallery, Right Product Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        
        {/* Gallery Column (7 cols desktop) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Large Image */}
          <div className="relative aspect-[3/4] bg-sandstone-100 overflow-hidden border border-sandstone-200/80 group">
            <img
              src={product.images[activeImageIndex] || product.images[0]}
              alt={`${product.name} view ${activeImageIndex + 1}`}
              className="w-full h-full object-cover object-center transition-transform duration-500 cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
            />

            {/* Enlarge Button */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute bottom-4 right-4 p-2.5 bg-ivory/90 hover:bg-ivory text-charcoal-800 rounded-full shadow-subtle backdrop-blur-xs transition-all"
              aria-label="Enlarge image"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          {/* Thumbnails Row */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`aspect-[3/4] overflow-hidden bg-sandstone-100 border transition-all ${
                    activeImageIndex === idx
                      ? 'border-charcoal ring-1 ring-charcoal'
                      : 'border-sandstone-300 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details Column (5 cols desktop) */}
        <div className="lg:col-span-5 flex flex-col justify-between text-left">
          <div>
            {/* Category & Tags */}
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="text-[11px] uppercase tracking-ultra text-brass-700 font-semibold">
                {product.category.replace('-', ' ')}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="p-1.5 text-taupe-400 hover:text-charcoal transition-colors relative"
                  title="Share product link"
                  aria-label="Share product"
                >
                  <Share2 className="w-4 h-4" />
                  {copiedLink && (
                    <span className="absolute -top-7 right-0 text-[10px] bg-charcoal text-ivory px-2 py-0.5 rounded shadow whitespace-nowrap">
                      Link copied!
                    </span>
                  )}
                </button>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-1.5 rounded-full transition-colors ${
                    isWishlisted ? 'text-brass-600' : 'text-taupe-400 hover:text-charcoal'
                  }`}
                  aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-brass-600' : ''}`} />
                </button>
              </div>
            </div>

            {/* Product Title */}
            <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal leading-tight mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xl sm:text-2xl font-medium text-charcoal-900">
                {formatPrice(product.price)}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-taupe-400 line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>

            {/* Suggested Fabric & Includes Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center px-3 py-1 bg-sandstone-100 text-charcoal-900 text-xs font-medium tracking-wider uppercase rounded-xs border border-sandstone-300">
                Fabric: {product.fabric}
              </span>
              {product.includes && (
                <span className="inline-flex items-center px-3 py-1 bg-ivory text-charcoal-900 text-xs font-medium tracking-wider uppercase rounded-xs border border-charcoal-300">
                  Includes: {product.includes}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Color Selector */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6 pb-6 border-b border-sandstone-200">
                <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-3">
                  <span className="text-charcoal-800 font-semibold">Color:</span>
                  <span className="text-taupe-500 font-normal">{selectedColor}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => {
                        setSelectedColor(c.name);
                        if (c.image) {
                          const idx = product.images.findIndex((img) => img === c.image);
                          if (idx !== -1) setActiveImageIndex(idx);
                        }
                      }}
                      className={`w-8 h-8 rounded-full border transition-all flex items-center justify-center ${
                        selectedColor === c.name
                          ? 'ring-2 ring-charcoal-800 scale-105 border-transparent'
                          : 'border-sandstone-300'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      aria-label={`Select color ${c.name}`}
                    >
                      {selectedColor === c.name && (
                        <Check
                          className={`w-4 h-4 ${
                            c.hex === '#FAF7F0' || c.hex === '#FFFFFF'
                              ? 'text-charcoal'
                              : 'text-ivory'
                          }`}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selector with Validation Message */}
            <div ref={purchaseControlRef} className="mb-6 pb-6 border-b border-sandstone-200">
              <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-charcoal-800 font-semibold">
                    {product.isUnstitched ? 'Specification:' : 'Select Size:'}
                  </span>
                  {sizeError && (
                    <span className="text-red-700 font-semibold text-[11px] animate-pulse">
                      * Please select a size
                    </span>
                  )}
                </div>
                {!product.isUnstitched && (
                  <button
                    onClick={() => setIsSizeGuideOpen(true)}
                    className="inline-flex items-center gap-1 text-brass-700 hover:text-brass-800 underline lowercase first-letter:uppercase font-medium"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Size guide</span>
                  </button>
                )}
              </div>

              {/* Size Buttons Grid */}
              <div
                className={`grid gap-2 ${
                  product.isUnstitched ? 'grid-cols-1' : 'grid-cols-4'
                }`}
              >
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSelectedSize(s);
                      setSizeError(false);
                    }}
                    className={`py-3 px-2 text-xs uppercase tracking-wider font-medium border text-center transition-all ${
                      selectedSize === s
                        ? 'bg-charcoal text-ivory border-charcoal'
                        : 'border-sandstone-300 text-charcoal hover:border-charcoal bg-transparent'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Add to Bag */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-sandstone-300 bg-white">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 text-charcoal hover:bg-sandstone-100"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-5 text-sm font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 text-charcoal hover:bg-sandstone-100"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-4 px-8 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-charcoal-900 transition-all shadow-subtle flex items-center justify-center gap-2"
                >
                  <span>Add to Shopping Bag</span>
                </button>
              </div>

              {/* Service Badges */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-sandstone-200/80 text-[11px] text-taupe-500">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-charcoal-700 shrink-0" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-charcoal-700 shrink-0" />
                  <span>100% Authentic</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5 text-charcoal-700 shrink-0" />
                  <span>Easy Exchange</span>
                </div>
              </div>
            </div>

            {/* Accordion / Tab Details */}
            <div className="space-y-4 pt-4 border-t border-sandstone-300 text-xs text-charcoal-700">
              {/* Fabric Specs */}
              <div>
                <h4 className="uppercase tracking-widest text-charcoal-900 font-semibold mb-2">
                  Fabric & Fit
                </h4>
                <p className="text-taupe-500 font-light mb-1">
                  <strong className="text-charcoal-800 font-medium">Cloth:</strong> {product.fabric}
                </p>
                <p className="text-taupe-500 font-light">
                  <strong className="text-charcoal-800 font-medium">Silhouette:</strong> {product.fit}
                </p>
              </div>

              {/* Garment Details List */}
              <div className="pt-3 border-t border-sandstone-200">
                <h4 className="uppercase tracking-widest text-charcoal-900 font-semibold mb-2">
                  Design Specifications
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-taupe-500 font-light">
                  {product.details.map((det, i) => (
                    <li key={i}>{det}</li>
                  ))}
                </ul>
              </div>

              {/* Care Instructions */}
              <div className="pt-3 border-t border-sandstone-200">
                <h4 className="uppercase tracking-widest text-charcoal-900 font-semibold mb-2">
                  Care Guidelines
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-taupe-500 font-light">
                  {product.careInstructions.map((care, i) => (
                    <li key={i}>{care}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="mt-28 pt-16 border-t border-sandstone-300">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-ultra text-brass-600 font-semibold mb-2">
              Harmonious Complements
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
              Complete the Look
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {relatedProducts.map((relProduct) => (
              <ProductCard
                key={relProduct.id}
                product={relProduct}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            ))}
          </div>
        </section>
      )}

      {/* Mobile Sticky Purchase Bar (shows after main purchase controls leave viewport) */}
      {showStickyBar && (
        <div className="fixed bottom-0 inset-x-0 z-30 bg-ivory-50/98 backdrop-blur-md border-t border-sandstone-300 p-3 pb-safe shadow-elevated lg:hidden flex items-center justify-between gap-3 animate-fadeIn">
          <div className="truncate">
            <p className="font-serif text-sm font-medium text-charcoal-900 truncate">
              {product.name}
            </p>
            <p className="text-xs font-semibold text-brass-700">
              {formatPrice(product.price)}
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            className="px-6 py-3 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-charcoal-900 shrink-0"
          >
            {selectedSize ? `Add to Bag (${selectedSize})` : 'Select Size & Add'}
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-950/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-ivory-100 hover:text-white p-2 rounded-full bg-charcoal-800/80"
            aria-label="Close image lightbox"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={product.images[activeImageIndex] || product.images[0]}
            alt={product.name}
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />
        </div>
      )}

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        category={product.category}
      />

      {/* Quick View Modal for related items */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </div>
  );
};
