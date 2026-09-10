import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { AnnouncementBar } from './AnnouncementBar';
import { SearchModal } from '../modals/SearchModal';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const { totalItems, setIsCartDrawerOpen } = useCart();
  const { totalWishlistItems } = useWishlist();

  const isHomePage = location.pathname === '/';

  // Handle scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus management
      setTimeout(() => {
        const firstFocusable = drawerRef.current?.querySelector('button, [href]') as HTMLElement;
        firstFocusable?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
      menuButtonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Escape key handler for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'New In', path: '/collections/all?tag=new-in' },
    { label: 'Shalwar Kameez', path: '/collections/shalwar-kameez' },
    { label: 'Kurtas', path: '/collections/kurtas' },
    { label: 'Waistcoats', path: '/collections/waistcoats' },
    { label: 'Unstitched', path: '/collections/unstitched' },
  ];

  // Header styling: slim sheer black navigation bar with unbolded typography & prominent logo
  const headerBgClass = 'bg-black/60 backdrop-blur-md border-b border-white/10 text-white shadow-sm';
  const wordmarkClass = 'text-white font-light tracking-[0.2em] uppercase';
  const badgeClass = 'bg-white text-black font-medium';
  const iconClass = 'text-white hover:text-sandstone-300 transition-colors';
  const currentLogo = '/images/brand/al-qasim-emblem-white.png';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        <div className={headerBgClass}>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 sm:h-14 flex items-center justify-between">
            
            {/* Mobile: Hamburger Button */}
            <div className="flex items-center lg:hidden z-20 shrink-0">
              <button
                ref={menuButtonRef}
                onClick={() => setIsMobileMenuOpen(true)}
                className={`p-1.5 -ml-1 ${iconClass}`}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-5 h-5 stroke-[1.25]" />
              </button>
            </div>

            {/* Logo Emblem + Brand Wordmark: Optical center on mobile (nudged slightly left), left on desktop */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -ml-2.5 lg:ml-0 lg:static lg:translate-x-0 lg:translate-y-0 flex items-center justify-center lg:justify-start lg:flex-1 z-10">
              <Link
                to="/"
                className="flex items-center gap-2.5 sm:gap-3 group"
                aria-label="Al Qasim Home"
              >
                <img
                  src={currentLogo}
                  alt="Al Qasim Calligraphy Logo"
                  className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 brightness-100"
                />
                <span className="font-serif text-base sm:text-lg lg:text-xl tracking-[0.2em] uppercase font-light text-white whitespace-nowrap">
                  Al Qasim
                </span>
              </Link>
            </div>

            {/* Center: 5 Nav Items on Desktop (unbolded / font-light) */}
            <nav className="hidden lg:flex items-center justify-center space-x-7 xl:space-x-9 flex-shrink-0 z-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-light text-white/90 hover:text-white transition-colors py-0.5 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full bg-white/80" />
                </Link>
              ))}
            </nav>

            {/* Right: Action Icons (fully contained with comfortable padding so bag is never cut) */}
            <div className="flex items-center justify-end space-x-3.5 sm:space-x-4 lg:space-x-5 z-20 shrink-0 lg:flex-1">
              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-1.5 ${iconClass}`}
                aria-label="Search collection"
              >
                <Search className="w-4 h-4 stroke-[1.25]" />
              </button>

              {/* Wishlist Link */}
              <Link
                to="/wishlist"
                className={`p-1.5 relative ${iconClass}`}
                aria-label={`Wishlist (${totalWishlistItems} items)`}
              >
                <Heart className="w-4 h-4 stroke-[1.25]" />
                {totalWishlistItems > 0 && (
                  <span
                    className={`absolute 0.5 -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full text-[9px] font-medium flex items-center justify-center ${badgeClass}`}
                  >
                    {totalWishlistItems}
                  </span>
                )}
              </Link>

              {/* Shopping Bag Trigger */}
              <button
                onClick={() => setIsCartDrawerOpen(true)}
                className={`p-1.5 relative ${iconClass}`}
                aria-label={`Shopping bag with ${totalItems} items`}
              >
                <ShoppingBag className="w-4 h-4 stroke-[1.25]" />
                {totalItems > 0 && (
                  <span
                    className={`absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full text-[9px] font-medium flex items-center justify-center ${badgeClass}`}
                  >
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div
            ref={drawerRef}
            className="fixed inset-y-0 left-0 max-w-xs w-full bg-ivory-50 shadow-drawer flex flex-col justify-between z-50 border-r border-sandstone-300"
          >
            <div>
              {/* Drawer Header */}
              <div className="p-6 border-b border-sandstone-200 flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 font-serif text-lg tracking-[0.14em] uppercase text-charcoal-950 font-medium"
                >
                  <img
                    src="/images/brand/al-qasim-emblem.png"
                    alt="Al Qasim"
                    className="h-7 w-auto object-contain"
                  />
                  <span>Al Qasim</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-charcoal-600 hover:text-charcoal transition-colors"
                  aria-label="Close navigation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="px-6 py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between text-sm uppercase tracking-widest text-charcoal-800 hover:text-brass-600 py-2 border-b border-sandstone-200/50"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-taupe-400" />
                  </Link>
                ))}

                <Link
                  to="/shop"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm uppercase tracking-widest font-semibold text-brass-700 py-2 pt-3"
                >
                  <span>Shop All Products</span>
                  <ChevronRight className="w-4 h-4 text-brass-700" />
                </Link>
              </nav>
            </div>

            {/* Drawer Footer info */}
            <div className="p-6 border-t border-sandstone-200 bg-sandstone-50/50">
              <div className="space-y-2 text-xs uppercase tracking-wider text-taupe-500">
                <Link
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block hover:text-charcoal py-1"
                >
                  About Al Qasim
                </Link>
                <Link
                  to="/size-guide"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block hover:text-charcoal py-1"
                >
                  Size Guide
                </Link>
                <Link
                  to="/delivery-returns"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block hover:text-charcoal py-1"
                >
                  Delivery & Returns
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block hover:text-charcoal py-1"
                >
                  Customer Care
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
