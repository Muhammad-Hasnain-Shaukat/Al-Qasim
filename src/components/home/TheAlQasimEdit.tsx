import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Plus, ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { formatPrice } from '../../utils/format';
import { useWishlist } from '../../context/WishlistContext';
import { QuickViewModal } from '../modals/QuickViewModal';
import { Product } from '../../types';

interface PageMetadata {
  label: string;
  watermark: string;
  motto: string[];
  col2Detail: {
    image: string;
    alt: string;
    line1: string;
    line2: string;
  };
  col3Detail: {
    image: string;
    alt: string;
    label: string;
  };
}

const PAGE_METADATA: Record<number, PageMetadata> = {
  1: {
    label: '01 — EVERYDAY COLLECTION',
    watermark: '01',
    motto: ['TRADITION', 'LIVES', 'BEAUTIFULLY', 'TODAY'],
    col2Detail: {
      image: '/images/products/editorial-fabric-detail.webp',
      alt: 'Soft cotton fabric close-up',
      line1: 'Soft cotton',
      line2: 'Everyday ease',
    },
    col3Detail: {
      image: '/images/products/editorial-closer-look.webp',
      alt: 'Al Qasim Est. 2018 label and button detail',
      label: 'A closer look',
    },
  },
  2: {
    label: '02 — HERITAGE & OCCASION',
    watermark: '02',
    motto: ['METICULOUS', 'CRAFT', 'ENDURING', 'ELEGANCE'],
    col2Detail: {
      image: '/images/products/rust-heritage-kurta-detail.webp',
      alt: 'Terracotta embroidery needlework detail',
      line1: 'Cotton-linen blend',
      line2: 'Heritage needlework',
    },
    col3Detail: {
      image: '/images/products/pearl-occasion-waistcoat-detail.webp',
      alt: 'Pearl occasion jacquard weave and covered buttons',
      label: 'Jacquard weave & covered buttons',
    },
  },
  3: {
    label: '03 — EVENING & SIGNATURE',
    watermark: '03',
    motto: ['REFINED', 'CUTS', 'TIMELESS', 'PURPOSE'],
    col2Detail: {
      image: '/images/products/onyx-evening-kurta-detail.webp',
      alt: 'Onyx fine tonal embroidery close-up',
      line1: 'Breathable blend',
      line2: 'Tonal needlework',
    },
    col3Detail: {
      image: '/images/products/mocha-tailored-waistcoat-detail.webp',
      alt: 'Mocha tailored suiting and welt pockets',
      label: 'Sartorial V-neck & welt craft',
    },
  },
};

