import React, { useState, useEffect } from 'react';
import { Mail, Clock, AlertCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Sizing & Tailoring',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-left">
      <div className="mb-12 border-b border-sandstone-300 pb-6">
        <p className="text-xs uppercase tracking-ultra text-brass-600 font-semibold mb-2">
          Concierge & Support
        </p>
        <h1 className="font-serif text-3xl sm:text-5xl text-charcoal-900 font-normal">
          Client Assistance
        </h1>
        <p className="text-xs sm:text-sm text-taupe-500 font-light mt-2 max-w-lg">
          For questions regarding ready-to-wear sizing, unstitched suit lengths, or fabric specifications.
        </p>
      </div>

      {/* Prominent Demo Notice */}
      <div className="mb-8 p-4 bg-brass-100/70 border border-brass-300 text-charcoal-900 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-brass-700 shrink-0 mt-0.5" />
        <div className="text-xs">
          <p className="font-semibold uppercase tracking-wider">Frontend Demonstration Notice</p>
          <p className="text-charcoal-700 font-light mt-0.5">
            This contact form operates in client-side demonstration mode only. No actual email or message will be dispatched.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Contact Form (7 cols) */}
        <div className="md:col-span-7">
          {submitted ? (
            <div className="p-8 bg-sandstone-50 border border-sandstone-300 text-center">
              <h3 className="font-serif text-2xl text-charcoal-900 mb-2">
                Demonstration Preview Captured
              </h3>
              <p className="text-xs text-taupe-500 font-light mb-6">
                Your input has been validated on the client side. (In accordance with demonstration guidelines, no actual message was transmitted).
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', inquiryType: 'Sizing & Tailoring', message: '' });
                }}
                className="px-6 py-2.5 border border-charcoal text-xs uppercase tracking-widest font-semibold hover:bg-charcoal hover:text-ivory transition-colors"
              >
                Reset Demo Form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Shahmeer Qureshi"
                  className="w-full p-3 bg-white border border-sandstone-300 text-xs focus:outline-none focus:border-charcoal"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="shahmeer@example.com"
                  className="w-full p-3 bg-white border border-sandstone-300 text-xs focus:outline-none focus:border-charcoal"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-1">
                  Nature of Inquiry
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full p-3 bg-white border border-sandstone-300 text-xs focus:outline-none focus:border-charcoal"
                >
                  <option value="Sizing & Tailoring">Sizing & Tailoring Consultation</option>
                  <option value="Unstitched Cloth Inquiries">Unstitched Fabric Inquiries</option>
                  <option value="Order Assistance">Order Assistance (Demo)</option>
                  <option value="General Feedback">General Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-charcoal-700 font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please state your inquiry..."
                  className="w-full p-3 bg-white border border-sandstone-300 text-xs focus:outline-none focus:border-charcoal"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-charcoal-900 transition-colors"
              >
                Submit Demo Inquiry
              </button>
            </form>
          )}
        </div>

        {/* Channels (5 cols) */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 bg-sandstone-50 border border-sandstone-200/80 space-y-4">
            <h3 className="font-serif text-xl text-charcoal-900 font-normal">
              Direct Inquiries
            </h3>
            
            <div className="flex items-start gap-3 text-xs">
              <Mail className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-charcoal-800">Editorial & Concierge</p>
                <p className="text-taupe-500 font-light">concierge@alqasim-menswear.pk</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs">
              <Clock className="w-4 h-4 text-brass-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-charcoal-800">Support Hours</p>
                <p className="text-taupe-500 font-light">Monday &mdash; Saturday, 10:00 AM &ndash; 7:00 PM PKT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
