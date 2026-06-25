/**
 * CategoryTabs — "Shop by Category" tab bar above the product grid
 * Sourced from live site: innovate.faithful-to-nature.co.za/food
 *
 * Heading:       H3, 20.48px Semibold, #191919
 * Button:        136x48px, border-radius 3.4px, flex-wrap, gap 8.5px
 * Active:        #006654 bg, white text
 * Inactive:      white bg, #191919 text, 13.33px Regular
 */

import { useState } from 'react';

export const CategoryTabs = ({
  heading    = 'Shop by Category',
  categories = [],
  active,
  onSelect,
}) => {
  const [current, setCurrent] = useState(active || (categories[0] && categories[0].label));

  const select = (label) => {
    setCurrent(label);
    onSelect?.(label);
  };

  return (
    <div style={{
      fontFamily:    'var(--font-family-base)',
      paddingTop:    '0px',    /* live site: Shop by Category has no top padding — Filter heading sits ~12–14px lower */
      marginBottom:  '28px',   /* gap to CatalogueHeader: matches live site ~31px */
    }}>

      <h3 style={{
        fontSize:   '20px',
        fontWeight: 'var(--font-weight-semibold)',
        color:      '#191919',
        margin:     '0 0 10px 0',
        padding:    '0',
        fontFamily: 'var(--font-family-base)',
      }}>
        {heading}
      </h3>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8.5px' }}>
        {categories.map((cat, i) => {
          const isActive = cat.label === current;
          return (
            <button
              key={i}
              onClick={() => select(cat.label)}
              style={{
                all:           'unset',
                display:       'inline-flex',
                alignItems:    'center',
                justifyContent:'center',
                textAlign:     'center',
                width:         '136px',
                minHeight:     '48px',
                padding:       '3.4px 6.8px',
                background:    isActive ? 'var(--color-ftn-green)' : '#FFFFFF',
                borderRadius:  '3.4px',
                fontSize:      '13px',
                fontWeight:    'var(--font-weight-regular)',
                color:         isActive ? '#FFFFFF' : '#191919',
                fontFamily:    'var(--font-family-base)',
                cursor:        'pointer',
                boxSizing:     'border-box',
                lineHeight:    1.3,
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;