export const TheAlQasimEdit: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'shalwar-kameez' | 'kurtas' | 'waistcoats'>('all');
  const [currentPage, setCurrentPage] = useState<1 | 2 | 3>(1);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const { isInWishlist, toggleWishlist } = useWishlist();

  // Products to display based on active tab and page
  const getDisplayProducts = (): [Product | undefined, Product | undefined, Product | undefined] => {
    if (activeCategory === 'all') {
      if (currentPage === 1) {
        return [
          PRODUCTS.find((p) => p.slug === 'the-ivory-essential') || PRODUCTS[0],
          PRODUCTS.find((p) => p.slug === 'sage-everyday-kurta') || PRODUCTS[1],
          PRODUCTS.find((p) => p.slug === 'the-charcoal-waistcoat') || PRODUCTS[2],
        ];
      }
      if (currentPage === 2) {
        return [
          PRODUCTS.find((p) => p.slug === 'sandstone-classic') || PRODUCTS[3],
          PRODUCTS.find((p) => p.slug === 'rust-heritage-kurta') || PRODUCTS[5],
          PRODUCTS.find((p) => p.slug === 'pearl-occasion-waistcoat') || PRODUCTS[6],
        ];
      }
      return [
        PRODUCTS.find((p) => p.slug === 'midnight-signature') || PRODUCTS[4],
        PRODUCTS.find((p) => p.slug === 'onyx-evening-kurta') || PRODUCTS[8],
        PRODUCTS.find((p) => p.slug === 'mocha-tailored-waistcoat') || PRODUCTS[9],
      ];
    }

    if (activeCategory === 'shalwar-kameez') {
      if (currentPage === 1) {
        return [
          PRODUCTS.find((p) => p.slug === 'the-ivory-essential') || PRODUCTS[0],
          PRODUCTS.find((p) => p.slug === 'sandstone-classic') || PRODUCTS[3],
          PRODUCTS.find((p) => p.slug === 'midnight-signature') || PRODUCTS[4],
        ];
      }
      if (currentPage === 2) {
        return [
          PRODUCTS.find((p) => p.slug === 'sandstone-classic') || PRODUCTS[3],
          PRODUCTS.find((p) => p.slug === 'olive-everyday-set') || PRODUCTS[7],
          PRODUCTS.find((p) => p.slug === 'the-ivory-essential') || PRODUCTS[0],
        ];
      }
      return [
        PRODUCTS.find((p) => p.slug === 'midnight-signature') || PRODUCTS[4],
        PRODUCTS.find((p) => p.slug === 'olive-everyday-set') || PRODUCTS[7],
        PRODUCTS.find((p) => p.slug === 'the-ivory-essential') || PRODUCTS[0],
      ];
    }

    if (activeCategory === 'kurtas') {
      if (currentPage === 1) {
        return [
          PRODUCTS.find((p) => p.slug === 'sage-everyday-kurta') || PRODUCTS[1],
          PRODUCTS.find((p) => p.slug === 'rust-heritage-kurta') || PRODUCTS[5],
          PRODUCTS.find((p) => p.slug === 'onyx-evening-kurta') || PRODUCTS[8],
        ];
      }
      if (currentPage === 2) {
        return [
          PRODUCTS.find((p) => p.slug === 'rust-heritage-kurta') || PRODUCTS[5],
          PRODUCTS.find((p) => p.slug === 'onyx-evening-kurta') || PRODUCTS[8],
          PRODUCTS.find((p) => p.slug === 'sage-everyday-kurta') || PRODUCTS[1],
        ];
      }
      return [
        PRODUCTS.find((p) => p.slug === 'onyx-evening-kurta') || PRODUCTS[8],
        PRODUCTS.find((p) => p.slug === 'sage-everyday-kurta') || PRODUCTS[1],
        PRODUCTS.find((p) => p.slug === 'rust-heritage-kurta') || PRODUCTS[5],
      ];
    }

    if (activeCategory === 'waistcoats') {
      if (currentPage === 1) {
        return [
          PRODUCTS.find((p) => p.slug === 'the-charcoal-waistcoat') || PRODUCTS[2],
          PRODUCTS.find((p) => p.slug === 'pearl-occasion-waistcoat') || PRODUCTS[6],
          PRODUCTS.find((p) => p.slug === 'mocha-tailored-waistcoat') || PRODUCTS[9],
        ];
      }
      if (currentPage === 2) {
        return [
          PRODUCTS.find((p) => p.slug === 'pearl-occasion-waistcoat') || PRODUCTS[6],
          PRODUCTS.find((p) => p.slug === 'mocha-tailored-waistcoat') || PRODUCTS[9],
          PRODUCTS.find((p) => p.slug === 'the-charcoal-waistcoat') || PRODUCTS[2],
        ];
      }
      return [
        PRODUCTS.find((p) => p.slug === 'mocha-tailored-waistcoat') || PRODUCTS[9],
        PRODUCTS.find((p) => p.slug === 'the-charcoal-waistcoat') || PRODUCTS[2],
        PRODUCTS.find((p) => p.slug === 'pearl-occasion-waistcoat') || PRODUCTS[6],
      ];
    }

    return [PRODUCTS[0], PRODUCTS[1], PRODUCTS[2]];
  };

  const currentMeta = PAGE_METADATA[currentPage];
  const [card1, card2, card3] = getDisplayProducts();

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => (prev - 1) as 1 | 2 | 3);
    }
  };

  const handleNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage((prev) => (prev + 1) as 1 | 2 | 3);
    }
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto bg-ivory text-charcoal-900 select-none overflow-hidden">
      {/* 1. Top Section Header with Title & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-sandstone-200/80 pb-6 mb-12 sm:mb-16">
        <div>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-taupe-500 font-medium mb-2 transition-all duration-300">
            {currentMeta.label}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-950 font-normal tracking-tight">
            The Al Qasim Edit
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-4 sm:gap-8 mt-6 md:mt-0 text-xs sm:text-sm tracking-wider uppercase overflow-x-auto max-w-full pb-1 scrollbar-none whitespace-nowrap">
          <button
            onClick={() => {
              setActiveCategory('all');
              setCurrentPage(1);
            }}
            className={`transition-colors relative pb-1 ${
              activeCategory === 'all'
                ? 'text-charcoal-950 font-semibold border-b-2 border-charcoal-950'
                : 'text-taupe-400 hover:text-charcoal-800'
            }`}
          >
            All
          </button>
          <button
            onClick={() => {
              setActiveCategory('shalwar-kameez');
              setCurrentPage(1);
            }}
            className={`transition-colors relative pb-1 ${
              activeCategory === 'shalwar-kameez'
                ? 'text-charcoal-950 font-semibold border-b-2 border-charcoal-950'
                : 'text-taupe-400 hover:text-charcoal-800'
            }`}
          >
            Shalwar Kameez
          </button>
          <button
            onClick={() => {
              setActiveCategory('kurtas');
              setCurrentPage(1);
            }}
            className={`transition-colors relative pb-1 ${
              activeCategory === 'kurtas'
                ? 'text-charcoal-950 font-semibold border-b-2 border-charcoal-950'
                : 'text-taupe-400 hover:text-charcoal-800'
            }`}
          >
            Kurtas
          </button>
          <button
            onClick={() => {
              setActiveCategory('waistcoats');
              setCurrentPage(1);
            }}
            className={`transition-colors relative pb-1 ${
              activeCategory === 'waistcoats'
                ? 'text-charcoal-950 font-semibold border-b-2 border-charcoal-950'
                : 'text-taupe-400 hover:text-charcoal-800'
            }`}
          >
            Waistcoats
          </button>
        </div>
      </div>

      {/* 2. Main Editorial Showcase: Left numeral + 3 Columns */}
      <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left Decorative Watermark & Side Motto */}
        <div className="hidden xl:flex flex-col items-start w-20 flex-shrink-0 pt-4">
          <span
            className="font-serif text-7xl font-extralight text-transparent select-none leading-none transition-all duration-300"
            style={{
              WebkitTextStroke: '1px #C8BEAF',
            }}
          >
            {currentMeta.watermark}
          </span>
          <div className="w-[1px] h-16 bg-sandstone-300 my-5 ml-2" />
          <div className="text-[9px] tracking-[0.25em] text-taupe-400 uppercase leading-relaxed font-light ml-1">
            {currentMeta.motto.map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                {idx < currentMeta.motto.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* 3 Columns Grid */}
        <div
          key={`${activeCategory}-${currentPage}`}
          className="flex-1 min-w-0 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 xl:gap-12 transition-opacity duration-300"
        >
          {/* COLUMN 1 */}
          {card1 && (
            <div className="flex flex-col text-left group">
              <div className="relative aspect-[4/5] bg-sandstone-100 overflow-hidden mb-4 rounded-xs shadow-xs">
                <Link to={`/product/${card1.slug}`} className="block w-full h-full">
                  <img
                    src={card1.images[0]}
                    alt={card1.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </Link>

                {/* Floating Heart Wishlist */}
                <button
                  onClick={() => toggleWishlist(card1.id)}
                  aria-label="Save to wishlist"
                  className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/80 hover:bg-white backdrop-blur-xs flex items-center justify-center text-charcoal-800 transition-all shadow-xs"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isInWishlist(card1.id) ? 'fill-charcoal-900 text-charcoal-900' : 'text-charcoal-700'
                    }`}
                  />
                </button>

                {/* Floating Quick View Plus Button */}
                <button
                  onClick={() => setQuickViewProduct(card1)}
                  aria-label="Quick View"
                  className="absolute bottom-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-xs transition-transform hover:scale-110 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Product Info */}
              <div className="flex items-start justify-between">
                <div>
                  <Link
                    to={`/product/${card1.slug}`}
                    className="font-serif text-xl text-charcoal-950 font-normal hover:text-brass-700 transition-colors leading-snug block"
                  >
                    {card1.name}
                  </Link>
                  <p className="text-xs text-taupe-500 font-light mt-0.5">
                    {card1.includes || card1.fabric}
                  </p>
                  <p className="text-sm font-medium text-charcoal-900 mt-1.5">
                    {formatPrice(card1.price)}
                  </p>
                </div>

                {/* Color Swatches */}
                <div className="flex items-center gap-1.5 pt-1.5">
                  {card1.colors.slice(0, 3).map((c) => (
                    <span
                      key={c.name}
                      title={c.name}
                      className="w-3.5 h-3.5 rounded-full border border-sandstone-300 inline-block"
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              <Link
                to={`/product/${card1.slug}`}
                className="mt-3 inline-flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium text-charcoal-800 hover:text-brass-700 border-b border-charcoal-300 hover:border-charcoal-900 pb-0.5 w-fit transition-colors"
              >
                <span>View piece</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          {/* COLUMN 2: With Circular Macro Accent */}
          {card2 && (
            <div className="flex flex-col text-left group">
              {/* Circular Fabric Macro Accent */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-sandstone-300/80 shadow-xs flex-shrink-0">
                  <img
                    src={currentMeta.col2Detail.image}
                    alt={currentMeta.col2Detail.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 sm:w-8 h-[1px] bg-sandstone-300" />
                  <p className="text-[11px] sm:text-xs text-taupe-600 font-light leading-snug">
                    {currentMeta.col2Detail.line1} /<br />
                    {currentMeta.col2Detail.line2}
                  </p>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative aspect-[4/5] bg-sandstone-100 overflow-hidden mb-4 rounded-xs shadow-xs">
                <Link to={`/product/${card2.slug}`} className="block w-full h-full">
                  <img
                    src={card2.images[0]}
                    alt={card2.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </Link>

                <button
                  onClick={() => toggleWishlist(card2.id)}
                  aria-label="Save to wishlist"
                  className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/80 hover:bg-white backdrop-blur-xs flex items-center justify-center text-charcoal-800 transition-all shadow-xs"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isInWishlist(card2.id) ? 'fill-charcoal-900 text-charcoal-900' : 'text-charcoal-700'
                    }`}
                  />
                </button>

                <button
                  onClick={() => setQuickViewProduct(card2)}
                  aria-label="Quick View"
                  className="absolute bottom-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-xs transition-transform hover:scale-110 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Product Info */}
              <div className="flex items-start justify-between">
                <div>
                  <Link
                    to={`/product/${card2.slug}`}
                    className="font-serif text-xl text-charcoal-950 font-normal hover:text-brass-700 transition-colors leading-snug block"
                  >
                    {card2.name}
                  </Link>
                  <p className="text-xs text-taupe-500 font-light mt-0.5">
                    {card2.includes || card2.fabric}
                  </p>
                  <p className="text-sm font-medium text-charcoal-900 mt-1.5">
                    {formatPrice(card2.price)}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 pt-1.5">
                  {card2.colors.slice(0, 4).map((c) => (
                    <span
                      key={c.name}
                      title={c.name}
                      className="w-3.5 h-3.5 rounded-full border border-sandstone-300 inline-block"
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              <Link
                to={`/product/${card2.slug}`}
                className="mt-3 inline-flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium text-charcoal-800 hover:text-brass-700 border-b border-charcoal-300 hover:border-charcoal-900 pb-0.5 w-fit transition-colors"
              >
                <span>View piece</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}

          {/* COLUMN 3: Frame + Macro Closer Look */}
          {card3 && (
            <div className="flex flex-col text-left group">
              {/* Image Container (rounded-xs on mobile to prevent cutting garment, arched on desktop) */}
              <div className="relative aspect-[4/5] bg-sandstone-100 overflow-hidden mb-4 rounded-xs sm:rounded-t-full shadow-xs">
                <Link to={`/product/${card3.slug}`} className="block w-full h-full">
                  <img
                    src={card3.images[0]}
                    alt={card3.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </Link>

                <button
                  onClick={() => toggleWishlist(card3.id)}
                  aria-label="Save to wishlist"
                  className="absolute top-3.5 right-3.5 sm:top-12 sm:right-6 w-8 h-8 rounded-full bg-white/80 hover:bg-white backdrop-blur-xs flex items-center justify-center text-charcoal-800 transition-all shadow-xs"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isInWishlist(card3.id) ? 'fill-charcoal-900 text-charcoal-900' : 'text-charcoal-700'
                    }`}
                  />
                </button>

                <button
                  onClick={() => setQuickViewProduct(card3)}
                  aria-label="Quick View"
                  className="absolute bottom-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-xs transition-transform hover:scale-110 shadow-xs"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Product Info */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Link
                    to={`/product/${card3.slug}`}
                    className="font-serif text-xl text-charcoal-950 font-normal hover:text-brass-700 transition-colors leading-snug block"
                  >
                    {card3.name}
                  </Link>
                  <p className="text-xs text-taupe-500 font-light mt-0.5">
                    {card3.includes || card3.fabric}
                  </p>
                  <p className="text-sm font-medium text-charcoal-900 mt-1.5">
                    {formatPrice(card3.price)}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 pt-1.5">
                  {card3.colors.slice(0, 3).map((c) => (
                    <span
                      key={c.name}
                      title={c.name}
                      className="w-3.5 h-3.5 rounded-full border border-sandstone-300 inline-block"
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                </div>
              </div>

              <Link
                to={`/product/${card3.slug}`}
                className="inline-flex items-center gap-1.5 text-xs tracking-wider uppercase font-medium text-charcoal-800 hover:text-brass-700 border-b border-charcoal-300 hover:border-charcoal-900 pb-0.5 w-fit transition-colors mb-6"
              >
                <span>View piece</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              {/* Macro Closer Look Card */}
              <div className="mt-auto pt-2">
                <div className="border border-sandstone-300/90 rounded-xs overflow-hidden shadow-xs mb-2">
                  <img
                    src={currentMeta.col3Detail.image}
                    alt={currentMeta.col3Detail.alt}
                    className="w-full h-24 sm:h-28 object-cover object-center"
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-taupe-500 tracking-wider">
                  <span className="font-light">{currentMeta.col3Detail.label}</span>
                  <div className="flex-1 mx-3 h-[1px] bg-sandstone-300" />
                  <span>&rarr;</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 3. Bottom Bar: Index & Pagination Arrows */}
      <div className="flex items-center justify-between border-t border-sandstone-200/80 pt-6 mt-16 text-xs tracking-widest uppercase text-taupe-500">
        <span className="font-mono text-charcoal-700">
          0{currentPage} / 03
        </span>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-3">
          {/* Back Arrow */}
          <button
            type="button"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className={`p-2 rounded-full transition-all duration-200 flex items-center justify-center ${
              currentPage === 1
                ? 'opacity-20 cursor-not-allowed text-taupe-400'
                : 'text-charcoal-800 hover:text-charcoal-950 hover:bg-sandstone-200/60 hover:-translate-x-0.5 active:scale-95 cursor-pointer'
            }`}
          >
            <ArrowLeft className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Forward Arrow */}
          <button
            type="button"
            onClick={handleNextPage}
            disabled={currentPage === 3}
            aria-label="Next page"
            className={`p-2 rounded-full transition-all duration-200 flex items-center justify-center ${
              currentPage === 3
                ? 'opacity-20 cursor-not-allowed text-taupe-400'
                : 'text-charcoal-800 hover:text-charcoal-950 hover:bg-sandstone-200/60 hover:translate-x-0.5 active:scale-95 cursor-pointer'
            }`}
          >
            <ArrowRight className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </section>
  );
};
