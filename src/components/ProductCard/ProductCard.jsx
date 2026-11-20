import { useState } from 'react';

/**
 * ProductCard — FtN product card component
 * Size: 215px desktop (spec CARD-02) | Padding: 12px | Image area: 195px tall
 *
 * Built from the repo's component, corrected to the FtN spec (ftn-design-eval.html, CARD-01 to CARD-13):
 *   - card 215px, 1px Light Charcoal border, 6px radius, White background
 *   - image area 195px, Off White, promo badge top-left (#D77929), heart top-right (8px inset)
 *   - title 13px Bold in FtN Green, 2-line clamp
 *   - rating stars #D77929, count 12px Dark Charcoal
 *   - sale price in red (#D43227), original price struck through in Dark Charcoal
 *   - full-width 32px "Add to Cart" button, FtN Green; hover Aqua Green
 *
 * CTA states:
 *   default  — filled green (#006654), white text
 *   hover    — Aqua Green (#204B4A)
 *   selected — quantity stepper replaces button
 */

export const ProductCard = ({
  title        = 'Product Name',
  variant      = '500ml',
  price        = 'R165.00',
  originalPrice,
  promoLabel,
  rating       = '4.7',
  reviewCount  = '19',
}) => {
  const [hovered, setHovered]         = useState(false);
  const [stepperHovered, setStepHov]  = useState(false);
  const [qty, setQty]                 = useState(0);
  const [wishlisted, setWish]         = useState(false);

  const selected = qty > 0;

  const btnBase = {
    width:      '100%',
    height:     '32px',
    borderRadius: '4px',
    fontSize:   '14px',
    fontWeight: 700,
    fontFamily: 'var(--font-family-base)',
    cursor:     'pointer',
    display:    'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap:        '8px',
    boxSizing:  'border-box',
    transition: 'background 0.15s ease, color 0.15s ease',
  };

  const btnPrimary = {
    ...btnBase,
    background: '#006654',
    color:      '#FFFFFF',
    border:     'none',
  };

  const btnHover = {
    ...btnBase,
    background: '#204B4A',
    color:      '#FFFFFF',
    border:     'none',
  };

  return (
    <div style={{
      width:        '215px',
      background:   'var(--color-white)',
      borderRadius: 'var(--radius-card)',
      border:       '1px solid var(--color-grey-3)',
      padding:      '12px',
      boxSizing:    'border-box',
      fontFamily:   'var(--font-family-base)',
      position:     'relative',
      display:      'flex',
      flexDirection:'column',
    }}>

      {/* Image area */}
      <div style={{ position: 'relative', width: '100%', height: '195px', marginBottom: '10px' }}>
        <div style={{
          width: '100%', height: '100%',
          background: 'var(--color-grey-4)',
          borderRadius: 'var(--radius-default)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontSize: '12px', color: 'var(--color-grey-1)' }}>Product Image</span>
        </div>

        {/* Promo badge */}
        {promoLabel && (
          <div style={{
            position: 'absolute', top: 0, left: 0,
            background: '#D77929', color: '#FFFFFF',
            fontSize: '10px', fontWeight: 700,
            padding: '4px 8px', lineHeight: 1.3,
            textTransform: 'uppercase', letterSpacing: '0.02em',
          }}>
            {promoLabel}
          </div>
        )}

        {/* Heart */}
        <div
          onClick={() => setWish(w => !w)}
          style={{
            position: 'absolute', top: '8px', right: '8px',
            width: '23px', height: '23px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24"
            fill={wishlisted ? '#D77929' : 'none'}
            stroke={wishlisted ? '#D77929' : 'var(--color-grey-2)'}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
      </div>

      {/* Title */}
      <p style={{
        fontSize: '13px', fontWeight: 700,
        color: 'var(--color-ftn-green)',
        lineHeight: 1.4, margin: '0 0 6px',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        minHeight: '36px',
      }}>
        {title}
      </p>

      {/* Variant */}
      <p style={{ fontSize: '12px', color: 'var(--color-grey-1)', margin: '0 0 6px' }}>
        {variant}
      </p>

      {/* Rating */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#D77929" stroke="#D77929" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
        <span style={{ fontSize: '12px', color: 'var(--color-grey-1)' }}>
          {rating} ({reviewCount})
        </span>
      </div>

      {/* Prices */}
      <div style={{ marginTop: 'auto', marginBottom: '10px', display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end', gap: '8px' }}>
        {originalPrice && (
          <span style={{ fontSize: '12px', color: 'var(--color-grey-1)', textDecoration: 'line-through' }}>
            {originalPrice}
          </span>
        )}
        <span style={{ fontSize: '16px', fontWeight: 700, color: originalPrice ? '#D43227' : 'var(--color-ftn-green)' }}>
          {price}
        </span>
      </div>

      {/* CTA */}
      {selected ? (
        <div
          onMouseEnter={() => setStepHov(true)}
          onMouseLeave={() => setStepHov(false)}
          style={{
            width: '100%', height: '32px',
            background: stepperHovered ? '#FFFFFF' : 'var(--color-cactus)',
            border: stepperHovered ? '1.5px solid #006654' : '1.5px solid var(--color-cactus)',
            borderRadius: '4px',
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 16px', boxSizing: 'border-box',
            transition: 'background 0.15s ease, border 0.15s ease',
          }}>
          <button
            onClick={() => setQty(q => Math.max(0, q - 1))}
            style={{ all: 'unset', color: '#006654', fontSize: '20px', fontWeight: 700, cursor: 'pointer', lineHeight: 1 }}
            aria-label="decrease quantity"
          >−</button>
          <span style={{ fontSize: '14px', fontWeight: 700, color: '#006654' }}>{qty}</span>
          <button
            onClick={() => setQty(q => q + 1)}
            style={{ all: 'unset', color: '#006654', fontSize: '20px', fontWeight: 700, cursor: 'pointer', lineHeight: 1 }}
            aria-label="increase quantity"
          >+</button>
        </div>
      ) : (
        <button
          style={hovered ? btnHover : btnPrimary}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setQty(1)}
          aria-label={`Add ${title} to cart`}
        >
          Add to Cart
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ProductCard;
