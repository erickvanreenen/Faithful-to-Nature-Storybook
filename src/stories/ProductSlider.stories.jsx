import { ProductSlider } from '../components/ProductSlider/ProductSlider';

export default {
  title:      'Design System / Product Slider',
  component:  ProductSlider,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'white' },
  },
  decorators: [
    (Story) => (
      <div style={{ background: 'var(--color-grey-4)', padding: '32px 48px' }}>
        <Story />
      </div>
    ),
  ],
};

const MOCK_PRODUCTS = [
  { title: 'Pure Beginnings Body Wash - I am Fresh',       variant: '500ml',     price: 'R165.00', rating: '4.7', reviewCount: '19' },
  { title: 'Akan Moringa with Cape Buchu & Hibiscus Tea',  variant: '40g, 20 Bags', price: 'R58.27', originalPrice: 'R68.55', promoLabel: '-15% with promo code', rating: '5', reviewCount: '3' },
  { title: 'Komati Desiccated Coconut',                    variant: '200g',      price: 'R44.19',  originalPrice: 'R51.99', promoLabel: '-15% with promo code', rating: '4.5', reviewCount: '4' },
  { title: 'Simply Bee Raw Honey',                         variant: '500g',      price: 'R149.99', rating: '4.8', reviewCount: '32' },
  { title: 'Earthsap Dishwashing Liquid - Citrus',         variant: '750ml',     price: 'R69.95',  rating: '4.6', reviewCount: '55' },
  { title: 'Health Connection Stevia Powder',              variant: '25g',       price: 'R97.75',  originalPrice: 'R115.00', promoLabel: '-15% with promo code', rating: '5', reviewCount: '7' },
  { title: 'Rawbiotics Daily Probiotic',                   variant: '500ml',     price: 'R189.00', originalPrice: 'R220.00', promoLabel: '15% off', rating: '4.9', reviewCount: '88' },
  { title: 'ButtaNutt Macadamia Nut Butter',               variant: '250g',      price: 'R119.00', rating: '4.7', reviewCount: '41' },
];

export const PreviouslyBought = () => (
  <ProductSlider
    title="Previously Bought"
    linkLabel="See All"
    linkHref="/account"
    products={MOCK_PRODUCTS}
  />
);

export const Bestsellers = () => (
  <ProductSlider
    title="Bestselling New Arrivals"
    linkLabel="More Products"
    linkHref="/new-products"
    products={[...MOCK_PRODUCTS].reverse()}
  />
);

export const NoLink = () => (
  <ProductSlider
    title="You May Also Like"
    products={MOCK_PRODUCTS.slice(0, 5)}
  />
);
