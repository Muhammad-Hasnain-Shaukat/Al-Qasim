import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HERO_MEDIA } from '../../constants/media';

export const HeroVideo: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768;
    }
    return true;
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check reduced motion preference
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', handleMotionChange);
    return () => motionQuery.removeEventListener('change', handleMotionChange);
  }, []);

  // Responsive breakpoint detection
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleResize = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop(e.matches);
      setVideoLoaded(false);
    };

    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  // Video source and poster based on responsive breakpoint
  const currentVideoSrc = isDesktop ? HERO_MEDIA.desktop.video : HERO_MEDIA.mobile.video;
  const currentPoster = isDesktop ? HERO_MEDIA.desktop.poster : HERO_MEDIA.mobile.poster;

  // Handle intersection observer to pause video offscreen for performance
  useEffect(() => {
    const video = videoRef.current;
    if (!video || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              setVideoFailed(true);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [currentVideoSrc, prefersReducedMotion]);

  return (
    <section className="relative w-full h-[100svh] md:h-[100dvh] md:min-h-[650px] max-h-[1100px] overflow-hidden bg-[#C5B49D] select-none">
      {/* Background Poster Fallback Image (Always present underneath to prevent flash) */}
      <img
        src={currentPoster}
        alt="Al Qasim Pakistani Menswear Campaign"
        className={`absolute inset-0 w-full h-full object-cover pointer-events-none ${
          isDesktop ? 'object-[85%_top]' : 'object-[center_20%]'
        }`}
      />

      {/* Responsive HTML5 Autoplaying Video (Without pause or mute buttons per specification) */}
      {!prefersReducedMotion && !videoFailed && (
        <video
          key={currentVideoSrc}
          ref={videoRef}
          src={currentVideoSrc}
          poster={currentPoster}
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setVideoFailed(true)}
          className={`absolute inset-0 w-full h-full object-cover pointer-events-none transition-opacity duration-1000 ${
            isDesktop ? 'object-[85%_top]' : 'object-[center_20%]'
          } ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}

      {/* Subtle Warm Contrast Gradients:
          Desktop: Darker on the left where typography sits, completely clear on the right models.
          Mobile: Clean subtle bottom vignette gradient supporting the two bottom CTA buttons without darkening the video.
      */}
      <div className="absolute inset-0 pointer-events-none hidden md:block bg-gradient-to-r from-charcoal-950/75 via-charcoal-900/35 to-transparent" />
      <div className="absolute inset-0 pointer-events-none md:hidden bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 via-25% to-transparent" />

      {/* Mobile-Only Eyebrow beneath Navbar (Positioned a little down, touching the left boundary with larger text) */}
      <div className="absolute top-24 sm:top-28 left-0 z-20 md:hidden flex items-center justify-start pointer-events-none">
        <div className="inline-flex items-center gap-2.5 sm:gap-3">
          <span className="w-9 sm:w-12 h-[2px] bg-white drop-shadow-sm shrink-0" />
          <span className="text-[13.5px] xs:text-sm sm:text-base font-semibold tracking-[0.18em] xs:tracking-[0.22em] text-white uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)] whitespace-nowrap">
            Al Qasim &mdash; Pakistani Menswear
          </span>
        </div>
      </div>

      {/* Desktop Hero Real HTML Content Overlay (Hidden on Mobile per specification) */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 hidden md:flex flex-col justify-center py-28">
        <div className="max-w-xl text-left">
          {/* Eyebrow in high-contrast crisp white */}
          <div className="inline-flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-3">
            <span className="w-5 sm:w-8 h-[1px] bg-white/80 drop-shadow-sm" />
            <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] text-white uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              Al Qasim &mdash; Pakistani Menswear
            </span>
          </div>

          {/* Headline in pure monochrome white with thin black boundary */}
          <h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-normal leading-[1.1] tracking-tight mb-2.5 sm:mb-4 md:mb-6 drop-shadow-md"
            style={{
              WebkitTextStroke: '1px #000000',
              paintOrder: 'stroke fill',
            }}
          >
            Rooted in tradition.<br />
            <span
              className="italic font-light text-white"
              style={{
                WebkitTextStroke: '0.85px #000000',
                paintOrder: 'stroke fill',
              }}
            >
              Made for today.
            </span>
          </h1>

          {/* Supporting line */}
          <p className="text-xs sm:text-sm md:text-base text-white/90 font-light leading-relaxed max-w-md mb-4 sm:mb-6 md:mb-8 drop-shadow-md">
            Discover shalwar kameez, kurtas, and waistcoats for everyday elegance.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 md:gap-6">
            <Link
              to="/shop"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 bg-white text-black border border-black text-[11px] sm:text-xs font-medium tracking-widest uppercase hover:bg-black hover:text-white transition-all duration-300 shadow-sm group"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <Link
              to="/collections/waistcoats"
              className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium tracking-widest uppercase text-white hover:text-white/80 border-b border-black pb-0.5 sm:pb-1 transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
            >
              <span>Discover Waistcoats</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile-Only Bottom Two Buttons (Lifted up from bottom edge per user instruction) */}
      <div className="absolute inset-x-0 bottom-8 sm:bottom-10 z-30 md:hidden px-4 pb-safe pointer-events-auto">
        <div className="grid grid-cols-2 gap-3 w-full max-w-md mx-auto">
          <Link
            to="/shop"
            className="flex items-center justify-center gap-1.5 py-3.5 px-2 bg-white text-charcoal-950 border border-black text-[10px] xs:text-[11px] font-semibold tracking-wider uppercase shadow-xl active:scale-95 transition-all text-center rounded-xs"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Link>

          <Link
            to="/collections/waistcoats"
            className="flex items-center justify-center gap-1.5 py-3.5 px-2 bg-charcoal-950/90 backdrop-blur-md text-white border border-white/70 text-[10px] xs:text-[11px] font-semibold tracking-wider uppercase shadow-xl active:scale-95 transition-all text-center rounded-xs"
          >
            <span className="hidden xs:inline">Discover </span>
            <span>Waistcoats</span>
            <ArrowRight className="w-3.5 h-3.5 shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
};
