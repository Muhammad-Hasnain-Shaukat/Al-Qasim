import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { Filter, X, ChevronDown, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { PRODUCTS, CATEGORIES_DATA } from '../data/products';
import { ProductCard } from '../components/product/ProductCard';
import { QuickViewModal } from '../components/modals/QuickViewModal';
import { Product } from '../types';

export const CollectionPage: React.FC = () => {
  const { category: routeCategory } = useParams<{ category?: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Read URL Params
  const activeCategory = routeCategory || searchParams.get('category') || 'all';
  const selectedTag = searchParams.get('tag');
  const selectedSize = searchParams.get('size');
  const selectedColor = searchParams.get('color');
  const selectedFabric = searchParams.get('fabric');
  const selectedSort = searchParams.get('sort') || 'featured';
  const selectedPriceMax = searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : null;

  // Metadata for current category
  const categoryMeta = useMemo(() => {
    if (activeCategory === 'all') {
      if (selectedTag === 'new-in') {
        return {
          title: 'New Arrivals',
          description: 'The latest expressions of contemporary Pakistani menswear, tailored with quiet precision.',
        };
      }
      if (selectedTag === 'everyday-wear') {
        return {
          title: 'Everyday Collection',
          description: 'Effortless cottons and comfortable silhouettes crafted for daily distinction.',
        };
      }
      if (selectedTag === 'occasion-wear') {
        return {
          title: 'Occasion & Festive',
          description: 'Rich raw silks and structured waistcoats designed for memorable gatherings.',
        };
      }
      return {
        title: 'All Menswear',
        description: 'Discover the complete Al Qasim collection of shalwar kameez, kurtas, waistcoats, and fine unstitched fabrics.',
      };
    }
    const found = CATEGORIES_DATA.find((c) => c.slug === activeCategory);
    return {
      title: found?.title || 'Collection',
      description: found?.description || '',
    };
  }, [activeCategory, selectedTag]);

  // Derived filter options from PRODUCTS
  const availableSizes = ['S', 'M', 'L', 'XL', '4.5 Meters (Standard Suit)', '38 (S)', '40 (M)', '42 (L)', '44 (XL)'];
  const availableColors = ['Ivory', 'Charcoal', 'Sandstone', 'Olive', 'Cream', 'Slate', 'Taupe'];
  const availableFabrics = ['Egyptian Giza Cotton', 'Tropical Wool', 'Raw Silk', 'Slub Cotton', 'Karandi', 'Irish Linen'];

  // Helper to update search params
  const updateFilter = (key: string, value: string | null) => {
    const nextParams = new URLSearchParams(searchParams);
    if (value === null || value === '' || nextParams.get(key) === value) {
      nextParams.delete(key);
    } else {
      nextParams.set(key, value);
    }
    setSearchParams(nextParams);
  };

  const clearAllFilters = () => {
    const nextParams = new URLSearchParams();
    if (selectedSort !== 'featured') {
      nextParams.set('sort', selectedSort);
    }
    setSearchParams(nextParams);
  };

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Category filter
      if (activeCategory !== 'all' && p.category !== activeCategory) {
        return false;
      }
      // Tag filter
      if (selectedTag && !p.tags.includes(selectedTag as any)) {
        return false;
      }
      // Size filter
      if (selectedSize && !p.sizes.includes(selectedSize)) {
        return false;
      }
      // Color filter
      if (selectedColor) {
        const hasColor = p.colors.some((c) =>
          c.name.toLowerCase().includes(selectedColor.toLowerCase())
        );
        if (!hasColor) return false;
      }
      // Fabric filter
      if (selectedFabric && !p.fabric.toLowerCase().includes(selectedFabric.toLowerCase())) {
        return false;
      }
      // Price Max filter
      if (selectedPriceMax && p.price > selectedPriceMax) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (selectedSort === 'price-asc') return a.price - b.price;
      if (selectedSort === 'price-desc') return b.price - a.price;
      if (selectedSort === 'newest') return (b.tags.includes('new-in') ? 1 : 0) - (a.tags.includes('new-in') ? 1 : 0);
      return 0; // 'featured' preserves catalog order
    });
  }, [activeCategory, selectedTag, selectedSize, selectedColor, selectedFabric, selectedPriceMax, selectedSort]);

  // Active filter count
  const activeFiltersCount = [
    selectedSize,
    selectedColor,
    selectedFabric,
    selectedTag,
    selectedPriceMax,
  ].filter(Boolean).length;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCategory]);

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-taupe-400 mb-6">
        <Link to="/" className="hover:text-charcoal transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-charcoal transition-colors">
          Shop
        </Link>
        {activeCategory !== 'all' && (
          <>
            <span>/</span>
            <span className="text-charcoal font-medium">
              {CATEGORIES_DATA.find((c) => c.slug === activeCategory)?.name || activeCategory}
            </span>
          </>
        )}
      </nav>

      {/* Collection Header */}
      <div className="max-w-2xl mb-10 text-left">
        <h1 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-normal leading-tight mb-3">
          {categoryMeta.title}
        </h1>
        <p className="text-xs sm:text-sm text-taupe-500 font-light leading-relaxed">
          {categoryMeta.description}
        </p>
      </div>

      {/* Control Bar: Product Count, Mobile Filter Trigger, Sort Select */}
      <div className="flex items-center justify-between gap-2 py-3 sm:py-4 border-y border-sandstone-300 mb-8 min-w-0">
        {/* Left: Product count & Mobile filter trigger */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0 min-w-0">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="lg:hidden inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 border border-sandstone-300 text-[11px] sm:text-xs uppercase tracking-wider text-charcoal hover:border-charcoal bg-white shrink-0"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters {activeFiltersCount > 0 ? `(${activeFiltersCount})` : ''}</span>
          </button>

          <span className="text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-taupe-500 font-medium whitespace-nowrap">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Garment' : 'Garments'}
          </span>
        </div>

        {/* Right: Sort Dropdown with custom ChevronDown icon that never clips */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span className="text-xs uppercase tracking-wider text-taupe-500 hidden sm:inline">
            Sort by:
          </span>
          <div className="relative inline-flex items-center">
            <select
              value={selectedSort}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="appearance-none bg-transparent text-[11px] sm:text-xs uppercase tracking-wider text-charcoal-800 focus:outline-none cursor-pointer py-1.5 pl-1 pr-5 sm:pr-6 font-medium"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest Arrivals</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-charcoal-600 pointer-events-none absolute right-0.5 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Active Filter Chips */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <span className="text-xs uppercase tracking-wider text-taupe-400 mr-2">
            Active:
          </span>

          {selectedSize && (
            <button
              onClick={() => updateFilter('size', null)}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-sandstone-100 text-charcoal text-xs uppercase tracking-wider border border-sandstone-300 hover:bg-sandstone-200"
            >
              <span>Size: {selectedSize}</span>
              <X className="w-3 h-3" />
            </button>
          )}

          {selectedColor && (
            <button
              onClick={() => updateFilter('color', null)}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-sandstone-100 text-charcoal text-xs uppercase tracking-wider border border-sandstone-300 hover:bg-sandstone-200"
            >
              <span>Color: {selectedColor}</span>
              <X className="w-3 h-3" />
            </button>
          )}

          {selectedFabric && (
            <button
              onClick={() => updateFilter('fabric', null)}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-sandstone-100 text-charcoal text-xs uppercase tracking-wider border border-sandstone-300 hover:bg-sandstone-200"
            >
              <span>Fabric: {selectedFabric}</span>
              <X className="w-3 h-3" />
            </button>
          )}

          {selectedPriceMax && (
            <button
              onClick={() => updateFilter('maxPrice', null)}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-sandstone-100 text-charcoal text-xs uppercase tracking-wider border border-sandstone-300 hover:bg-sandstone-200"
            >
              <span>Under PKR {selectedPriceMax.toLocaleString()}</span>
              <X className="w-3 h-3" />
            </button>
          )}

          <button
            onClick={clearAllFilters}
            className="text-xs uppercase tracking-wider text-brass-700 hover:text-brass-800 underline ml-2 font-medium"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Main Layout: Desktop Filter Sidebar + Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Desktop Filter Panel */}
        <aside className="hidden lg:block space-y-8 pr-6 border-r border-sandstone-200/80 text-left">
          
          {/* Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra text-charcoal-900 font-semibold mb-3">
              Categories
            </h4>
            <div className="space-y-2 text-xs uppercase tracking-wider">
              <Link
                to="/shop"
                className={`block py-1 transition-colors ${
                  activeCategory === 'all' && !selectedTag ? 'font-bold text-brass-600' : 'text-taupe-500 hover:text-charcoal'
                }`}
              >
                All Menswear ({PRODUCTS.length})
              </Link>
              {CATEGORIES_DATA.map((cat) => {
                const count = PRODUCTS.filter((p) => p.category === cat.slug).length;
                return (
                  <Link
                    key={cat.slug}
                    to={`/collections/${cat.slug}`}
                    className={`block py-1 transition-colors ${
                      activeCategory === cat.slug ? 'font-bold text-brass-600' : 'text-taupe-500 hover:text-charcoal'
                    }`}
                  >
                    {cat.name} ({count})
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Size Filter */}
          <div className="pt-6 border-t border-sandstone-200">
            <h4 className="text-xs uppercase tracking-ultra text-charcoal-900 font-semibold mb-3">
              Size & Fit
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => updateFilter('size', size)}
                  className={`px-2.5 py-1 text-xs uppercase tracking-wider border transition-all ${
                    selectedSize === size
                      ? 'bg-charcoal text-ivory border-charcoal'
                      : 'border-sandstone-300 text-charcoal hover:border-charcoal bg-transparent'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Filter */}
          <div className="pt-6 border-t border-sandstone-200">
            <h4 className="text-xs uppercase tracking-ultra text-charcoal-900 font-semibold mb-3">
              Color Palette
            </h4>
            <div className="space-y-1.5 text-xs">
              {availableColors.map((color) => (
                <button
                  key={color}
                  onClick={() => updateFilter('color', color)}
                  className={`w-full text-left py-1 px-2 uppercase tracking-wider flex items-center justify-between rounded-xs ${
                    selectedColor === color ? 'bg-sandstone-200 font-semibold text-charcoal' : 'text-taupe-500 hover:text-charcoal'
                  }`}
                >
                  <span>{color}</span>
                  {selectedColor === color && <span className="w-1.5 h-1.5 rounded-full bg-charcoal" />}
                </button>
              ))}
            </div>
          </div>

          {/* Fabric Filter */}
          <div className="pt-6 border-t border-sandstone-200">
            <h4 className="text-xs uppercase tracking-ultra text-charcoal-900 font-semibold mb-3">
              Craft & Fabric
            </h4>
            <div className="space-y-1.5 text-xs">
              {availableFabrics.map((fabric) => (
                <button
                  key={fabric}
                  onClick={() => updateFilter('fabric', fabric)}
                  className={`w-full text-left py-1 px-2 uppercase tracking-wider flex items-center justify-between rounded-xs ${
                    selectedFabric === fabric ? 'bg-sandstone-200 font-semibold text-charcoal' : 'text-taupe-500 hover:text-charcoal'
                  }`}
                >
                  <span>{fabric}</span>
                  {selectedFabric === fabric && <span className="w-1.5 h-1.5 rounded-full bg-charcoal" />}
                </button>
              ))}
            </div>
          </div>

          {/* Max Price Filter */}
          <div className="pt-6 border-t border-sandstone-200">
            <h4 className="text-xs uppercase tracking-ultra text-charcoal-900 font-semibold mb-3">
              Price Range
            </h4>
            <div className="space-y-1.5 text-xs uppercase tracking-wider">
              {[10000, 15000, 20000].map((max) => (
                <button
                  key={max}
                  onClick={() => updateFilter('maxPrice', selectedPriceMax === max ? null : max.toString())}
                  className={`w-full text-left py-1 px-2 flex items-center justify-between rounded-xs ${
                    selectedPriceMax === max ? 'bg-sandstone-200 font-semibold text-charcoal' : 'text-taupe-500 hover:text-charcoal'
                  }`}
                >
                  <span>Under PKR {max.toLocaleString()}</span>
                  {selectedPriceMax === max && <span className="w-1.5 h-1.5 rounded-full bg-charcoal" />}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid Area (3 Columns on Desktop, 2 on Mobile) */}
        <div className="lg:col-span-3">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(prod) => setQuickViewProduct(prod)}
                />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center border border-sandstone-300 bg-sandstone-50/50 p-8">
              <p className="font-serif text-2xl sm:text-3xl text-charcoal-800 mb-2">
                No matching garments found
              </p>
              <p className="text-xs sm:text-sm text-taupe-500 max-w-md mx-auto mb-6 font-light">
                We couldn't find any products matching your current combination of filters.
              </p>
              <button
                onClick={clearAllFilters}
                className="px-6 py-3 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-charcoal-900 transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      {/* Mobile Slide-out Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-xs"
            onClick={() => setIsMobileFilterOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-ivory-50 shadow-drawer p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-sandstone-300 mb-6">
                <h3 className="font-serif text-xl text-charcoal-900 font-medium">
                  Refine Selection
                </h3>
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="p-1 text-charcoal-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Sizes */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest text-charcoal-800 font-semibold mb-3">
                  Size
                </h4>
                <div className="flex flex-wrap gap-2">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => updateFilter('size', size)}
                      className={`px-3 py-1.5 text-xs uppercase tracking-wider border ${
                        selectedSize === size
                          ? 'bg-charcoal text-ivory border-charcoal'
                          : 'border-sandstone-300 text-charcoal'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Colors */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest text-charcoal-800 font-semibold mb-3">
                  Color
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs uppercase tracking-wider">
                  {availableColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => updateFilter('color', color)}
                      className={`p-2 border text-left ${
                        selectedColor === color
                          ? 'bg-charcoal text-ivory border-charcoal'
                          : 'border-sandstone-300 text-charcoal'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Price */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-widest text-charcoal-800 font-semibold mb-3">
                  Max Price
                </h4>
                <div className="space-y-2 text-xs uppercase tracking-wider">
                  {[10000, 15000, 20000].map((max) => (
                    <button
                      key={max}
                      onClick={() => updateFilter('maxPrice', selectedPriceMax === max ? null : max.toString())}
                      className={`w-full p-2 border text-left ${
                        selectedPriceMax === max
                          ? 'bg-charcoal text-ivory border-charcoal'
                          : 'border-sandstone-300 text-charcoal'
                      }`}
                    >
                      Under PKR {max.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-sandstone-300 space-y-2">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold"
              >
                Apply Filters ({filteredProducts.length})
              </button>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="w-full py-2 text-xs uppercase tracking-wider text-charcoal-700 border border-sandstone-300"
                >
                  Clear All
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
