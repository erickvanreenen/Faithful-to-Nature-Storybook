import { useState } from 'react';
import { SitewideBanner }   from '../components/SitewideBanner/SitewideBanner';
import { GlobalNav }         from '../components/GlobalNav/GlobalNav';
import { SectionHeading }    from '../components/SectionHeading/SectionHeading';
import { ProductCard }       from '../components/ProductCard/ProductCard';
import { ChipSection }       from '../components/ChipSection/ChipSection';
import { Footer }            from '../components/Footer/Footer';

const MOCK_PRODUCTS = [
  { title: 'Akan Moringa with Cape Buchu & Hibiscus Tea', variant: '40g, 20 Bags',   price: 'R58.27',  originalPrice: 'R68.55', promoLabel: '-15% with promo code', rating: '5',   reviewCount: '3'  },
  { title: 'Pure Beginnings Body Wash - I am Fresh',       variant: '500ml',          price: 'R165.00', originalPrice: null,     promoLabel: null,                   rating: '4.7', reviewCount: '19' },
  { title: 'Honest Organic Nappy Cream',                   variant: '75g',            price: 'R89.99',  originalPrice: null,     promoLabel: null,                   rating: '4.3', reviewCount: '76' },
  { title: 'Komati Desiccated Coconut',                    variant: '200g',           price: 'R44.19',  originalPrice: 'R51.99', promoLabel: '-15% with promo code', rating: '4.5', reviewCount: '4'  },
  { title: 'Health Connection Stevia Powder',              variant: '25g',            price: 'R97.75',  originalPrice: 'R115.00',promoLabel: '-15% with promo code', rating: '5',   reviewCount: '7'  },
  { title: 'Stonelodge Goji-Ginger Granola Snack Pouch',   variant: '40g',            price: 'R21.24',  originalPrice: 'R24.99', promoLabel: 'Save 15%',            rating: '0',   reviewCount: '0'  },
  { title: 'Simply Bee Raw Honey',                         variant: '500g',           price: 'R149.99', originalPrice: null,     promoLabel: null,                   rating: '4.8', reviewCount: '32' },
  { title: 'Earthsap Dishwashing Liquid - Citrus',         variant: '750ml',          price: 'R69.95',  originalPrice: null,     promoLabel: null,                   rating: '4.6', reviewCount: '55' },
  { title: 'Rawbiotics Daily Probiotic',                   variant: '500ml',          price: 'R189.00', originalPrice: 'R220.00',promoLabel: '15% off',              rating: '4.9', reviewCount: '88' },
  { title: 'ButtaNutt Macadamia Nut Butter',               variant: '250g',           price: 'R119.00', originalPrice: null,     promoLabel: null,                   rating: '4.7', reviewCount: '41' },
  { title: 'Faithful to Nature Organic Oats',              variant: '1kg',            price: 'R54.99',  originalPrice: null,     promoLabel: null,                   rating: '4.5', reviewCount: '23' },
  { title: 'Skoon Vitamin C Face Serum',                   variant: '30ml',           price: 'R345.00', originalPrice: 'R399.00',promoLabel: 'Save 14%',            rating: '4.8', reviewCount: '14' },
];

const SORT_OPTIONS = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Best Rated', 'Newest'];

const FILTER_CHIPS = [
  { label: 'Vegan',        href: '/values/vegan' },
  { label: 'Gluten-Free',  href: '/shop-by-diet/gluten-free' },
  { label: 'Organic',      href: '/values/organic' },
  { label: 'Plastic-Free', href: '/values/plastic-free' },
  { label: 'Cruelty-Free', href: '/values/cruelty-free' },
  { label: 'GMO-Free',     href: '/values/gmo-free' },
];

export const ProductListing = () => {
  const [sort, setSort] = useState('Relevance');

  return (
    <div style={{ fontFamily: 'var(--font-family-base)', background: 'var(--color-grey-4)', minHeight: '100vh' }}>

      {/* Top bar */}
      <SitewideBanner />

      {/* Global navigation */}
      <div style={{ background: 'var(--color-white)', position: 'sticky', top: 0, zIndex: 100 }}>
        <GlobalNav cartCount={2} profileName="Erick" />
      </div>

      {/* Page content */}
      <div style={{ maxWidth: '1344px', margin: '0 auto', padding: '32px 48px', boxSizing: 'border-box' }}>

        {/* Page heading */}
        <SectionHeading
          title="All Products"
          linkLabel={`${MOCK_PRODUCTS.length} items`}
        />

        {/* Filter / sort bar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          margin: 'var(--spacer-7) 0',
          padding: 'var(--spacer-8) var(--spacer-7)',
          background: 'var(--color-white)',
          borderRadius: 'var(--radius-default)',
          border: '0.5px solid var(--color-grey-3)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacer-8)' }}>
            <span style={{ fontSize: 'var(--font-size-desktop-body-2)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-grey-1)' }}>
              Filter:
            </span>
            {['All', 'On Sale', 'New', 'In Stock'].map(f => (
              <button key={f} style={{
                all: 'unset', cursor: 'pointer',
                fontSize: 'var(--font-size-desktop-body-2)',
                color: f === 'All' ? 'var(--color-ftn-green)' : 'var(--color-grey-1)',
                fontWeight: f === 'All' ? 'var(--font-weight-bold)' : 'var(--font-weight-regular)',
                borderBottom: f === 'All' ? '2px solid var(--color-ftn-green)' : 'none',
                paddingBottom: '2px',
                fontFamily: 'var(--font-family-base)',
              }}>{f}</button>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacer-9)' }}>
            <span style={{ fontSize: 'var(--font-size-desktop-body-2)', color: 'var(--color-grey-1)', fontFamily: 'var(--font-family-base)' }}>
              Sort by:
            </span>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              style={{
                fontFamily: 'var(--font-family-base)',
                fontSize: 'var(--font-size-desktop-body-2)',
                color: 'var(--color-aqua-deep)',
                fontWeight: 'var(--font-weight-semibold)',
                border: 'none', background: 'transparent', cursor: 'pointer', outline: 'none',
              }}
            >
              {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>

        {/* Product grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
          gap: 'var(--spacer-6)',
          marginBottom: 'var(--spacer-4)',
        }}>
          {MOCK_PRODUCTS.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>

        {/* Values chip section */}
        <ChipSection
          heading="Shop by Diet, Values & Lifestyle"
          chips={FILTER_CHIPS}
        />

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default ProductListing;
