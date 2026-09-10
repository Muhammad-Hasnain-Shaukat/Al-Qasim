import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 pt-36 pb-24">
      <p className="text-xs uppercase tracking-ultra text-brass-600 font-semibold mb-3">
        404 &mdash; Page Not Found
      </p>
      <h1 className="font-serif text-4xl sm:text-5xl text-charcoal-900 font-normal mb-4">
        This path is not part of the collection
      </h1>
      <p className="text-xs sm:text-sm text-taupe-500 font-light max-w-md mx-auto mb-8 leading-relaxed">
        The page you are looking for may have been repositioned or no longer exists in our current catalog.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-ivory text-xs uppercase tracking-widest font-semibold hover:bg-charcoal-900 transition-colors shadow-subtle"
      >
        <span>Return to Al Qasim Home</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};
