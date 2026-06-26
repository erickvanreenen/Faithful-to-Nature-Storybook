import { SitewideBanner } from '../components/SitewideBanner/SitewideBanner';
import { GlobalNav }      from '../components/GlobalNav/GlobalNav';
import { ProductSlider }  from '../components/ProductSlider/ProductSlider';
import { Footer }         from '../components/Footer/Footer';

/* ─── mock data ─────────────────────────────────────────────────────────── */

const NYE_SPECIALS = [
  { title: 'Woolworths Organic Sparkling Grape',     variant: '750ml',        price: 'R89.00',  originalPrice: 'R119.00', promoLabel: '25% off',              rating: '4.8', reviewCount: '128', imageSrc: 'https://picsum.photos/id/431/206/146' },
  { title: 'Raw Cacao & Almond Festive Truffle Box', variant: '12 pack',      price: 'R145.00', originalPrice: 'R189.00', promoLabel: '23% off',              rating: '4.9', reviewCount: '96',  imageSrc: 'https://picsum.photos/id/312/206/146' },
  { title: 'Hand-Rolled Beeswax Celebration Candles',variant: 'Set of 4',     price: 'R79.00',  originalPrice: 'R99.00',  promoLabel: '-20% with promo code', rating: '4.6', reviewCount: '54',  imageSrc: 'https://picsum.photos/id/250/206/146' },
  { title: 'Organic Mixed Nut & Berry Party Platter',variant: '500g',         price: 'R159.00', originalPrice: 'R199.00', promoLabel: '20% off',              rating: '4.9', reviewCount: '212', imageSrc: 'https://picsum.photos/id/1080/206/146' },
  { title: 'Natural Sparkling Botanical Tonic',      variant: '4 x 300ml',    price: 'R99.00',  originalPrice: 'R129.00', promoLabel: 'Festive Deal',         rating: '4.5', reviewCount: '71',  imageSrc: 'https://picsum.photos/id/766/206/146' },
  { title: 'Eco Confetti & Biodegradable Party Kit', variant: '1 kit',        price: 'R65.00',  originalPrice: 'R85.00',  promoLabel: '24% off',              rating: '4.7', reviewCount: '38',  imageSrc: 'https://picsum.photos/id/106/206/146' },
  { title: 'Faithful Sparkling Fruit Punch',         variant: '1L',           price: 'R74.99',  originalPrice: 'R94.99',  promoLabel: '21% off',              rating: '4.6', reviewCount: '63',  imageSrc: 'https://picsum.photos/id/1060/206/146' },
];

const NEW_YEAR_IDEAS = [
  { title: 'Reusable Stainless Steel Water Bottle',  variant: '750ml · Sage', price: 'R249.00', rating: '4.9', reviewCount: '340', imageSrc: 'https://picsum.photos/id/367/206/146' },
  { title: 'Organic Cotton Reusable Produce Bags',   variant: 'Set of 5',     price: 'R119.00', rating: '4.8', reviewCount: '187', imageSrc: 'https://picsum.photos/id/175/206/146' },
  { title: 'Bamboo Daily Habit Tracker Journal',     variant: 'A5 · 90 days', price: 'R159.00', rating: '4.6', reviewCount: '62',  imageSrc: 'https://picsum.photos/id/24/206/146'  },
  { title: 'Zero-Waste Bathroom Starter Kit',        variant: '6 pieces',     price: 'R299.00', rating: '4.9', reviewCount: '94',  imageSrc: 'https://picsum.photos/id/823/206/146' },
  { title: 'Indoor Herb Growing Kit',                variant: 'Basil · Mint', price: 'R189.00', rating: '4.5', reviewCount: '45',  imageSrc: 'https://picsum.photos/id/292/206/146' },
  { title: 'Natural Soy Wax Reading Candle',         variant: 'Lavender 220g',price: 'R139.00', rating: '4.8', reviewCount: '121', imageSrc: 'https://picsum.photos/id/225/206/146' },
  { title: 'Organic Linen Sleep Mask',               variant: 'One size',     price: 'R109.00', rating: '4.7', reviewCount: '58',  imageSrc: 'https://picsum.photos/id/64/206/146'  },
];

