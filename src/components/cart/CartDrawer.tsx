import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { formatPrice } from '../../utils/format';

export const CartDrawer: React.FC = () => {
  const {
    items,
    updateQuantity,
    removeFromCart,
    subtotal,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    announcement,
  } = useCart();

  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCartDrawerOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        const closeBtn = drawerRef.current?.querySelector('button') as HTMLButtonElement;
        closeBtn?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCartDrawerOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartDrawerOpen) {
        setIsCartDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartDrawerOpen, setIsCartDrawerOpen]);

  if (!isCartDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartDrawerOpen(false)}
      />

      {/* Slide-over Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div
          ref={drawerRef}
          className="w-screen max-w-md bg-ivory-50 shadow-drawer border-l border-sandstone-300 flex flex-col justify-between"
        >
          {/* Drawer Header */}
          <div className="p-6 border-b border-sandstone-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-charcoal-800" />
                <h3 className="font-serif text-2xl text-charcoal-900 font-normal">
                  Shopping Bag
                </h3>
              </div>
              <button
                onClick={() => setIsCartDrawerOpen(false)}
                className="p-2 text-charcoal-600 hover:text-charcoal transition-colors rounded-full"
                aria-label="Close bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Live Accessible Announcement */}
            {announcement && (
              <div
                className="mt-3 p-2 bg-brass-100 text-charcoal-900 text-xs tracking-wider border border-brass-300 flex items-center justify-between animate-fadeIn"
                role="status"
              >
                <span>{announcement}</span>
              </div>
            )}
          </div>

          {/* Drawer Body: Items list */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-sandstone-100 flex items-center justify-center text-taupe-400 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl text-charcoal-800 mb-2">
                  Your bag is empty
                </h4>
                <p className="text-xs text-taupe-500 max-w-xs mb-6 font-light">
                  Explore our signature shalwar kameez, kurtas, and waistcoats to begin.
                </p>
                <button
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="px-6 py-3 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-charcoal-900 transition-colors"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              <div className="divide-y divide-sandstone-200">
                {items.map((item) => (
                  <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                    {/* Item Thumbnail */}
                    <div className="w-20 h-24 bg-sandstone-100 overflow-hidden shrink-0 border border-sandstone-200">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between">
                          <h4 className="font-serif text-base text-charcoal-900 font-medium leading-snug">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-taupe-400 hover:text-red-700 p-1 transition-colors"
                            aria-label={`Remove ${item.product.name} from bag`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-xs text-taupe-500 mt-0.5">
                          {item.selectedColor} &bull; {item.selectedSize}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity Adjuster */}
                        <div className="flex items-center border border-sandstone-300 bg-white">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 text-charcoal-700 hover:bg-sandstone-100"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 text-xs font-semibold text-charcoal-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 text-charcoal-700 hover:bg-sandstone-100"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Line Total */}
                        <span className="text-sm font-semibold text-charcoal-900">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-sandstone-200 bg-sandstone-50/70 space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="uppercase tracking-widest text-taupe-500 font-medium">
                  Subtotal
                </span>
                <span className="font-serif text-2xl font-semibold text-charcoal-900">
                  {formatPrice(subtotal)}
                </span>
              </div>

              <p className="text-[11px] text-taupe-400 font-light leading-tight">
                Taxes included. Complimentary shipping across Pakistan.
              </p>

              <div className="space-y-2">
                <Link
                  to="/checkout"
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="w-full py-4 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-charcoal-950 transition-all shadow-subtle"
                >
                  <span>Proceed to Demo Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/bag"
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="w-full py-2.5 text-center block text-xs uppercase tracking-widest font-medium text-charcoal-700 hover:text-charcoal transition-colors border border-sandstone-300 hover:border-charcoal bg-white"
                >
                  View Full Bag
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
