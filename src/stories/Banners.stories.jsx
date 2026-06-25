import { SitewideBanner } from '../components/SitewideBanner/SitewideBanner';
import { SectionHeading }  from '../components/SectionHeading/SectionHeading';

export default {
  title:      'Design System / Banners & Headings',
  parameters: { layout: 'fullscreen' },
};

const Pad = ({ children }) => (
  <div style={{ padding: '24px', fontFamily: "'Proxima Nova', 'Open Sans', sans-serif" }}>
    {children}
  </div>
);

/* ─── Sitewide Banner ─── */
export const SitewideBannerStory = () => <SitewideBanner />;
SitewideBannerStory.storyName = 'Sitewide Banner';

/* ─── Section Heading ─── */
export const SectionHeadingWithLink = () => (
  <Pad>
    <SectionHeading title="Shop This Week's Top Deals" linkLabel="See All" linkHref="/specials" />
    <SectionHeading title="Previously Bought" linkLabel="See All" linkHref="/account" />
    <SectionHeading title="Bestselling New Arrivals" linkLabel="More Products" linkHref="/new-products" />
  </Pad>
);
SectionHeadingWithLink.storyName = 'Section Heading — with link';

export const SectionHeadingNoLink = () => (
  <Pad>
    <SectionHeading title="What Makes Us Different" />
    <SectionHeading title="Conscious products in your Favourite Categories" />
  </Pad>
);
SectionHeadingNoLink.storyName = 'Section Heading — no link';

import { SplitImageBanner } from '../components/SplitImageBanner/SplitImageBanner';

/* ─── Split Image Banner ─── */
export const SplitImageBannerStory = () => (
  <SplitImageBanner
    heading="Sustainable Home & Lifestyle Essentials to Make Mindful Living Effortless"
    body="Discover our best-selling home and lifestyle essentials, thoughtfully chosen to bring comfort, care and conscious living into every corner of your home."
    ctaLabel="SHOP NOW"
    ctaHref="/home-and-lifestyle"
  />
);
SplitImageBannerStory.storyName = 'Split Image Banner';

import { HeroCarousel } from '../components/HeroCarousel/HeroCarousel';

/* ─── Hero Image Carousel ─── */
export const HeroCarouselStory = () => (
  <HeroCarousel
    slides={[
      { alt: "Father's Day",           bg: '#D9EDE7' },
      { alt: 'Nutraceuticals',          bg: '#D4EBF9' },
      { alt: 'Skoon Essentials Launch', bg: '#EAF7C9' },
      { alt: 'FtN Nuts',                bg: '#FFF6D1' },
      { alt: 'Soaring Free',            bg: '#C3F4D9' },
    ]}
  />
);
HeroCarouselStory.storyName = 'Hero Image Carousel';

import { DealCard } from '../components/DealCard/DealCard';

/* ─── Deal Card ─── */
export const DealCards = () => (
  <Pad>
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      <DealCard title="30% Off Select Lelive." href="/specials/30-off-select-lelive" />
      <DealCard title="20% Off Clipper Tea Range" href="/specials/20-off-clipper-tea-range" />
      <DealCard title="50% Off FtN Goddess Cups" href="/specials/50-off-ftn-goddess-cups" />
      <DealCard title="Buy 2 x Di Napoli Range & Get 15% Off" href="/specials/di-napoli" />
    </div>
  </Pad>
);
DealCards.storyName = 'Deal Card';

import { ChipSection } from '../components/ChipSection/ChipSection';

/* ─── Chip / Values Section ─── */
export const ChipSectionStory = () => <ChipSection />;
ChipSectionStory.storyName = 'Chip / Values Section';

import { CategoryImageLink } from '../components/CategoryImageLink/CategoryImageLink';

/* ─── Category Image Link ─── */
export const CategoryImageLinks = () => (
  <Pad>
    <SectionHeading title="Conscious products in your Favourite Categories" centered />
    <div style={{
      display:             'grid',
      gridTemplateColumns: '432px 432px 432px',
      gap:                 '24px',
    }}>
      <CategoryImageLink label="Good Food"                    href="/food" />
      <CategoryImageLink label="Clean Beauty"                 href="/body-beauty" />
      <CategoryImageLink label="Vitamins"                     href="/health/vitamins-supplements" />
      <CategoryImageLink label="Earth-Friendly Home Cleaning" href="/home-and-lifestyle/household-cleaning" />
      <CategoryImageLink label="Baby & Kids"                  href="/baby-and-kids" />
      <CategoryImageLink label="Gut Health"                   href="/health/gut-health" />
    </div>
  </Pad>
);
CategoryImageLinks.storyName = 'Category Image Link';