const BETTER_HEALTH = [
  { title: 'Rawbiotics Daily Probiotic',             variant: '500ml',        price: 'R161.15', originalPrice: 'R189.00', promoLabel: '15% off', rating: '4.9', reviewCount: '88',  imageSrc: 'https://picsum.photos/id/539/206/146' },
  { title: 'Organic Plant-Based Protein Powder',     variant: 'Vanilla · 1kg',price: 'R379.00', originalPrice: 'R429.00', promoLabel: '12% off', rating: '4.9', reviewCount: '415', imageSrc: 'https://picsum.photos/id/1084/206/146' },
  { title: 'Marine Collagen Glow Supplement',        variant: '200g',         price: 'R449.00', rating: '4.8', reviewCount: '268', imageSrc: 'https://picsum.photos/id/40/206/146'  },
  { title: 'Wholefood Multivitamin Capsules',        variant: '60 caps',      price: 'R229.00', rating: '4.6', reviewCount: '156', imageSrc: 'https://picsum.photos/id/365/206/146' },
  { title: 'Organic Spirulina & Chlorella Tablets',  variant: '120 tabs',     price: 'R199.00', originalPrice: 'R249.00', promoLabel: '20% off', rating: '4.9', reviewCount: '203', imageSrc: 'https://picsum.photos/id/326/206/146' },
  { title: 'Magnesium Sleep & Recovery Powder',      variant: 'Berry · 300g', price: 'R269.00', rating: '4.8', reviewCount: '178', imageSrc: 'https://picsum.photos/id/431/206/146' },
  { title: 'Akan Moringa with Hibiscus Tea',         variant: '40g, 20 Bags', price: 'R58.27',  originalPrice: 'R68.55',  promoLabel: '-15% with promo code', rating: '5', reviewCount: '3', imageSrc: 'https://picsum.photos/id/225/206/146' },
];

/* ─── page ──────────────────────────────────────────────────────────────── */

