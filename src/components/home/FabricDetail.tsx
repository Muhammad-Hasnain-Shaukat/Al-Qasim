import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const FabricDetail: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Image Composition */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-4 sm:space-y-6">
            <div className="aspect-[3/4] overflow-hidden bg-sandstone-100 border border-sandstone-200">
              <img
                src="/images/editorial/craft-pocket-detail.jpg"
                alt="Al Qasim Waistcoat Detail"
                loading="lazy"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-4 bg-sandstone-50 border border-sandstone-200/80">
              <p className="text-[11px] uppercase tracking-widest text-brass-700 font-semibold mb-1">
                Pocket & Crest
              </p>
              <p className="text-xs text-taupe-500 font-light">
                Hand-finished welts and the discreet Al Qasim insignia.
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
            <div className="aspect-[3/4] overflow-hidden bg-sandstone-100 border border-sandstone-200">
              <img
                src="/images/products/classic-ivory-shalwar-kameez-detail.jpg"
                alt="Collar and Placket Stitching"
                loading="lazy"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-4 bg-sandstone-50 border border-sandstone-200/80">
              <p className="text-[11px] uppercase tracking-widest text-brass-700 font-semibold mb-1">
                Band Collar
              </p>
              <p className="text-xs text-taupe-500 font-light">
                Calibrated collar height structured for upright wear.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Copy */}
        <div className="lg:pl-6 text-left">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-brass-500" />
            <span className="text-xs uppercase tracking-ultra text-brass-600 font-semibold">
              The Craftsmanship
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-charcoal-900 font-normal leading-tight mb-6">
            Considered in every detail.
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-charcoal-700 font-light leading-relaxed mb-8">
            <p>
              At Al Qasim, garment creation begins with proportional balance. Every curve of our band collars, every reinforced stitch along the side vent, and the weight of each fabric bolt is chosen with intention.
            </p>
            <p>
              From structured tropical wools that lend clean drape to waistcoats, to high-twist Egyptian Giza cottons that remain breathable in midday heat, our focus remains on quiet tactility and authentic subcontinent menswear styling.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 py-6 border-y border-sandstone-200 mb-8">
            <div>
              <span className="block font-serif text-2xl sm:text-3xl text-charcoal-900 mb-1">
                100%
              </span>
              <span className="text-xs uppercase tracking-widest text-taupe-500">
                Natural Staple Cottons & Wools
              </span>
            </div>
            <div>
              <span className="block font-serif text-2xl sm:text-3xl text-charcoal-900 mb-1">
                4.5m
              </span>
              <span className="text-xs uppercase tracking-widest text-taupe-500">
                Standard Unstitched Suit Cuts
              </span>
            </div>
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal-900 hover:text-brass-600 border-b border-charcoal-900 pb-1 transition-colors"
          >
            <span>Learn More About Al Qasim</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
