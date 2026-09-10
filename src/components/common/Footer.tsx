import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 text-ivory-100 pt-16 pb-12 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Col 1 & 2: Brand & Wordmark */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <Link to="/" className="inline-flex items-center gap-3 font-serif text-2xl tracking-[0.16em] uppercase text-ivory-50 mb-4 group">
              <img
                src="/images/brand/al-qasim-emblem-light.png"
                alt="Al Qasim"
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span>Al Qasim</span>
            </Link>
            <p className="text-xs sm:text-sm text-taupe-300 font-light leading-relaxed max-w-sm mb-6">
              Rooted in Pakistani heritage and tailored for the contemporary wardrobe. Discover understated shalwar kameez, kurtas, and waistcoats conceived with authentic proportions and enduring craftsmanship.
            </p>
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-brass-400">
              <span className="w-4 h-[1px] bg-brass-400" />
              <span>Pakistani Menswear</span>
            </div>
          </div>

          {/* Col 3: Collections */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra text-brass-300 font-semibold mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-taupe-300">
              <li>
                <Link to="/collections/shalwar-kameez" className="hover:text-ivory transition-colors">
                  Shalwar Kameez
                </Link>
              </li>
              <li>
                <Link to="/collections/kurtas" className="hover:text-ivory transition-colors">
                  Kurtas
                </Link>
              </li>
              <li>
                <Link to="/collections/waistcoats" className="hover:text-ivory transition-colors">
                  Waistcoats
                </Link>
              </li>
              <li>
                <Link to="/collections/unstitched" className="hover:text-ivory transition-colors">
                  Unstitched Fabric
                </Link>
              </li>
              <li>
                <Link to="/collections/all?tag=new-in" className="hover:text-ivory transition-colors">
                  New In
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-ivory transition-colors">
                  Shop All
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Brand & Information */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra text-brass-300 font-semibold mb-4">
              Brand & Care
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-taupe-300">
              <li>
                <Link to="/about" className="hover:text-ivory transition-colors">
                  About Al Qasim
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="hover:text-ivory transition-colors">
                  Size & Fitting Guide
                </Link>
              </li>
              <li>
                <Link to="/care-guide" className="hover:text-ivory transition-colors">
                  Fabric Care Guide
                </Link>
              </li>
              <li>
                <Link to="/delivery-returns" className="hover:text-ivory transition-colors">
                  Delivery & Returns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ivory transition-colors">
                  Customer Assistance
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Client Services & Demo notice */}
          <div>
            <h4 className="text-xs uppercase tracking-ultra text-brass-300 font-semibold mb-4">
              Concierge
            </h4>
            <div className="space-y-3 text-xs text-taupe-300 font-light">
              <p>
                Inquiries regarding bespoke unstitched tailoring or size consultations can be directed to our concierge team.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block px-4 py-2 border border-taupe-400 text-[11px] uppercase tracking-widest text-ivory hover:border-brass-400 hover:text-brass-300 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with fine divider */}
        <div className="pt-8 border-t border-charcoal-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-taupe-400">
          <p>&copy; {new Date().getFullYear()} Al Qasim. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2">
            <Link to="/care-guide" className="hover:text-ivory transition-colors">
              Care Instructions
            </Link>
            <Link to="/delivery-returns" className="hover:text-ivory transition-colors">
              Store Policies
            </Link>
            <span className="text-taupe-500">PKR (Pakistani Rupee)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
