import { SitewideBanner } from '../components/SitewideBanner/SitewideBanner';
import { GlobalNav }      from '../components/GlobalNav/GlobalNav';
import { ProductSlider }  from '../components/ProductSlider/ProductSlider';
import { Footer }         from '../components/Footer/Footer';

/* ─── mock data (placeholder imagery via picsum, as in the other experiment pages) ─── */

const CHRISTMAS_SPECIALS = [
  { title: 'Organic Festive Fruit Cake',               variant: '650g',         price: 'R119.00', originalPrice: 'R149.00', promoLabel: '20% off',              rating: '4.9', reviewCount: '142', imageSrc: 'https://picsum.photos/id/431/206/146' },
  { title: 'Free-Range Christmas Roast Chicken Rub',   variant: '80g',          price: 'R49.00',  originalPrice: 'R59.00',  promoLabel: '17% off',              rating: '4.7', reviewCount: '61',  imageSrc: 'https://picsum.photos/id/312/206/146' },
  { title: 'Beeswax Advent Candles',                   variant: 'Set of 24',    price: 'R189.00', originalPrice: 'R229.00', promoLabel: '-15% with promo code', rating: '4.8', reviewCount: '98',  imageSrc: 'https://picsum.photos/id/250/206/146' },
  { title: 'Organic Mulled Spice Blend',               variant: '100g',         price: 'R39.00',  originalPrice: 'R49.00',  promoLabel: '20% off',              rating: '4.9', reviewCount: '217', imageSrc: 'https://picsum.photos/id/1080/206/146' },
  { title: 'Sparkling Cranberry & Ginger Cordial',     variant: '4 x 300ml',    price: 'R99.00',  originalPrice: 'R125.00', promoLabel: 'Festive Deal',         rating: '4.6', reviewCount: '74',  imageSrc: 'https://picsum.photos/id/766/206/146' },
  { title: 'Reusable Christmas Gift Wrap Set',         variant: '3 rolls',      price: 'R65.00',  originalPrice: 'R85.00',  promoLabel: '24% off',              rating: '4.7', reviewCount: '39',  imageSrc: 'https://picsum.photos/id/106/206/146' },
  { title: 'Faithful Festive Fruit Punch',             variant: '1L',           price: 'R74.99',  originalPrice: 'R94.99',  promoLabel: '21% off',              rating: '4.6', reviewCount: '63',  imageSrc: 'https://picsum.photos/id/1060/206/146' },
];

const GIFTS_THEY_WILL_LOVE = [
  { title: 'Reusable Stainless Steel Water Bottle',  variant: '750ml · Sage', price: 'R249.00', rating: '4.9', reviewCount: '340', imageSrc: 'https://picsum.photos/id/367/206/146' },
  { title: 'Organic Cotton Produce Bags',            variant: 'Set of 5',     price: 'R119.00', rating: '4.8', reviewCount: '187', imageSrc: 'https://picsum.photos/id/175/206/146' },
  { title: 'Bamboo Journal',                         variant: 'A5 · Dotted',  price: 'R159.00', rating: '4.6', reviewCount: '62',  imageSrc: 'https://picsum.photos/id/24/206/146'  },
  { title: 'Zero-Waste Bathroom Gift Set',           variant: '6 pieces',     price: 'R299.00', rating: '4.9', reviewCount: '94',  imageSrc: 'https://picsum.photos/id/823/206/146' },
  { title: 'Indoor Herb Growing Kit',                variant: 'Basil · Mint', price: 'R189.00', rating: '4.5', reviewCount: '45',  imageSrc: 'https://picsum.photos/id/292/206/146' },
  { title: 'Soy Wax Candle',                         variant: 'Pine 220g',    price: 'R139.00', rating: '4.8', reviewCount: '121', imageSrc: 'https://picsum.photos/id/225/206/146' },
  { title: 'Organic Linen Sleep Mask',               variant: 'One size',     price: 'R109.00', rating: '4.7', reviewCount: '58',  imageSrc: 'https://picsum.photos/id/64/206/146'  },
];

