import React, { useEffect } from 'react';
import { Sparkles, Sun, Droplets, Wind } from 'lucide-react';

export const CareGuidePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
      <div className="mb-12 border-b border-sandstone-300 pb-6">
        <p className="text-xs uppercase tracking-ultra text-brass-600 font-semibold mb-2">
          Longevity & Preservation
        </p>
        <h1 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-normal">
          Fabric & Garment Care
        </h1>
        <p className="text-xs sm:text-sm text-taupe-500 font-light mt-2 max-w-xl">
          Expert recommendations to maintain the luster, structure, and hand-feel of your Al Qasim garments over years of wear.
        </p>
      </div>

      <div className="space-y-12">
        {/* Egyptian Giza Cotton & Pima */}
        <section className="p-6 bg-sandstone-50 border border-sandstone-200">
          <div className="flex items-center gap-2 mb-3">
            <Droplets className="w-5 h-5 text-brass-600" />
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal">
              Egyptian Giza & Long-Staple Cottons
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed mb-4">
            Our Shalwar Kameez and Kurtas are tailored from extra-long staple yarns that soften with each wash while preserving tensile strength.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-taupe-500 font-light">
            <li>Wash in cool water (30°C max) using mild liquid detergents free from optical brighteners.</li>
            <li>Do not wring vigorously; reshape collar and cuffs while damp.</li>
            <li>Line dry in the shade to prevent ivory or color fading from intense UV exposure.</li>
            <li>Press with a warm steam iron while the fabric remains slightly damp.</li>
          </ul>
        </section>

        {/* Structured Waistcoats & Tropical Wool */}
        <section className="p-6 bg-sandstone-50 border border-sandstone-200">
          <div className="flex items-center gap-2 mb-3">
            <Wind className="w-5 h-5 text-brass-600" />
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal">
              Structured Waistcoats & Wool Blends
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed mb-4">
            Waistcoats contain calibrated canvas interlinings and chest structure that must be handled with sartorial care.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-taupe-500 font-light">
            <li>Professional dry clean only. Never machine wash or soak waistcoats.</li>
            <li>Between wearings, brush down gently with a soft horsehair clothes brush.</li>
            <li>Store on a wide contoured wooden hanger inside a breathable cotton garment cover.</li>
            <li>Use a handheld vertical steamer rather than a heavy direct iron on wool surfaces.</li>
          </ul>
        </section>

        {/* Raw Silk & Karandi */}
        <section className="p-6 bg-sandstone-50 border border-sandstone-200">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-brass-600" />
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal">
              Raw Silk, Jamawar & Karandi Handlooms
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-charcoal-700 font-light leading-relaxed mb-4">
            Hand-guided zari and unspun raw silk fibers require gentle preservation to avoid fiber rupture.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-taupe-500 font-light">
            <li>Dry clean recommended for all zari-embellished or raw silk garments.</li>
            <li>When pressing, always use a clean damp pressing cloth and low silk heat.</li>
            <li>Do not spray perfume or attar directly onto metallic zari threads.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
