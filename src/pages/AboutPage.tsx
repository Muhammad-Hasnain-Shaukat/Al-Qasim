import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-16">
        <p className="text-xs uppercase tracking-ultra text-brass-600 font-semibold mb-3">
          The House of Al Qasim
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl text-charcoal-900 font-normal leading-tight">
          Rooted in tradition.<br />
          <span className="italic font-light text-brass-700">Made for today.</span>
        </h1>
        <div className="w-12 h-[1px] bg-brass-400 mx-auto mt-6" />
      </div>

      {/* Atmospheric Image */}
      <div className="aspect-[16/9] bg-sandstone-100 overflow-hidden mb-12 border border-sandstone-200">
        <img
          src="/images/editorial/editorial-campaign.jpg"
          alt="Al Qasim Courtyard Heritage"
          className="w-full h-full object-cover object-[center_35%]"
        />
      </div>

      {/* Story Sections */}
      <div className="space-y-10 text-sm sm:text-base text-charcoal-700 font-light leading-relaxed">
        <section>
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-normal mb-4">
            A Return to Quiet Elegance
          </h2>
          <p className="mb-4">
            Al Qasim was founded on a simple conviction: the traditional menswear of Pakistan possesses an enduring nobility that requires no exaggeration. In an era often dominated by fleeting fast fashion and excessive ornamentation, we look to the dignified restraint of historic courtyard architecture, crisp pima cottons, and masterfully tailored silhouettes.
          </p>
          <p>
            Our garments are designed for the gentleman who seeks refined comfort during morning meetings, unhurried afternoon gatherings, and luminous celebratory evenings.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-y border-sandstone-200">
          <div>
            <h3 className="font-serif text-xl text-charcoal-900 font-normal mb-2">
              Proportion & Balance
            </h3>
            <p className="text-xs sm:text-sm text-taupe-500 font-light leading-relaxed">
              Every garment starts with geometric discipline: collar height measured to stay crisp and upright, chest plackets calibrated with concealed fastenings, and traditional shalwars that drape with natural grace.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl text-charcoal-900 font-normal mb-2">
              Cloth & Texture
            </h3>
            <p className="text-xs sm:text-sm text-taupe-500 font-light leading-relaxed">
              We curate long-staple Egyptian Giza cottons, breathable slub weaves, and raw silk Jamawar. Fabric selections are driven by breathability in regional climates and tactile luxury.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-normal mb-4">
            The Bespoke Tradition
          </h2>
          <p className="mb-6">
            Beyond our ready-to-wear shalwar kameez, kurtas, and waistcoats, Al Qasim honors the subcontinent’s deep bespoke tailoring culture. Our unstitched collection provides 4.5-meter cuts accompanied by genuine mother-of-pearl buttons, branded collar stays, and artisan woven labels for your family master tailor.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-charcoal-900 hover:text-brass-700 border-b border-charcoal-900 pb-1"
          >
            <span>Explore the Current Collection</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>
      </div>
    </div>
  );
};
