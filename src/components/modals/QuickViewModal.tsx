import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Check, ArrowRight, Minus, Plus } from 'lucide-react';
import { Product } from '../../types';
import { formatPrice } from '../../utils/format';
import { useCart } from '../../context/CartContext';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedColor(product.colors[0]?.name || '');
      setSelectedSize('');
      setQuantity(1);
      setSizeError(false);
      setAddedSuccess(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    addToCart(product, selectedColor, selectedSize, quantity);
    setAddedSuccess(true);
    setTimeout(() => {
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl bg-ivory-50 shadow-drawer border border-sandstone-300 z-10 overflow-hidden flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-charcoal-700 hover:text-charcoal bg-ivory/80 rounded-full transition-colors"
          aria-label="Close quick view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-auto bg-sandstone-100 overflow-hidden shrink-0">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content & Selection Column */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-taupe-400 font-medium mb-1">
              {product.category.replace('-', ' ')}
            </p>

            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-normal leading-tight mb-2">
              {product.name}
            </h3>

            <p className="text-base sm:text-lg font-medium text-charcoal-900 mb-3">
              {formatPrice(product.price)}
            </p>

            {/* Badges for Fabric and Includes */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-[11px] uppercase tracking-wider px-2.5 py-0.5 bg-sandstone-100 border border-sandstone-300 text-charcoal-800 font-medium">
                {product.fabric}
              </span>
              {product.includes && (
                <span className="text-[11px] uppercase tracking-wider px-2.5 py-0.5 bg-ivory border border-charcoal-300 text-charcoal-900 font-medium">
                  {product.includes}
                </span>
              )}
            </div>

            <p className="text-xs sm:text-sm text-taupe-500 font-light leading-relaxed mb-6">
              {product.shortDescription}
            </p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-5">
                <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-2">
                  <span className="text-charcoal-700 font-medium">Color:</span>
                  <span className="text-taupe-500">{selectedColor}</span>
                </div>
                <div className="flex items-center gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-7 h-7 rounded-full border transition-all flex items-center justify-center ${
                        selectedColor === c.name
                          ? 'ring-2 ring-charcoal-800 scale-105 border-transparent'
                          : 'border-sandstone-300'
                      }`}
                      style={{ backgroundColor: c.hex }}
                      aria-label={`Select color ${c.name}`}
                    >
                      {selectedColor === c.name && (
                        <Check className={`w-3.5 h-3.5 ${c.hex === '#FAF7F0' || c.hex === '#FFFFFF' ? 'text-charcoal' : 'text-ivory'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs tracking-wider uppercase mb-2">
                <span className="text-charcoal-700 font-medium">
                  {product.isUnstitched ? 'Cut / Length:' : 'Select Size:'}
                </span>
                {sizeError && (
                  <span className="text-red-700 text-[11px] font-medium animate-pulse">
                    Please select an option
                  </span>
                )}
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSelectedSize(s);
                      setSizeError(false);
                    }}
                    className={`py-2 px-1 text-xs uppercase tracking-wider font-medium border text-center transition-all ${
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

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs uppercase tracking-wider text-charcoal-700 font-medium">
                Quantity:
              </span>
              <div className="flex items-center border border-sandstone-300 bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-2 text-charcoal hover:bg-sandstone-100"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-4 text-xs font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-2 text-charcoal hover:bg-sandstone-100"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-sandstone-200">
            <button
              onClick={handleAddToCart}
              className={`w-full py-3.5 px-6 text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                addedSuccess
                  ? 'bg-emerald-800 text-white'
                  : 'bg-charcoal text-ivory hover:bg-charcoal-900 shadow-subtle'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" /> Added to Bag
                </>
              ) : (
                'Add to Shopping Bag'
              )}
            </button>

            <div className="mt-3 text-center">
              <Link
                to={`/product/${product.slug}`}
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase text-taupe-500 hover:text-charcoal transition-colors pb-0.5 border-b border-sandstone-300 hover:border-charcoal"
              >
                <span>View Full Product Details</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
