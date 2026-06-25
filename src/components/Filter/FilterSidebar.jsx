/**
 * FilterSidebar — full left panel
 * Sourced from live site: innovate.faithful-to-nature.co.za/food
 *
 * Width:          263px
 * Header:         46px tall, padding 0 13.65px
 *   "Filter" title: 20px Semibold #191919 + filter icon
 *   "Found X results": 14px Bold #191919
 * Search input:   white, 0.64px #AEAEAE border, no radius, 32px, 10px Regular
 * Filter groups:  see FilterGroup component
 */

import { useState } from 'react';
import { FilterGroup } from './FilterGroup';

const DEFAULT_FILTERS = [
  {
    title: 'Categories',
    options: [
      { label: 'Baking & Cooking',              count: 934  },
      { label: 'Breakfast Cereals',             count: 96   },
      { label: 'Chocolate, Sweets & Biscuits',  count: 182  },
      { label: 'Honey, Nut Butters & Spreads',  count: 107  },
      { label: 'Snacks',                        count: 371  },
      { label: 'Drinks',                        count: 215  },
      { label: 'Baby & Kids Food',              count: 88   },
    ],
  },
  {
    title: 'Brands',
    options: [
      { label: 'Faithful to Nature',  count: 106 },
      { label: 'Health Connection',   count: 68  },
      { label: 'ButtaNutt',           count: 18  },
      { label: 'Earthsap',            count: 31  },
      { label: 'Rawbiotics',          count: 12  },
    ],
  },
  {
    title: 'Ingredient Values',
    options: [
      { label: 'Palm Oil Free',   count: 1861 },
      { label: 'Vegan',          count: 1787 },
      { label: 'GMO-Free',       count: 1234 },
      { label: 'Gluten-Free',    count: 876  },
      { label: 'Organic',        count: 654  },
    ],
  },
  {
    title: 'Environmental Values',
    options: [
      { label: 'Recyclable',         count: 1620 },
      { label: 'Recycled Materials', count: 368  },
      { label: 'Plastic-Free',       count: 87   },
      { label: 'Biodegradable',      count: 143  },
    ],
  },
  {
    title: 'Social Values',
    options: [
      { label: 'Proudly South African', count: 1310 },
      { label: 'Locally Sourced',       count: 1210 },
      { label: 'Women-Owned',           count: 48   },
      { label: 'Fair Trade',            count: 39   },
    ],
  },
  {
    title: 'Rating filter',
    options: [
      { label: '5 stars', count: 473 },
      { label: '4 stars', count: 905 },
      { label: '3 stars', count: 512 },
    ],
  },
];

export const FilterSidebar = ({
  filters      = DEFAULT_FILTERS,
  resultCount  = 2095,
  onFilter,
}) => {
  const [search, setSearch] = useState('');

  const filtered = search
    ? filters.map(g => ({
        ...g,
        options: g.options.filter(o =>
          o.label.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter(g => g.options.length > 0)
    : filters;

  return (
    <div style={{
      width:      '263px',
      flexShrink: 0,
      background: 'var(--color-white)',
      fontFamily: 'var(--font-family-base)',
    }}>

      {/* Header — Filter title + result count */}
      <div style={{
        padding:    '0 13.65px',
        paddingTop: '12px',
        paddingBottom: '10px',
      }}>
        {/* "Filter" row with icon */}
        <div style={{
          display:    'flex',
          alignItems: 'center',
          gap:        '8px',
          marginBottom: '4px',
        }}>
          {/* Filter icon (≡ lines) */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#191919" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6"  x2="21" y2="6"  />
            <line x1="3" y1="12" x2="15" y2="12" />
            <line x1="3" y1="18" x2="10" y2="18" />
          </svg>
          <span style={{
            fontSize:   '20px',
            fontWeight: 'var(--font-weight-semibold)',
            color:      '#191919',
            fontFamily: 'var(--font-family-base)',
          }}>
            Filter
          </span>
        </div>

        {/* Found X results */}
        <div style={{
          fontSize:   '14px',
          fontWeight: 'var(--font-weight-bold)',
          color:      '#191919',
          fontFamily: 'var(--font-family-base)',
          marginBottom: '10px',
        }}>
          Found {resultCount.toLocaleString()} results
        </div>

        {/* Search Filters input */}
        <input
          type="text"
          placeholder="Search Filters"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            all:         'unset',
            display:     'block',
            width:       '100%',
            height:      '32px',
            background:  '#FFFFFF',
            border:      '0.64px solid #AEAEAE',
            borderRadius:'0px',
            padding:     '0 10px',
            boxSizing:   'border-box',
            fontSize:    '10px',
            fontWeight:  'var(--font-weight-regular)',
            color:       '#191919',
            fontFamily:  'var(--font-family-base)',
          }}
        />
      </div>

      {/* Filter groups */}
      {filtered.map((group, i) => (
        <FilterGroup
          key={i}
          title={group.title}
          options={group.options}
          defaultOpen={i === 0}
          onSelect={(label) => onFilter?.({ group: group.title, label })}
        />
      ))}
    </div>
  );
};

export default FilterSidebar;
