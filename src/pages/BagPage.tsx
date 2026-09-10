import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

export const BagPage: React.FC = () => {
  const { items, updateQuantity, removeFromCart, subtotal, clearCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Title */}
      <div className="flex items-baseline justify-between border-b border-sandstone-300 pb-6 mb-8">
        <h1 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
          Your Shopping Bag
        </h1>
        {items.length > 0 && (
          <button
            onClick={clearCart}
            className="text-xs uppercase tracking-wider text-taupe-500 hover:text-red-700 transition-colors"
          >
            Clear All Items
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-sandstone-50/50 border border-sandstone-200 p-8">
          <div className="w-16 h-16 rounded-full bg-sandstone-100 flex items-center justify-center text-taupe-400 mx-auto mb-4">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-2xl text-charcoal-800 mb-2">
            Your shopping bag is empty
          </h2>
          <p className="text-xs sm:text-sm text-taupe-500 max-w-sm mx-auto mb-8 font-light">
            You haven't added any pieces to your bag yet. Discover our latest shalwar kameez and waistcoats.
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Bag Items List (8 cols) */}
          <div className="lg:col-span-8 divide-y divide-sandstone-200">
            {items.map((item) => (
              <div key={item.id} className="py-6 flex gap-4 sm:gap-6 text-left">
                {/* Image */}
                <Link
                  to={`/product/${item.product.slug}`}
                  className="w-24 sm:w-28 aspect-[3/4] bg-sandstone-100 overflow-hidden shrink-0 border border-sandstone-200"
                >
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </Link>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/product/${item.product.slug}`}
                        className="font-serif text-lg sm:text-xl text-charcoal-900 font-normal hover:text-brass-600 transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-taupe-400 hover:text-red-700 p-1"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs text-taupe-500 mt-1">
                      <span className="font-medium text-charcoal-700">{item.selectedColor}</span> &bull; Size:{' '}
                      <span className="font-medium text-charcoal-700">{item.selectedSize}</span>
                    </p>
                    <p className="text-xs text-taupe-400 mt-0.5 line-clamp-1">
                      {item.product.fabric}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-sandstone-300 bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-charcoal hover:bg-sandstone-100"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-4 text-xs font-semibold text-charcoal-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-charcoal hover:bg-sandstone-100"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Total Price */}
                    <span className="text-base font-semibold text-charcoal-900">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Sidebar (4 cols) */}
          <div className="lg:col-span-4 bg-sandstone-50 border border-sandstone-300 p-6 sm:p-8 space-y-6 text-left">
            <h3 className="font-serif text-xl text-charcoal-900 font-normal">
              Order Summary
            </h3>

            <div className="space-y-3 text-xs text-charcoal-700">
              <div className="flex items-center justify-between">
                <span className="text-taupe-500">Items Subtotal</span>
                <span className="font-semibold text-charcoal-900">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-taupe-500">Shipping</span>
                <span className="text-emerald-800 font-medium">Complimentary</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-taupe-500">Sales Tax</span>
                <span>Included</span>
              </div>
            </div>

            <div className="pt-4 border-t border-sandstone-300 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-charcoal-800 font-semibold">
                Estimated Total
              </span>
              <span className="font-serif text-2xl font-semibold text-charcoal-900">
                {formatPrice(subtotal)}
              </span>
            </div>

            <Link
              to="/checkout"
              className="w-full py-4 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-charcoal-950 transition-colors shadow-subtle"
            >
              <span>Proceed to Demo Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="pt-2 text-[11px] text-taupe-400 font-light flex items-center gap-2 justify-center">
              <ShieldCheck className="w-4 h-4 text-taupe-500 shrink-0" />
              <span>Preview Demo &mdash; Client-side validation only</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
