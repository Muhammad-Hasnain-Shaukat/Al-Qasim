import React, { useEffect } from 'react';
import { Truck, RotateCcw, AlertCircle } from 'lucide-react';

export const DeliveryReturnsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
      <div className="mb-12 border-b border-sandstone-300 pb-6">
        <p className="text-xs uppercase tracking-ultra text-brass-600 font-semibold mb-2">
          Store Operations & Policies
        </p>
        <h1 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-normal">
          Delivery & Exchange Policy
        </h1>
        <p className="text-xs sm:text-sm text-taupe-500 font-light mt-2 max-w-xl">
          Guidelines regarding transit, parcel verification, and size exchanges across Pakistan.
        </p>
      </div>

      <div className="space-y-10 text-sm sm:text-base text-charcoal-700 font-light leading-relaxed">
        {/* Notice on demo */}
        <div className="p-4 bg-sandstone-50 border border-sandstone-300 text-xs text-taupe-500 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-taupe-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-charcoal-800 uppercase tracking-wider">Policy Notice</p>
            <p className="mt-0.5">
              Specific transit lead times and carrier partner designations will be updated upon final commercial rollout. The policies below reflect standard operation parameters.
            </p>
          </div>
        </div>

        {/* Domestic Shipping */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Truck className="w-5 h-5 text-brass-600" />
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal">
              Domestic Delivery (Pakistan)
            </h2>
          </div>
          <p className="mb-4">
            Orders across major metropolitan areas (Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and Quetta) are dispatched via tracked courier services.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-taupe-500">
            <li>Standard dispatch within 2&ndash;3 business days following order confirmation.</li>
            <li>Tracking credentials provided upon package handoff to carrier.</li>
            <li>Complimentary delivery offered during promotional launch campaigns.</li>
          </ul>
        </section>

        {/* Exchanges and Returns */}
        <section className="pt-6 border-t border-sandstone-200">
          <div className="flex items-center gap-2 mb-3">
            <RotateCcw className="w-5 h-5 text-brass-600" />
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal">
              Garment Exchange Policy
            </h2>
          </div>
          <p className="mb-4">
            We want your Al Qasim garments to fit with absolute precision. Unworn, unwashed ready-to-wear items with original tags and packaging intact may be exchanged for alternate sizing within 7 days of parcel receipt.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-taupe-500">
            <li>Unstitched fabrics that have been cut, soaked, or tailored are not eligible for exchange.</li>
            <li>Customized or altered garments are final sale.</li>
            <li>For exchange requests, please contact our concierge team at concierge@alqasim-menswear.pk.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};
