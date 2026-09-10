import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const ExploreCollection: React.FC = () => {
  const pillars = [
    {
      title: 'Everyday Wear',
      tag: 'everyday-wear',
      description: 'Breathable pima cottons, textured slub kurtas, and relaxed shalwars designed for daily living.',
      link: '/collections/all?tag=everyday-wear',
      image: '/images/products/classic-ivory-shalwar-kameez.jpg',
    },
    {
      title: 'Occasion Wear',
      tag: 'occasion-wear',
      description: 'Hand-finished raw silk waistcoats and formal suits for festive gatherings and milestone celebrations.',
      link: '/collections/all?tag=occasion-wear',
      image: '/images/products/charcoal-tailored-waistcoat.jpg',
    },
    {
      title: 'Unstitched Fabric',
      tag: 'unstitched',
      description: '4.5m presentation-boxed fabric bolts of Egyptian Giza, Irish linen, and heirloom Karandi.',
      link: '/collections/unstitched',
      image: '/images/products/giza-cotton-unstitched.jpg',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-sandstone-200">
      <div className="text-center max-w-xl mx-auto mb-14">
        <p className="text-xs uppercase tracking-ultra text-brass-600 font-semibold mb-2">
          Curated Moods
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-charcoal-900 font-normal">
          Explore by Occasion
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {pillars.map((pillar) => (
          <Link
            key={pillar.title}
            to={pillar.link}
            className="group relative overflow-hidden bg-sandstone-50 border border-sandstone-200/80 p-8 flex flex-col justify-between transition-all duration-300 hover:border-charcoal/40 hover:shadow-subtle"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-widest text-brass-600 font-semibold">
                  Al Qasim Edit
                </span>
                <span className="p-2 rounded-full bg-white text-charcoal-700 group-hover:bg-charcoal group-hover:text-ivory transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>

              <h3 className="font-serif text-2xl text-charcoal-900 font-normal mb-3 group-hover:text-brass-600 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-taupe-500 font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-sandstone-200 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-charcoal-800">
              <span>View Selection</span>
              <span className="w-6 h-[1px] bg-charcoal-800 group-hover:w-10 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