const GIFT_GUIDES = [
  { label: 'For Food Lovers',        imageSrc: 'https://picsum.photos/id/102/640/360', href: '#' },
  { label: 'Stocking Fillers',       imageSrc: 'https://picsum.photos/id/1060/640/360', href: '#' },
  { label: 'Home for the Holidays',  imageSrc: 'https://picsum.photos/id/365/640/360', href: '#' },
];

/* ─── page ──────────────────────────────────────────────────────────────── */

export const ChristmasCelebration = () => (
  <div style={{ fontFamily: 'var(--font-family-base)', background: 'var(--color-grey-4)', minHeight: '100vh' }}>

    {/* Sitewide banner */}
    <SitewideBanner />

    {/* Sticky nav */}
    <div style={{ background: 'var(--color-white)', position: 'sticky', top: 0, zIndex: 100 }}>
      <GlobalNav cartCount={0} profileName="Guest" />
    </div>

    {/* ── Hero: split banner (ftn-02) ───────────────────────────────────── */}
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: 'var(--spacer-6) 48px 0', boxSizing: 'border-box' }}>
      <div style={{
        display:    'flex',
        height:     '460px',
        background: 'var(--color-ftn-green)',
        borderRadius: 'var(--radius-default)',
        overflow:   'hidden',
      }}>

        {/* Left: copy on FtN Green */}
        <div style={{
          flex:           '0 0 50%',
          padding:        'var(--spacer-3) var(--spacer-1)',
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'center',
          gap:            'var(--spacer-6)',
          boxSizing:      'border-box',
        }}>
          <span style={{
            alignSelf:     'flex-start',
            background:    'var(--color-soft-tones-2)',
            color:         'var(--color-ftn-green)',
            fontSize:      'var(--font-size-desktop-label)',
            fontWeight:    'var(--font-weight-semibold)',
            textTransform: 'uppercase',
            padding:       'var(--spacer-10) var(--spacer-9)',
            borderRadius:  'var(--radius-full)',
          }}>
            Christmas · 25 December 2026
          </span>

          <h1 style={{
            margin:     0,
            fontSize:   'var(--font-size-desktop-h1)',
            fontWeight: 'var(--font-weight-bold)',
            lineHeight: 'var(--line-height-120)',
            color:      'var(--color-white)',
          }}>
            Give the season something good
          </h1>

          <p style={{
            margin:     0,
            fontSize:   'var(--font-size-desktop-body-1)',
            fontWeight: 'var(--font-weight-regular)',
            lineHeight: 'var(--line-height-150)',
            color:      'var(--color-white)',
            maxWidth:   '440px',
          }}>
            Naturally made gifts, pantry treats and everyday essentials for the people you love, delivered carbon neutral.
          </p>

          <div>
            <a href="#specials" style={{
              display:        'inline-flex',
              alignItems:     'center',
              justifyContent: 'center',
              height:         'var(--btn-height)',
              padding:        '0 var(--spacer-7)',
              background:     'transparent',
              color:          'var(--color-white)',
              border:         '1px solid var(--color-white)',
              borderRadius:   'var(--radius-default)',
              fontSize:       'var(--font-size-desktop-btn-1)',
              fontWeight:     'var(--font-weight-bold)',
              textTransform:  'uppercase',
              textDecoration: 'none',
              whiteSpace:     'nowrap',
            }}>
              Shop Christmas
            </a>
          </div>
        </div>

        {/* Right: hero image */}
        <div style={{ flex: '1 1 50%', overflow: 'hidden' }}>
          <img
            src="https://picsum.photos/id/292/900/460"
            alt="Festive table with naturally made gifts"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>
    </div>

    {/* ── Gift guides: category tiles (ftn-03) ──────────────────────────── */}
    <section style={{ maxWidth: '1440px', margin: '0 auto', padding: 'var(--spacer-3) 48px 0', boxSizing: 'border-box' }}>
      <h2 style={{
        margin:     '0 0 var(--spacer-5)',
        fontSize:   'var(--font-size-desktop-h2)',
        fontWeight: 'var(--font-weight-bold)',
        lineHeight: 'var(--line-height-120)',
        color:      'var(--color-ftn-green)',
      }}>
        Gift guides for the season
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacer-5)' }}>
        {GIFT_GUIDES.map((guide) => (
          <a key={guide.label} href={guide.href} style={{
            display:        'block',
            textDecoration: 'none',
            background:     'var(--color-white)',
            borderRadius:   'var(--radius-default)',
            overflow:       'hidden',
          }}>
            <img
              src={guide.imageSrc}
              alt=""
              style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
            />
            <div style={{
              background:    'var(--color-ftn-green)',
              color:         'var(--color-white)',
              padding:       'var(--spacer-7) 0',
              textAlign:     'center',
              fontSize:      'var(--font-size-desktop-h5)',
              fontWeight:    'var(--font-weight-bold)',
              textTransform: 'uppercase',
            }}>
              {guide.label}
            </div>
          </a>
        ))}
      </div>
    </section>

    {/* ── Product sliders (ftn-04 / ftn-06) ─────────────────────────────── */}
    <div style={{ maxWidth: '1440px', margin: '0 auto', padding: 'var(--spacer-3) 48px 0', boxSizing: 'border-box' }}>

      <section id="specials" style={{ marginBottom: 'var(--spacer-5)' }}>
        <ProductSlider
          title="Christmas Specials"
          linkLabel="See All"
          linkHref="#"
          products={CHRISTMAS_SPECIALS}
        />
      </section>

      <section id="gifts" style={{ marginBottom: 'var(--spacer-5)' }}>
        <ProductSlider
          title="Gifts They Will Love"
          linkLabel="See All"
          linkHref="#"
          products={GIFTS_THEY_WILL_LOVE}
        />
      </section>
    </div>

    {/* ── Festive band: Soft Green, free delivery message ──────────────── */}
    <div style={{ background: 'var(--color-soft-tones-2)', marginTop: 'var(--spacer-3)' }}>
      <div style={{
        maxWidth:   '1440px',
        margin:     '0 auto',
        padding:    'var(--spacer-3) 48px',
        boxSizing:  'border-box',
        display:    'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap:        'var(--spacer-5)',
      }}>
        <div>
          <h2 style={{
            margin:     0,
            fontSize:   'var(--font-size-desktop-h3)',
            fontWeight: 'var(--font-weight-bold)',
            lineHeight: 'var(--line-height-125)',
            color:      'var(--color-ftn-green)',
          }}>
            Free delivery on orders over R400
          </h2>
          <p style={{
            margin:     'var(--spacer-9) 0 0',
            fontSize:   'var(--font-size-desktop-body-1)',
            lineHeight: 'var(--line-height-150)',
            color:      'var(--color-grey-1)',
          }}>
            Every delivery is carbon neutral. Gift wrapping is available at checkout.
          </p>
        </div>

        <a href="#gifts" style={{
          display:        'inline-flex',
          alignItems:     'center',
          justifyContent: 'center',
          flexShrink:     0,
          height:         'var(--btn-height)',
          padding:        '0 var(--spacer-7)',
          background:     'var(--color-white)',
          color:          'var(--color-ftn-green)',
          border:         '1px solid var(--color-ftn-green)',
          borderRadius:   'var(--radius-default)',
          fontSize:       'var(--font-size-desktop-btn-1)',
          fontWeight:     'var(--font-weight-bold)',
          textTransform:  'uppercase',
          textDecoration: 'none',
          whiteSpace:     'nowrap',
        }}>
          Shop Gifts
        </a>
      </div>
    </div>

    <Footer />
  </div>
);

export default ChristmasCelebration;
