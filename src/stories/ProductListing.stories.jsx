import { ProductListing } from '../pages/ProductListing';

export default {
  title:      'Pages / Product Listing',
  component:  ProductListing,
  parameters: { layout: 'fullscreen' },
};

export const Default = () => <ProductListing />;
Default.storyName = 'Product Listing Page';
