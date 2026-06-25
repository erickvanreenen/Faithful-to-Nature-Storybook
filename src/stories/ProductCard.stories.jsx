import { ProductCard } from '../components/ProductCard/ProductCard';

export default {
  title:     'Design System / Product Card',
  component: ProductCard,
  parameters: { layout: 'padded' },
  argTypes: {
    title:         { control: 'text' },
    variant:       { control: 'text' },
    price:         { control: 'text' },
    originalPrice: { control: 'text' },
    promoLabel:    { control: 'text' },
    rating:        { control: 'text' },
    reviewCount:   { control: 'text' },
  },
};

/* ─── Sandbox ─── */
export const Sandbox = {
  args: {
    title:         'Pure Beginnings Body Wash - I am Fresh',
    variant:       '500ml',
    price:         'R165.00',
    originalPrice: '',
    promoLabel:    '',
    rating:        '4.7',
    reviewCount:   '19',
  },
};

const font = "'Proxima Nova', 'Open Sans', sans-serif";
const Row = ({ title, children }) => (
  <div style={{ marginBottom: 40, fontFamily: font }}>
    <p style={{ margin: '0 0 12px', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B6B69' }}>{title}</p>
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start' }}>
      {children}
    </div>
  </div>
);

/* ─── All variants ─── */
export const AllVariants = () => (
  <div>
    <Row title="Standard — full price">
      <ProductCard
        title="Pure Beginnings Body Wash - I am Fresh"
        variant="500ml"
        price="R165.00"
        rating="4.7"
        reviewCount="19"
      />
      <ProductCard
        title="Honest Organic Nappy Cream"
        variant="75g"
        price="R89.99"
        rating="4.3"
        reviewCount="76"
      />
    </Row>
    <Row title="With promo badge + sale price">
      <ProductCard
        title="Akan Moringa with Cape Buchu & Hibiscus Tea"
        variant="40g, 20 Bags"
        price="R58.27"
        originalPrice="R68.55"
        promoLabel="-15% with promo code"
        rating="5"
        reviewCount="3"
      />
      <ProductCard
        title="Faithful to Nature Reusable Produce Bags"
        variant="Set of 5"
        price="R49.99"
        originalPrice="R79.99"
        promoLabel="Save 38%"
        rating="4.8"
        reviewCount="42"
      />
    </Row>
  </div>
);
