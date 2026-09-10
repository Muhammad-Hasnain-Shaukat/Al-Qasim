import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const EditorialCampaign: React.FC = () => {
  return (
    <section className="relative my-12 sm:my-20 overflow-hidden bg-charcoal-900 text-ivory">
      {/* Background Editorial Image */}
      <div className="relative w-full min-h-[480px] md:min-h-[580px] flex items-center justify-center py-20 px-6 sm:px-12">
        <img
          src="/images/editorial/editorial-campaign.jpg"
          alt="Al Qasim Editorial Campaign"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/40 to-charcoal-950/70" />

        {/* Central Typographic Composition */}
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-brass-400" />
            <span className="text-xs uppercase tracking-ultra text-brass-300 font-semibold">
              The Campaign
            </span>
            <span className="w-8 h-[1px] bg-brass-400" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.12] mb-6 text-ivory-50 tracking-tight">
            Quiet confidence.<br />
            <span className="italic text-brass-200 font-light">Distinctly Al Qasim.</span>
          </h2>

          <p className="text-xs sm:text-sm text-ivory-200/80 font-light max-w-md mx-auto mb-8 leading-relaxed">
            Conceived for the modern gentleman who values ancestral silhouettes, dignified presence, and the unspoken luxury of pure craftsmanship.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-8 py-4 bg-ivory text-charcoal-900 text-xs font-semibold uppercase tracking-widest hover:bg-brass-100 transition-all duration-300 shadow-elevated rounded-sm group"
          >
            <span>Discover the Collection</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
