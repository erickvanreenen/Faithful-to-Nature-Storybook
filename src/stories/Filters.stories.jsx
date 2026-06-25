import { FilterGroup }    from '../components/Filter/FilterGroup';
import { FilterSidebar }  from '../components/Filter/FilterSidebar';
import { CatalogueHeader } from '../components/Filter/CatalogueHeader';
import { ShowMore }       from '../components/Filter/ShowMore';
import { CategoryTabs }   from '../components/Catalogue/CategoryTabs';
import { ProductCard }    from '../components/ProductCard/ProductCard';

export default {
  title:      'Design System / Filters',
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => (
    <div style={{ background: '#F6F5F1', padding: '32px 48px', fontFamily: 'var(--font-family-base)' }}>
      <Story />
    </div>
  )],
};

const FOOD_CATEGORIES = [
  { label: 'Shop All' },
  { label: 'Drinks' },
  { label: 'Baking & Cooking' },
  { label: 'Snacks' },
  { label: 'Chocolate, Sweets & Biscuits' },
  { label: 'Breakfast Cereals' },
  { label: 'Honey, Nut Butters & Spreads' },
  { label: 'Food DIY' },
  { label: 'Baby & Kids Food' },
];

const MOCK_PRODUCTS = [
  { title: 'Pure Beginnings Body Wash',        variant: '500ml',  price: 'R165.00', rating: '4.7', reviewCount: '19' },
  { title: 'Akan Moringa Tea',                 variant: '40g',    price: 'R58.27',  originalPrice: 'R68.55', promoLabel: '-15% WITH PROMO CODE', rating: '5',   reviewCount: '3'  },
  { title: 'Komati Desiccated Coconut',        variant: '200g',   price: 'R44.19',  originalPrice: 'R51.99', promoLabel: '-15% WITH PROMO CODE', rating: '4.5', reviewCount: '4'  },
  { title: 'Simply Bee Raw Honey',             variant: '500g',   price: 'R149.99', rating: '4.8', reviewCount: '32' },
  { title: 'Earthsap Dishwashing Liquid',      variant: '750ml',  price: 'R69.95',  rating: '4.6', reviewCount: '55' },
  { title: 'Health Connection Stevia Powder',  variant: '25g',    price: 'R97.75',  originalPrice: 'R115.00', promoLabel: '-15% WITH PROMO CODE', rating: '5',   reviewCount: '7'  },
  { title: 'Rawbiotics Daily Probiotic',       variant: '500ml',  price: 'R189.00', originalPrice: 'R220.00', promoLabel: '15% OFF',              rating: '4.9', reviewCount: '88' },
  { title: 'ButtaNutt Macadamia Nut Butter',   variant: '250g',   price: 'R119.00', rating: '4.7', reviewCount: '41' },
];

/* ─── Filter Group ─── */
export const FilterGroupStory = () => (
  <FilterGroup
    title="Categories"
    options={[
      { label: 'Baking & Cooking',             count: 934 },
      { label: 'Breakfast Cereals',            count: 96  },
      { label: 'Chocolate, Sweets & Biscuits', count: 145 },
      { label: 'Condiments & Sauces',          count: 88  },
      { label: 'Dairy Alternatives',           count: 72  },
    ]}
    defaultOpen
  />
);
FilterGroupStory.storyName = 'Filter Group';

/* ─── Filter Sidebar ─── */
export const FilterSidebarStory = () => <FilterSidebar />;
FilterSidebarStory.storyName = 'Filter Sidebar';

/* ─── Catalogue Header ─── */
export const CatalogueHeaderStory = () => (
  <div style={{ width: '1004px' }}>
    <CatalogueHeader resultCount={2098} sortValue="Recommended" />
  </div>
);
CatalogueHeaderStory.storyName = 'Catalogue Header';

/* ─── Category Tabs ─── */
export const CategoryTabsStory = () => (
  <CategoryTabs
    heading="Shop by Category"
    categories={FOOD_CATEGORIES}
    active="Shop All"
  />
);
CategoryTabsStory.storyName = 'Category Tabs';

/* ─── Show More ─── */
export const ShowMoreDefault = () => <ShowMore />;
ShowMoreDefault.storyName = 'Show More';

/* ─── Full Catalogue Layout ─── */
export const FullCatalogue = () => (
  <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', marginTop: '-32px' }}>

    {/* Left — Filter sidebar */}
    <FilterSidebar resultCount={2095} />

    {/* Right — Category tabs + results + grid */}
    <div style={{ flex: 1, minWidth: 0 }}>

      {/* Shop by Category tabs */}
      <CategoryTabs
        heading="Shop by Category"
        categories={FOOD_CATEGORIES}
        active="Shop All"
      />

      {/* Results count + sort */}
      <CatalogueHeader resultCount={2098} sortValue="Recommended" />

      {/* Product grid */}
      <div style={{
        display:             'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap:                 '28px',
      }}>
        {MOCK_PRODUCTS.map((p, i) => <ProductCard key={i} {...p} />)}
      </div>

      {/* Show more */}
      <ShowMore />
    </div>

  </div>
);
FullCatalogue.storyName = 'Full Catalogue Layout';
FullCatalogue.decorators = [(Story) => (
  <div style={{ background: '#F6F5F1', padding: '0 48px', fontFamily: 'var(--font-family-base)' }}>
    <Story />
  </div>
)];
