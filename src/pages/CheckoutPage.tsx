import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AlertCircle, CheckCircle2, ArrowRight, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/format';

export const CheckoutPage: React.FC = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  // Multi-step state: 1: Contact, 2: Delivery, 3: Review, 4: Finished
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // In-memory state only (not saved in localStorage per explicit instruction)
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    city: 'Lahore',
    province: 'Punjab',
    postalCode: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim()) errs.phone = 'Contact telephone is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required';
    if (!formData.address.trim()) errs.address = 'Street address is required';
    if (!formData.city.trim()) errs.city = 'City is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      if (validateStep1()) setStep(2);
    } else if (step === 2) {
      if (validateStep2()) setStep(3);
    } else if (step === 3) {
      // Finish Demo step
      setStep(4);
      clearCart();
    }
  };

  if (items.length === 0 && step !== 4) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-32">
        <ShoppingBag className="w-12 h-12 text-taupe-400 mb-4" />
        <h2 className="font-serif text-2xl text-charcoal-900 mb-2">
          Your shopping bag is empty
        </h2>
        <p className="text-xs text-taupe-500 mb-6">
          Add items to your bag to test the checkout preview.
        </p>
        <Link
          to="/shop"
          className="px-6 py-3 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Prominent Demo Notice Required by Spec */}
      <div className="mb-8 p-4 bg-brass-100/70 border border-brass-300 text-charcoal-900 rounded-xs flex items-start gap-3 text-left">
        <AlertCircle className="w-5 h-5 text-brass-700 shrink-0 mt-0.5" />
        <div>
          <p className="text-xs uppercase tracking-wider font-bold text-charcoal-900">
            Demo checkout &mdash; no payment will be taken and no order will be placed.
          </p>
          <p className="text-xs text-charcoal-700 font-light mt-0.5">
            This is a frontend demonstration of Al Qasim's order flow. Contact and address fields are held in memory only and will not be stored.
          </p>
        </div>
      </div>

      {step === 4 ? (
        /* Demo Completed State */
        <div className="text-center py-16 px-6 bg-sandstone-50 border border-sandstone-300 max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <h2 className="font-serif text-3xl text-charcoal-900 font-normal mb-3">
            Preview complete. No order was placed.
          </h2>

          <p className="text-xs sm:text-sm text-taupe-500 font-light leading-relaxed max-w-md mx-auto mb-8">
            Thank you for exploring the Al Qasim frontend. All forms, client-side validation, bag persistence, and responsive controls have been successfully demonstrated.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-3.5 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-charcoal-900 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/shop"
              className="w-full sm:w-auto px-8 py-3.5 border border-sandstone-400 text-charcoal text-xs uppercase tracking-widest font-semibold hover:border-charcoal transition-colors"
            >
              Explore Catalog
            </Link>
          </div>
        </div>
      ) : (
        /* Multi-step Form */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          {/* Main Steps Form (7 cols) */}
          <div className="lg:col-span-7">
            {/* Step Progress Bar */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-wider mb-8 pb-4 border-b border-sandstone-300">
              <span className={step >= 1 ? 'font-bold text-charcoal-900' : 'text-taupe-400'}>
                1. Contact
              </span>
              <span className="text-taupe-300">&mdash;</span>
              <span className={step >= 2 ? 'font-bold text-charcoal-900' : 'text-taupe-400'}>
                2. Delivery
              </span>
              <span className="text-taupe-300">&mdash;</span>
              <span className={step === 3 ? 'font-bold text-charcoal-900' : 'text-taupe-400'}>
                3. Review
              </span>
            </div>

            <form onSubmit={handleNext} className="space-y-6">
              {/* Step 1: Contact */}
              {step === 1 && (
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-charcoal-900 font-normal">
                    Contact Information
                  </h3>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="gentleman@example.com"
                      className="w-full p-3 bg-white border border-sandstone-300 text-xs focus:outline-none focus:border-charcoal"
                    />
                    {errors.email && <p className="text-red-700 text-[11px] mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-1">
                      Mobile Number (Pakistan)
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 1234567"
                      className="w-full p-3 bg-white border border-sandstone-300 text-xs focus:outline-none focus:border-charcoal"
                    />
                    {errors.phone && <p className="text-red-700 text-[11px] mt-1">{errors.phone}</p>}
                  </div>
                </div>
              )}

              {/* Step 2: Delivery */}
              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-charcoal-900 font-normal">
                    Delivery Address
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="Tariq"
                        className="w-full p-3 bg-white border border-sandstone-300 text-xs focus:outline-none focus:border-charcoal"
                      />
                      {errors.firstName && <p className="text-red-700 text-[11px] mt-1">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Khan"
                        className="w-full p-3 bg-white border border-sandstone-300 text-xs focus:outline-none focus:border-charcoal"
                      />
                      {errors.lastName && <p className="text-red-700 text-[11px] mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-1">
                      Street Address / House / Apartment
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="House 42, Street 7, Gulberg III"
                      className="w-full p-3 bg-white border border-sandstone-300 text-xs focus:outline-none focus:border-charcoal"
                    />
                    {errors.address && <p className="text-red-700 text-[11px] mt-1">{errors.address}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="Lahore"
                        className="w-full p-3 bg-white border border-sandstone-300 text-xs focus:outline-none focus:border-charcoal"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-1">
                        Province
                      </label>
                      <select
                        value={formData.province}
                        onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                        className="w-full p-3 bg-white border border-sandstone-300 text-xs focus:outline-none focus:border-charcoal"
                      >
                        <option value="Punjab">Punjab</option>
                        <option value="Sindh">Sindh</option>
                        <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                        <option value="Balochistan">Balochistan</option>
                        <option value="Islamabad Capital Territory">Islamabad</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="font-serif text-2xl text-charcoal-900 font-normal">
                    Review Order & Details
                  </h3>

                  <div className="bg-sandstone-50 p-4 border border-sandstone-200 text-xs space-y-2">
                    <p>
                      <strong>Contact:</strong> {formData.email} ({formData.phone})
                    </p>
                    <p>
                      <strong>Ship To:</strong> {formData.firstName} {formData.lastName},{' '}
                      {formData.address}, {formData.city}, {formData.province}
                    </p>
                  </div>

                  <div className="p-4 bg-sandstone-100 border border-sandstone-200/80 text-xs text-taupe-500">
                    <p className="font-medium text-charcoal-800 mb-1">Notice on Payment & Shipping:</p>
                    <p>
                      Shipping charges are not calculated in this demo storefront. No card details or fake payments are processed.
                    </p>
                  </div>
                </div>
              )}

              {/* Form Navigation Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-sandstone-300">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => (s - 1) as any)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-charcoal-700 hover:text-charcoal"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back
                  </button>
                ) : (
                  <Link
                    to="/bag"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-charcoal-700 hover:text-charcoal"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" /> Back to Bag
                  </Link>
                )}

                <button
                  type="submit"
                  className="py-3.5 px-8 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-charcoal-950 transition-colors shadow-subtle flex items-center gap-2"
                >
                  <span>{step === 3 ? 'Finish Demo' : 'Continue'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>

          {/* Mini Summary Sidebar (5 cols) */}
          <div className="lg:col-span-5 bg-sandstone-50/70 border border-sandstone-300 p-6 space-y-4">
            <h4 className="font-serif text-lg text-charcoal-900 font-normal">
              Bag Summary ({items.length})
            </h4>

            <div className="divide-y divide-sandstone-200 max-h-72 overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={item.id} className="py-3 flex gap-3 text-xs">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-12 h-16 object-cover border border-sandstone-200 shrink-0"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-charcoal-900 line-clamp-1">
                      {item.product.name}
                    </p>
                    <p className="text-taupe-500 text-[11px]">
                      {item.selectedColor} &bull; {item.selectedSize} (x{item.quantity})
                    </p>
                    <p className="font-semibold text-charcoal-900 mt-1">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-sandstone-300 space-y-2 text-xs">
              <div className="flex justify-between text-taupe-500">
                <span>Subtotal</span>
                <span className="font-semibold text-charcoal-900">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-taupe-500">
                <span>Shipping</span>
                <span>Not calculated in demo</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-charcoal-900 pt-2 border-t border-sandstone-200">
                <span>Subtotal</span>
                <span className="font-serif text-xl">{formatPrice(subtotal)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
