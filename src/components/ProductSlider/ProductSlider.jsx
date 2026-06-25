/**
 * ProductSlider — horizontal scrolling product card row
 * Sourced from live site: innovate.faithful-to-nature.co.za
 *
 * Specs:
 *   Section total:     1344px wide, 442px tall
 *   Card gap:          20px
 *   Heading to cards:  12px
 *   Section bottom:    24px padding
 *   Cards visible:     ~5 at 230px each
 *   Nav arrows:        visible, 40×40px, semi-transparent white circles
 */

import { useState, useRef } from 'react';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { ProductCard }    from '../ProductCard/ProductCard';

const CARD_WIDTH  = 230;
const CARD_GAP    = 20;
const VISIBLE     = 5;
const SCROLL_BY   = (CARD_WIDTH + CARD_GAP) * VISIBLE;

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#006654" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#006654" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

export const ProductSlider = ({
  title    = 'Previously Bought',
  linkLabel,
  linkHref = '#',
  products = [],
}) => {
  const trackRef   = useRef(null);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    if (!trackRef.current) return;
    setCanLeft(trackRef.current.scrollLeft > 0);
    setCanRight(trackRef.current.scrollLeft + trackRef.current.offsetWidth < trackRef.current.scrollWidth - 4);
  };

  const scroll = (dir) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir * SCROLL_BY, behavior: 'smooth' });
    setTimeout(updateArrows, 400);
  };

  return (
    <div style={{
      width:         '100%',
      paddingBottom: '24px',
      fontFamily:    'var(--font-family-base)',
      boxSizing:     'border-box',
    }}>

      {/* Section heading */}
      <SectionHeading
        title={title}
        linkLabel={linkLabel}
        linkHref={linkHref}
      />

      {/* Slider wrapper */}
      <div style={{ position: 'relative', marginTop: '12px' }}>

        {/* Left arrow */}
        {canLeft && (
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous products"
            style={{
              all: 'unset', position: 'absolute',
              left: '-20px', top: '50%', transform: 'translateY(-50%)',
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.9)',
              border: '0.5px solid var(--color-grey-3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 10, boxSizing: 'border-box',
            }}
          >
            <ChevronLeft />
          </button>
        )}

        {/* Scrollable track */}
        <div
          ref={trackRef}
          onScroll={updateArrows}
          style={{
            display:           'flex',
            gap:               `${CARD_GAP}px`,
            overflowX:         'auto',
            scrollbarWidth:    'none',
            msOverflowStyle:   'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {products.map((product, i) => (
            <div key={i} style={{ flexShrink: 0 }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* Right arrow */}
        {canRight && products.length > VISIBLE && (
          <button
            onClick={() => scroll(1)}
            aria-label="Next products"
            style={{
              all: 'unset', position: 'absolute',
              right: '-20px', top: '50%', transform: 'translateY(-50%)',
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'rgba(255,255,255,0.9)',
              border: '0.5px solid var(--color-grey-3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', zIndex: 10, boxSizing: 'border-box',
            }}
          >
            <ChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductSlider;