export const NewYearsEve = () => (
  <div style={{ fontFamily: 'var(--font-family-base)', background: 'var(--color-grey-4)', minHeight: '100vh' }}>

    {/* Sitewide banner */}
    <SitewideBanner />

    {/* Sticky nav */}
    <div style={{ background: 'var(--color-white)', position: 'sticky', top: 0, zIndex: 100 }}>
      <GlobalNav cartCount={3} profileName="Erick" />
    </div>

    {/* ── Hero Banner ───────────────────────────────────────────────────── */}
    <div style={{ background: 'var(--color-aqua-deep)', width: '100%' }}>
      <div style={{
        maxWidth: '1344px',
        margin:   '0 auto',
        display:  'flex',
        height:   '460px',
        overflow: 'hidden',
      }}>

        {/* Left: copy */}
        <div style={{
          flex:           '0 0 54%',
          padding:        '56px 64px',
          display:        'flex',
          flexDirection:  'column',
          justifyContent: 'center',
          gap:            '22px',
          boxSizing:      'border-box',
        }}>
          <span style={{
            alignSelf:     'flex-start',
            background:    'var(--color-orange)',
            color:         'var(--color-white)',
            fontSize:      '11px',
            fontWeight:    'var(--font-weight-bold)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding:       '5px 14px',
            borderRadius:  'var(--radius-full)',
            fontFamily:    'var(--font-family-base)',
          }}>
            New Year's Eve · 31 December 2026
          </span>

          <h1 style={{
            margin:        0,
            fontSize:      '46px',
            fontWeight:    'var(--font-weight-bold)',
            color:         'var(--color-cream)',
            lineHeight:    'var(--line-height-120)',
            letterSpacing: 'var(--letter-spacing-tight)',
            fontFamily:    'var(--font-family-base)',
          }}>
            Ring in 2027 the Natural Way
          </h1>

          <p style={{
            margin:     0,
            fontSize:   'var(--font-size-desktop-body-1)',
            fontWeight: 'var(--font-weight-regular)',
            color:      'rgba(255,246,209,0.72)',
            lineHeight: 'var(--line-height-150)',
            fontFamily: 'var(--font-family-base)',
            maxWidth:   '430px',
          }}>
            Celebrate the turn of the year with organic treats, mindful gifting and feel-good essentials — hand-picked to start your new year on a wholesome note.
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="#specials" style={{
              display:        'inline-flex',
              alignItems:     'center',
              justifyContent: 'center',
              height:         '44px',
              padding:        '0 28px',
              background:     'var(--color-ftn-green)',
              color:          'var(--color-white)',
              fontSize:       '13px',
              fontWeight:     'var(--font-weight-bold)',
              fontFamily:     'var(--font-family-base)',
              letterSpacing:  '0.04em',
              textTransform:  'uppercase',
              border:         '1.6px solid var(--color-ftn-green)',
              borderRadius:   'var(--radius-default)',
              textDecoration: 'none',
              whiteSpace:     'nowrap',
            }}>
              Shop New Year's Eve
            </a>

            <a href="#health" style={{
              display:        'inline-flex',
              alignItems:     'center',
              justifyContent: 'center',
              height:         '44px',
              padding:        '0 28px',
              background:     'transparent',
              color:          'var(--color-cream)',
              fontSize:       '13px',
              fontWeight:     'var(--font-weight-bold)',
              fontFamily:     'var(--font-family-base)',
              letterSpacing:  '0.04em',
              textTransform:  'uppercase',
              border:         '1.6px solid rgba(255,246,209,0.4)',
              borderRadius:   'var(--radius-default)',
              textDecoration: 'none',
              whiteSpace:     'nowrap',
            }}>
              New Year Resolutions
            </a>
          </div>

          <p style={{
            margin:     0,
            fontSize:   '12px',
            color:      'rgba(255,246,209,0.42)',
            fontFamily: 'var(--font-family-base)',
          }}>
            Free delivery on orders over R450 · Order before 29 Dec for New Year delivery
          </p>
        </div>

        {/* Right: hero image */}
        <div style={{ flex: '0 0 46%', overflow: 'hidden', position: 'relative' }}>
          <img
            src="https://picsum.photos/id/431/680/460"
            alt="New Year's Eve celebration"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position:   'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(32,75,74,0.35) 0%, transparent 40%)',
          }} />
        </div>
      </div>
    </div>

    {/* ── Content: three product sliders ────────────────────────────────── */}
    <div style={{ maxWidth: '1344px', margin: '0 auto', padding: '48px 48px 0', boxSizing: 'border-box' }}>

      <section id="specials" style={{ marginBottom: '32px' }}>
        <ProductSlider
          title="New Year's Eve Specials"
          linkLabel="See All"
          linkHref="#"
          products={NYE_SPECIALS}
        />
      </section>

      <section id="ideas" style={{ marginBottom: '32px' }}>
        <ProductSlider
          title="Ideas for the New Year"
          linkLabel="See All"
          linkHref="#"
          products={NEW_YEAR_IDEAS}
        />
      </section>
    </div>

    {/* Better Health — tinted full-width band */}
    <div id="health" style={{ background: 'var(--color-soft-tones-2)', marginTop: '24px' }}>
      <div style={{ maxWidth: '1344px', margin: '0 auto', padding: '48px 48px', boxSizing: 'border-box' }}>
        <ProductSlider
          title="Better Health in 2027"
          linkLabel="See All"
          linkHref="#"
          products={BETTER_HEALTH}
        />
      </div>
    </div>

    <Footer />
  </div>
);

export default NewYearsEve;
