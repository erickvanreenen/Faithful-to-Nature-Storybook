/**
 * HeroCarousel — full-width image-only sliding banner
 * Sourced from live site: innovate.faithful-to-nature.co.za
 *
 * Specs:
 *   Container: 1344 x 336px, overflow hidden
 *   Slides:    full width image, object-fit cover
 *   Nav:       dot indicators at bottom centre
 *   Auto-play: 4s interval
 */

import { useState, useEffect } from 'react';

export const HeroCarousel = ({
  slides = [
    { alt: "Father's Day",           bg: '#D9EDE7' },
    { alt: 'Nutraceuticals',          bg: '#D4EBF9' },
    { alt: 'Skoon Essentials Launch', bg: '#EAF7C9' },
    { alt: 'FtN Nuts',                bg: '#FFF6D1' },
  ],
  autoPlay = true,
  interval = 4000,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;
    const timer = setInterval(() => setCurrent(i => (i + 1) % slides.length), interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, slides.length]);

  return (
    <div style={{
      width:    '100%',
      maxWidth: '1344px',
      height:   '336px',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: 'var(--font-family-base)',
    }}>

      {/* Slides */}
      <div style={{
        display:   'flex',
        width:     `${slides.length * 100}%`,
        height:    '100%',
        transform: `translateX(-${(current * 100) / slides.length}%)`,
        transition: 'transform 0.5s ease',
      }}>
        {slides.map((slide, i) => (
          <div
            key={i}
            style={{
              width:          `${100 / slides.length}%`,
              height:         '336px',
              flexShrink:     0,
              background:     slide.bg || 'var(--color-grey-4)',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              overflow:       'hidden',
            }}
          >
            {slide.src
              ? <img src={slide.src} alt={slide.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              : <span style={{ fontSize: '14px', color: 'var(--color-grey-1)', fontFamily: 'var(--font-family-base)' }}>{slide.alt}</span>
            }
          </div>
        ))}
      </div>

      {/* Prev / Next arrows — positioned at top: 230px, 30px from edges (matching live site) */}
      {slides.length > 1 && (
        <>
          <button
            onClick={() => setCurrent(i => (i - 1 + slides.length) % slides.length)}
            aria-label="Previous slide"
            style={{
              all: 'unset', position: 'absolute', left: '30px', top: '230px',
              cursor: 'pointer', width: '40px', height: '40px',
              borderRadius: '50%', background: 'rgba(255,255,255,0.45)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxSizing: 'border-box',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#006654" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button
            onClick={() => setCurrent(i => (i + 1) % slides.length)}
            aria-label="Next slide"
            style={{
              all: 'unset', position: 'absolute', right: '30px', top: '230px',
              cursor: 'pointer', width: '40px', height: '40px',
              borderRadius: '50%', background: 'rgba(255,255,255,0.45)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxSizing: 'border-box',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#006654" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default HeroCarousel;
