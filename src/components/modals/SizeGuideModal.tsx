import React, { useEffect } from 'react';
import { X, Ruler } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose, category = 'shalwar-kameez' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-charcoal-900/60 backdrop-blur-xs transition-opacity" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-ivory-50 shadow-drawer border border-sandstone-300 z-10 p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-charcoal-700 hover:text-charcoal transition-colors rounded-full"
          aria-label="Close size guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <Ruler className="w-5 h-5 text-brass-600" />
          <p className="text-xs uppercase tracking-ultra text-brass-600 font-semibold">
            Measurements Guide
          </p>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-normal mb-2">
          {category === 'waistcoats' ? 'Waistcoat Sizing' : 'Shalwar Kameez & Kurta Sizing'}
        </h3>

        <p className="text-xs sm:text-sm text-taupe-500 font-light mb-6 leading-relaxed">
          All measurements are listed in inches (finished garment specs). Our garments are cut in classic traditional proportions with room for ease of movement.
        </p>

        {category === 'waistcoats' ? (
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs text-left border-collapse border border-sandstone-300">
              <thead>
                <tr className="bg-sandstone-100 text-charcoal-900 uppercase tracking-wider">
                  <th className="p-3 border border-sandstone-300">Size</th>
                  <th className="p-3 border border-sandstone-300">Chest</th>
                  <th className="p-3 border border-sandstone-300">Waist</th>
                  <th className="p-3 border border-sandstone-300">Length</th>
                  <th className="p-3 border border-sandstone-300">Shoulder</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sandstone-200">
                <tr>
                  <td className="p-3 border border-sandstone-300 font-semibold">38 (S)</td>
                  <td className="p-3 border border-sandstone-300">40"</td>
                  <td className="p-3 border border-sandstone-300">38"</td>
                  <td className="p-3 border border-sandstone-300">27"</td>
                  <td className="p-3 border border-sandstone-300">16.5"</td>
                </tr>
                <tr>
                  <td className="p-3 border border-sandstone-300 font-semibold">40 (M)</td>
                  <td className="p-3 border border-sandstone-300">42"</td>
                  <td className="p-3 border border-sandstone-300">40"</td>
                  <td className="p-3 border border-sandstone-300">28"</td>
                  <td className="p-3 border border-sandstone-300">17.5"</td>
                </tr>
                <tr>
                  <td className="p-3 border border-sandstone-300 font-semibold">42 (L)</td>
                  <td className="p-3 border border-sandstone-300">44"</td>
                  <td className="p-3 border border-sandstone-300">42"</td>
                  <td className="p-3 border border-sandstone-300">29"</td>
                  <td className="p-3 border border-sandstone-300">18.5"</td>
                </tr>
                <tr>
                  <td className="p-3 border border-sandstone-300 font-semibold">44 (XL)</td>
                  <td className="p-3 border border-sandstone-300">46"</td>
                  <td className="p-3 border border-sandstone-300">44"</td>
                  <td className="p-3 border border-sandstone-300">30"</td>
                  <td className="p-3 border border-sandstone-300">19.5"</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-xs text-left border-collapse border border-sandstone-300">
              <thead>
                <tr className="bg-sandstone-100 text-charcoal-900 uppercase tracking-wider">
                  <th className="p-3 border border-sandstone-300">Size</th>
                  <th className="p-3 border border-sandstone-300">Chest</th>
                  <th className="p-3 border border-sandstone-300">Kameez Length</th>
                  <th className="p-3 border border-sandstone-300">Shoulder</th>
                  <th className="p-3 border border-sandstone-300">Sleeve</th>
                  <th className="p-3 border border-sandstone-300">Shalwar Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sandstone-200">
                <tr>
                  <td className="p-3 border border-sandstone-300 font-semibold">Small (S)</td>
                  <td className="p-3 border border-sandstone-300">42"</td>
                  <td className="p-3 border border-sandstone-300">40"</td>
                  <td className="p-3 border border-sandstone-300">17.5"</td>
                  <td className="p-3 border border-sandstone-300">24.5"</td>
                  <td className="p-3 border border-sandstone-300">39"</td>
                </tr>
                <tr>
                  <td className="p-3 border border-sandstone-300 font-semibold">Medium (M)</td>
                  <td className="p-3 border border-sandstone-300">44"</td>
                  <td className="p-3 border border-sandstone-300">42"</td>
                  <td className="p-3 border border-sandstone-300">18.5"</td>
                  <td className="p-3 border border-sandstone-300">25.0"</td>
                  <td className="p-3 border border-sandstone-300">40"</td>
                </tr>
                <tr>
                  <td className="p-3 border border-sandstone-300 font-semibold">Large (L)</td>
                  <td className="p-3 border border-sandstone-300">46"</td>
                  <td className="p-3 border border-sandstone-300">43"</td>
                  <td className="p-3 border border-sandstone-300">19.5"</td>
                  <td className="p-3 border border-sandstone-300">25.5"</td>
                  <td className="p-3 border border-sandstone-300">41"</td>
                </tr>
                <tr>
                  <td className="p-3 border border-sandstone-300 font-semibold">X-Large (XL)</td>
                  <td className="p-3 border border-sandstone-300">48"</td>
                  <td className="p-3 border border-sandstone-300">44"</td>
                  <td className="p-3 border border-sandstone-300">20.5"</td>
                  <td className="p-3 border border-sandstone-300">26.0"</td>
                  <td className="p-3 border border-sandstone-300">42"</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="bg-sandstone-100 p-4 border border-sandstone-200 text-xs text-taupe-500 space-y-1.5">
          <p className="font-semibold text-charcoal-800 uppercase tracking-wider">
            Unstitched Cut Specs:
          </p>
          <p>
            Standard unstitched fabric is provided at 4.5 meters length x 54-56 inches width, which accommodates tall sizes up to 6'4" with matching traditional shalwar.
          </p>
        </div>
      </div>
    </div>
  );
};
