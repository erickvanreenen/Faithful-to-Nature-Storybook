/**
 * FilterGroup — collapsible filter section
 * Sourced from live site: innovate.faithful-to-nature.co.za/food
 *
 * Heading:   #F3F4F8 bg, #6B6B69 text, 12px Bold, 43px tall, padding 10px 14px
 * Items:     <A> links — no checkboxes. 32px tall, 12px Regular #191919
 * Count:     10px Regular #AEAEAE, right-aligned
 * Container: 13.65px side padding on items
 * Show More: transparent bg, #6B6B69 text, 10px Regular, 34px tall
 */

import { useState } from 'react';

export const FilterGroup = ({
  title       = 'Categories',
  options     = [],
  defaultOpen = true,
  maxVisible  = 5,
  onSelect,
}) => {
  const [open, setOpen]           = useState(defaultOpen);
  const [showAll, setShowAll]     = useState(false);

  const visible = showAll ? options : options.slice(0, maxVisible);
  const hasMore = options.length > maxVisible;

  return (
    <div style={{ fontFamily: 'var(--font-family-base)', borderBottom: '1px solid #E8E8E8' }}>

      {/* Heading */}
      <div
        onClick={() => setOpen(o => !o)}
        style={{
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'space-between',
          height:          '43px',
          background:      'var(--color-grey-4)',
          padding:         '0 13.65px',
          cursor:          'pointer',
          boxSizing:       'border-box',
        }}
      >
        <span style={{
          fontSize:   '12px',
          fontWeight: 'var(--font-weight-bold)',
          color:      '#6B6B69',
          fontFamily: 'var(--font-family-base)',
        }}>
          {title}
        </span>

        {/* Chevron */}
        <svg
          width="12" height="12" viewBox="0 0 24 24"
          fill="none" stroke="#6B6B69" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s', flexShrink: 0 }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {/* Items */}
      {open && (
        <div style={{ padding: '0 13.65px' }}>
          {visible.map((opt, i) => (
            <a
              key={i}
              href={opt.href || '#'}
              onClick={(e) => { e.preventDefault(); onSelect?.(opt.label); }}
              style={{
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'space-between',
                height:         '32px',
                textDecoration: 'none',
                cursor:         'pointer',
                boxSizing:      'border-box',
              }}
            >
              <span style={{
                fontSize:   '12px',
                fontWeight: 'var(--font-weight-regular)',
                color:      '#191919',
                fontFamily: 'var(--font-family-base)',
              }}>
                {opt.label}
              </span>
              {opt.count !== undefined && (
                <span style={{
                  fontSize:   '10px',
                  fontWeight: 'var(--font-weight-regular)',
                  color:      '#AEAEAE',
                  fontFamily: 'var(--font-family-base)',
                }}>
                  ({opt.count})
                </span>
              )}
            </a>
          ))}

          {/* Show More / Show Less toggle */}
          {hasMore && (
            <div
              onClick={() => setShowAll(s => !s)}
              style={{
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
                height:         '34px',
                cursor:         'pointer',
                background:     'transparent',
                border:         '1.28px solid transparent',
                borderRadius:   '3.4px',
                width:          '100%',
                boxSizing:      'border-box',
              }}
            >
              <span style={{
                fontSize:   '10px',
                fontWeight: 'var(--font-weight-regular)',
                color:      '#6B6B69',
                fontFamily: 'var(--font-family-base)',
              }}>
                {showAll ? 'Show Less' : 'Show More'}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FilterGroup;
