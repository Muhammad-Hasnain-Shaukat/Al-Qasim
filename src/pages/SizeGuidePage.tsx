import React, { useEffect } from 'react';
import { Ruler } from 'lucide-react';

export const SizeGuidePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
      <div className="mb-12 border-b border-sandstone-300 pb-6">
        <p className="text-xs uppercase tracking-ultra text-brass-600 font-semibold mb-2">
          Fit & Measurements
        </p>
        <h1 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-normal">
          Size & Silhouette Guide
        </h1>
        <p className="text-xs sm:text-sm text-taupe-500 font-light mt-2 max-w-xl">
          Detailed garment specifications for our ready-to-wear shalwar kameez, kurtas, and waistcoats. Measurements are given in inches for finished garments.
        </p>
      </div>

      <div className="space-y-12">
        {/* Shalwar Kameez Table */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Ruler className="w-5 h-5 text-brass-600" />
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal">
              Shalwar Kameez & Kurta Sizing
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-sandstone-300">
              <thead>
                <tr className="bg-sandstone-100 text-charcoal-900 uppercase tracking-wider">
                  <th className="p-3.5 border border-sandstone-300">Size</th>
                  <th className="p-3.5 border border-sandstone-300">Chest</th>
                  <th className="p-3.5 border border-sandstone-300">Kameez Length</th>
                  <th className="p-3.5 border border-sandstone-300">Shoulder</th>
                  <th className="p-3.5 border border-sandstone-300">Sleeve Length</th>
                  <th className="p-3.5 border border-sandstone-300">Shalwar Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sandstone-200">
                <tr>
                  <td className="p-3.5 border border-sandstone-300 font-semibold">Small (S)</td>
                  <td className="p-3.5 border border-sandstone-300">42"</td>
                  <td className="p-3.5 border border-sandstone-300">40"</td>
                  <td className="p-3.5 border border-sandstone-300">17.5"</td>
                  <td className="p-3.5 border border-sandstone-300">24.5"</td>
                  <td className="p-3.5 border border-sandstone-300">39"</td>
                </tr>
                <tr>
                  <td className="p-3.5 border border-sandstone-300 font-semibold">Medium (M)</td>
                  <td className="p-3.5 border border-sandstone-300">44"</td>
                  <td className="p-3.5 border border-sandstone-300">42"</td>
                  <td className="p-3.5 border border-sandstone-300">18.5"</td>
                  <td className="p-3.5 border border-sandstone-300">25.0"</td>
                  <td className="p-3.5 border border-sandstone-300">40"</td>
                </tr>
                <tr>
                  <td className="p-3.5 border border-sandstone-300 font-semibold">Large (L)</td>
                  <td className="p-3.5 border border-sandstone-300">46"</td>
                  <td className="p-3.5 border border-sandstone-300">43"</td>
                  <td className="p-3.5 border border-sandstone-300">19.5"</td>
                  <td className="p-3.5 border border-sandstone-300">25.5"</td>
                  <td className="p-3.5 border border-sandstone-300">41"</td>
                </tr>
                <tr>
                  <td className="p-3.5 border border-sandstone-300 font-semibold">X-Large (XL)</td>
                  <td className="p-3.5 border border-sandstone-300">48"</td>
                  <td className="p-3.5 border border-sandstone-300">44"</td>
                  <td className="p-3.5 border border-sandstone-300">20.5"</td>
                  <td className="p-3.5 border border-sandstone-300">26.0"</td>
                  <td className="p-3.5 border border-sandstone-300">42"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Waistcoats Table */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <Ruler className="w-5 h-5 text-brass-600" />
            <h2 className="font-serif text-2xl text-charcoal-900 font-normal">
              Waistcoat Sizing
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-sandstone-300">
              <thead>
                <tr className="bg-sandstone-100 text-charcoal-900 uppercase tracking-wider">
                  <th className="p-3.5 border border-sandstone-300">Size Code</th>
                  <th className="p-3.5 border border-sandstone-300">Chest</th>
                  <th className="p-3.5 border border-sandstone-300">Waist</th>
                  <th className="p-3.5 border border-sandstone-300">Front Length</th>
                  <th className="p-3.5 border border-sandstone-300">Shoulder</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sandstone-200">
                <tr>
                  <td className="p-3.5 border border-sandstone-300 font-semibold">38 (S)</td>
                  <td className="p-3.5 border border-sandstone-300">40"</td>
                  <td className="p-3.5 border border-sandstone-300">38"</td>
                  <td className="p-3.5 border border-sandstone-300">27"</td>
                  <td className="p-3.5 border border-sandstone-300">16.5"</td>
                </tr>
                <tr>
                  <td className="p-3.5 border border-sandstone-300 font-semibold">40 (M)</td>
                  <td className="p-3.5 border border-sandstone-300">42"</td>
                  <td className="p-3.5 border border-sandstone-300">40"</td>
                  <td className="p-3.5 border border-sandstone-300">28"</td>
                  <td className="p-3.5 border border-sandstone-300">17.5"</td>
                </tr>
                <tr>
                  <td className="p-3.5 border border-sandstone-300 font-semibold">42 (L)</td>
                  <td className="p-3.5 border border-sandstone-300">44"</td>
                  <td className="p-3.5 border border-sandstone-300">42"</td>
                  <td className="p-3.5 border border-sandstone-300">29"</td>
                  <td className="p-3.5 border border-sandstone-300">18.5"</td>
                </tr>
                <tr>
                  <td className="p-3.5 border border-sandstone-300 font-semibold">44 (XL)</td>
                  <td className="p-3.5 border border-sandstone-300">46"</td>
                  <td className="p-3.5 border border-sandstone-300">44"</td>
                  <td className="p-3.5 border border-sandstone-300">30"</td>
                  <td className="p-3.5 border border-sandstone-300">19.5"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Unstitched Note */}
        <section className="p-6 bg-sandstone-50 border border-sandstone-200">
          <h3 className="font-serif text-xl text-charcoal-900 font-normal mb-2">
            Unstitched Cloth Standard Dimensions
          </h3>
          <p className="text-xs sm:text-sm text-taupe-500 font-light leading-relaxed">
            All unstitched suits are delivered in generous 4.5 meters length with a 54 to 56 inches standard yardage width (bara arzz). This accommodates customized bespoke tailoring for heights up to 6'4" including matching deep-pleat shalwars or straight pyjamas.
          </p>
        </section>
      </div>
    </div>
  );
};
