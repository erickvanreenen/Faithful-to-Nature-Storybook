/**
 * CatalogueHeader — results count + sort above product grid
 * Sourced from live site: innovate.faithful-to-nature.co.za
 *
 * Sort button:  114×31px, white bg, border-radius 3.4px, padding 6.83px 10.24px, 10px Regular #191919
 * Dropdown:     114px wide, white bg, border-radius 1.7px, no hover effects
 * Selected opt: 16px Regular, #006654 (FtN green), transparent bg
 * Other opts:   16px Regular, #AEAEAE (grey), transparent bg, NO hover
 * Results:      16px Regular, #AEAEAE
 */

import { useState } from 'react';

const SORT_OPTIONS = [
  'Recommended',
  'Name A to Z',
  'Name Z to A',
  'Price Low to High',
  'Price High to Low',
  'Newest',
  'Rating filter High to Low',
  'Rating filter Low to High',
];

export const CatalogueHeader = ({
  resultCount  = 0,
  sortValue    = 'Recommended',
  onSortChange,
}) => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState(sortValue);

  const select = (option) => {
    setSort(option);
    setOpen(false);
    onSortChange?.(option);
  };

  return (
    <div style={{
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'space-between',
      height:         '44px',
      background:     'transparent',
      fontFamily:     'var(--font-family-base)',
      marginBottom:   'var(--spacer-7)',
      position:       'relative',
    }}>

      {/* Results count */}
      <span style={{
        fontSize:   'var(--font-size-desktop-body-1)',
        fontWeight: 'var(--font-weight-regular)',
        color:      '#AEAEAE',
        fontFamily: 'var(--font-family-base)',
      }}>
        {resultCount.toLocaleString()} Results
      </span>

      {/* Sort */}
      <div style={{ position: 'relative' }}>

        {/* Sort button */}
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            all:          'unset',
            display:      'inline-flex',
            alignItems:   'center',
            gap:          '4px',
            width:        'auto',
            minWidth:     '200px',
            height:       '31px',
            background:   '#FFFFFF',
            borderRadius: '3.4px',
            padding:      '0 10px',
            boxSizing:    'border-box',
            fontSize:     '10px',
            fontWeight:   'var(--font-weight-regular)',
            color:        '#191919',
            fontFamily:   'var(--font-family-base)',
            cursor:       'pointer',
            justifyContent: 'space-between',
          }}
        >
          <span>{sort}</span>
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s', flexShrink: 0 }}>
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>

        {/* Dropdown — no hover effects, same width as button */}
        {open && (
          <div style={{
            position:     'absolute', top: 'calc(100% + 2px)', right: 0, zIndex: 50,
            background:   '#FFFFFF',
            borderRadius: '1.7px',
            width:        'auto',
            minWidth:     '200px',
            padding:      '6.83px 0',
            boxSizing:    'border-box',
          }}>
            {SORT_OPTIONS.map(option => (
              <div
                key={option}
                onClick={() => select(option)}
                style={{
                  padding:    '0 10px',
                  height:     '31px',
                  display:    'flex',
                  alignItems: 'center',
                  fontSize:   '16px',
                  fontWeight: 'var(--font-weight-regular)',
                  color:      option === sort ? 'var(--color-ftn-green)' : '#AEAEAE',
                  background: 'transparent',
                  cursor:     'pointer',
                  fontFamily: 'var(--font-family-base)',
                  boxSizing:  'border-box',
                  whiteSpace: 'nowrap',
                  
                  
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogueHeader;
