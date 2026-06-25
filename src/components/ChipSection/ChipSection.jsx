/**
 * ChipSection — "Shop over 20 Diets, Values and Lifestyles" section
 * Sourced from live site: innovate.faithful-to-nature.co.za
 *
 * Specs:
 *   Section:    1344px wide, aqua-deep bg (#204B4A), padding 24px, border-radius 6px
 *   Heading:    24px, Semibold, #FFFBF5 — centred
 *   Subtitle:   16px, Regular, #FFFBF5 — centred
 *   Chips:      height 40px, cream bg (#F1E7DD), dark text (#031410), centred row
 *   Chip hover: dark bg (#031410), cream text (#F1E7DD)
 *   More link:  plain text link, cream, underlined, centred
 */

import { useState } from 'react';

const Chip = ({ label, href }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:        'inline-flex',
        alignItems:     'center',
        justifyContent: 'center',
        height:         '40px',
        padding:        '0 16px',
        background:     hovered ? '#031410' : '#F1E7DD',
        color:          hovered ? '#F1E7DD' : '#031410',
        fontSize:       '16px',
        fontWeight:     'var(--font-weight-bold)',
        fontFamily:     'var(--font-family-base)',
        border:         `1.6px solid ${hovered ? '#031410' : '#F1E7DD'}`,
        borderRadius:   'var(--radius-default)',
        textDecoration: 'none',
        whiteSpace:     'nowrap',
        boxSizing:      'border-box',
        transition:     'background 0.15s ease, color 0.15s ease',
        cursor:         'pointer',
      }}
    >
      {label}
    </a>
  );
};

export const ChipSection = ({
  heading  = 'Shop over 20 Diets, Values and Lifestyles',
  subtitle = "We've screened all our products to make it easier for you to shop and filter products by values.",
  chips    = [
    { label: 'Gluten-Free',  href: '/shop-by-diet/gluten-free' },
    { label: 'Vegan',        href: '/values/vegan' },
    { label: 'Plastic-Free', href: '/values/plastic-free' },
    { label: 'Halaal',       href: '/shop-by-diet/halaal' },
    { label: 'Cruelty-Free', href: '/values/cruelty-free' },
    { label: 'GMO-Free',     href: '/values/gmo-free' },
  ],
  moreLabel = '+ more values to shop',
  moreHref  = '/values-listing',
}) => (
  <div style={{
    width:         '100%',
    maxWidth:      '1344px',
    background:    'var(--color-aqua-deep)',
    padding:       '40px 24px',
    boxSizing:     'border-box',
    borderRadius:  'var(--radius-card)',    /* 6px */
    fontFamily:    'var(--font-family-base)',
    display:       'flex',
    flexDirection: 'column',
    alignItems:    'center',
    gap:           '20px',
  }}>

    {/* Heading */}
    <h3 style={{
      margin:     0,
      fontSize:   'var(--font-size-desktop-h3)',
      fontWeight: 'var(--font-weight-semibold)',
      color:      '#FFFBF5',
      lineHeight: 'var(--line-height-125)',
      textAlign:  'center',
    }}>
      {heading}
    </h3>

    {/* Subtitle */}
    {subtitle && (
      <p style={{
        margin:     0,
        fontSize:   'var(--font-size-desktop-body-1)',
        fontWeight: 'var(--font-weight-regular)',
        color:      '#FFFBF5',
        lineHeight: 'var(--line-height-150)',
        textAlign:  'center',
        maxWidth:   '700px',
      }}>
        {subtitle}
      </p>
    )}

    {/* Chips */}
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
      {chips.map((chip, i) => <Chip key={i} label={chip.label} href={chip.href} />)}
    </div>

    {/* More link */}
    {moreLabel && (
      <a
        href={moreHref}
        style={{
          fontSize:       '16px',
          fontWeight:     'var(--font-weight-regular)',
          color:          '#F1E7DD',
          textDecoration: 'underline',
          fontFamily:     'var(--font-family-base)',
        }}
      >
        {moreLabel}
      </a>
    )}
  </div>
);

export default ChipSection;
