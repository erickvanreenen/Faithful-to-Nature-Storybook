import { SitewideBanner } from '../components/SitewideBanner/SitewideBanner';
import { GlobalNav }       from '../components/GlobalNav/GlobalNav';
import { SectionHeading }  from '../components/SectionHeading/SectionHeading';
import { SplitImageBanner } from '../components/SplitImageBanner/SplitImageBanner';
import { DealCard }        from '../components/DealCard/DealCard';
import { ProductCard }     from '../components/ProductCard/ProductCard';
import { ChipSection }     from '../components/ChipSection/ChipSection';
import { Footer }          from '../components/Footer/Footer';

/* ─── mock data ─────────────────────────────────────────────────────────── */

const GIFT_PRODUCTS = [
  { title: 'Rawbiotics Daily Probiotic',        variant: '500ml',        price: 'R161.15', originalPrice: 'R189.00', promoLabel: '15% off',              rating: '4.9', reviewCount: '88', imageSrc: 'https://picsum.photos/id/539/206/146'  },
  { title: 'ButtaNutt Macadamia Nut Butter',    variant: '250g',         price: 'R119.00', originalPrice: null,      promoLabel: null,                   rating: '4.7', reviewCount: '41', imageSrc: 'https://picsum.photos/id/488/206/146'  },
  { title: 'Simply Bee Raw Honey',              variant: '500g',         price: 'R149.99', originalPrice: null,      promoLabel: null,                   rating: '4.8', reviewCount: '32', imageSrc: 'https://picsum.photos/id/292/206/146'  },
  { title: 'Health Connection Stevia Powder',   variant: '25g',          price: 'R97.75',  originalPrice: 'R115.00', promoLabel: "Father's Day Deal",    rating: '5',   reviewCount: '7',  imageSrc: 'https://picsum.photos/id/425/206/146'  },
  { title: 'Akan Moringa with Hibiscus Tea',    variant: '40g, 20 Bags', price: 'R58.27',  originalPrice: 'R68.55',  promoLabel: '-15% with promo code', rating: '5',   reviewCount: '3',  imageSrc: 'https://picsum.photos/id/225/206/146'  },
  { title: 'Skoon Vitamin C Face Serum',        variant: '30ml',         price: 'R293.25', originalPrice: 'R345.00', promoLabel: '15% off',              rating: '4.8', reviewCount: '14', imageSrc: 'https://picsum.photos/id/26/206/146'   },
];

const DAD_TYPES = [
  { label: 'The Wellness Dad',  desc: 'Supplements, probiotics and superfoods',    bg: 'var(--color-soft-tones-2)', img: 'https://picsum.photos/id/1043/80/80' },
  { label: 'The Foodie Dad',    desc: 'Organic pantry, snacks and specialty foods', bg: 'var(--color-cream)',        img: 'https://picsum.photos/id/292/80/80'  },
  { label: 'The Grooming Dad',  desc: 'Natural skincare and grooming essentials',   bg: 'var(--color-bg-health)',    img: 'https://picsum.photos/id/26/80/80'   },
  { label: 'The Eco Dad',       desc: 'Sustainable living and home products',       bg: 'var(--color-bg-env)',       img: 'https://picsum.photos/id/28/80/80'   },
];

const CATEGORY_CHIPS = [
  { label: 'Health and Wellness', href: '#' },
  { label: 'Organic Food',        href: '#' },
  { label: 'Natural Grooming',    href: '#' },
  { label: 'Eco Home',            href: '#' },
  { label: 'Superfoods',          href: '#' },
  { label: 'Gift Sets',           href: '#' },
];

/* ─── page ──────────────────────────────────────────────────────────────── */

export const FathersDayLanding = () => (
  <div style={{ fontFamily: 'var(--font-family-base)', background: 'var(--color-grey-4)', minHeight: '100vh' }}>

    {/* Sitewide banner */}
    <SitewideBanner />

    {/* Sticky nav */}
    <div style={{ background: 'var(--color-white)', position: 'sticky', top: 0, zIndex: 100 }}>
      <GlobalNav cartCount={2} profileName="Erick" />
    </div>

    {/* ── Hero Banner ───────────────────────────────────────────────────── */}
    <div style={{ background: 'var(--color-navy)', width: '100%' }}>
      <div style={{
        maxWidth:  '1344px',
        margin:    '0 auto',
        display:   'flex',
        height:    '460px',
        overflow:  'hidden',
      }}>

        {/* Left: copy */}
        <div style={{
          flex:          '0 0 54%',
          padding:       '56px 64px',
          display:       'flex',
          flexDirection: 'column',
          justifyContent:'center',
          gap:           '22px',
          boxSizing:     'border-box',
        }}>
          <span style={{
            alignSelf:      'flex-start',
            background:     'var(--color-orange)',
            color:          'var(--color-white)',
            fontSize:       '11px',
            fontWeight:     'var(--font-weight-bold)',
            letterSpacing:  '0.08em',
            textTransform:  'uppercase',
            padding:        '5px 14px',
            borderRadius:   'var(--radius-full)',
            fontFamily:     'var(--font-family-base)',
          }}>
            Father's Day · 15 June 2026
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
            Give Dad the Gift of Feeling His Best
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
            Thoughtfully chosen organic foods, supplements and natural wellness products for the dad who deserves something real.
          </p>

          <div style={{ display: 'flex', gap: '12px' }}>
            <a href="#gifts" style={{
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
              Shop Father's Day
            </a>

            <a href="#guide" style={{
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
              View Gift Guide
            </a>
          </div>

          <p style={{
            margin:     0,
            fontSize:   '12px',
            color:      'rgba(255,246,209,0.42)',
            fontFamily: 'var(--font-family-base)',
          }}>
            Free gift wrapping on orders over R500 · Same-week delivery if ordered before 10 June
          </p>
        </div>

        {/* Right: hero image */}
        <div style={{ flex: '0 0 46%', overflow: 'hidden', position: 'relative' }}>
          <img
            src="https://picsum.photos/id/1040/680/460"
            alt="Father's Day gifts"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Subtle overlay so it blends into the navy */}
          <div style={{
            position:   'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(26,65,112,0.35) 0%, transparent 40%)',
          }} />
        </div>
      </div>
    </div>

    {/* ── Content area ──────────────────────────────────────────────────── */}
    <div style={{ maxWidth: '1344px', margin: '0 auto', padding: '48px 48px 0', boxSizing: 'border-box' }}>

      {/* Father's Day Deals */}
      <section style={{ marginBottom: '56px' }}>
        <SectionHeading title="Father's Day Deals" linkLabel="View All Deals" />
        <div style={{
          display:               'grid',
          gridTemplateColumns:   'repeat(4, 290px)',
          gap:                   '24px',
          marginTop:             '24px',
        }}>
          <DealCard title="20% Off All Supplements"            href="#" imageSrc="https://picsum.photos/id/539/290/140"  imageAlt="Supplements" />
          <DealCard title="Free Gift Wrapping on Orders R500+" href="#" imageSrc="https://picsum.photos/id/225/290/140"  imageAlt="Gift wrapping" />
          <DealCard title="Buy 2 Get 1 Free on Teas"           href="#" imageSrc="https://picsum.photos/id/488/290/140"  imageAlt="Teas" />
          <DealCard title="R100 Off When You Spend R800+"      href="#" imageSrc="https://picsum.photos/id/292/290/140"  imageAlt="Savings" />
        </div>
      </section>

      {/* Shop by Dad Type */}
      <section id="guide" style={{ marginBottom: '56px' }}>
        <SectionHeading title="Shop by Dad Type" />
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap:                 '16px',
          marginTop:           '24px',
        }}>
          {DAD_TYPES.map((type, i) => (
            <a
              key={i}
              href="#"
              style={{
                display:        'flex',
                flexDirection:  'column',
                justifyContent: 'flex-end',
                gap:            '6px',
                background:     type.bg,
                borderRadius:   'var(--radius-card)',
                padding:        '32px 24px 28px',
                minHeight:      '168px',
                textDecoration: 'none',
                position:       'relative',
                overflow:       'hidden',
                boxSizing:      'border-box',
              }}
            >
              {/* Category image */}
              <div style={{
                position:     'absolute',
                top:          '16px',
                right:        '16px',
                width:        '80px',
                height:       '80px',
                borderRadius: '50%',
                overflow:     'hidden',
                border:       '3px solid rgba(255,255,255,0.6)',
              }}>
                <img src={type.img} alt={type.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <h3 style={{
                margin:     0,
                fontSize:   'var(--font-size-desktop-h6)',
                fontWeight: 'var(--font-weight-bold)',
                color:      'var(--color-aqua-deep)',
                lineHeight: 'var(--line-height-125)',
                fontFamily: 'var(--font-family-base)',
              }}>
                {type.label}
              </h3>
              <p style={{
                margin:     0,
                fontSize:   '12px',
                color:      'var(--color-grey-1)',
                lineHeight: 'var(--line-height-140)',
                fontFamily: 'var(--font-family-base)',
              }}>
                {type.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

    </div>

    {/* ── Split Image Banner: full-width within 1344px ───────────────────── */}
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '56px' }}>
      <SplitImageBanner
        heading="For the Health-Conscious Dad Who Does It All"
        body="From daily probiotics and superfood powders to adaptogenic teas, give him the tools to feel energised, focused and at his best every single day."
        ctaLabel="Shop Wellness Gifts"
        ctaHref="#"
        imageSrc="https://picsum.photos/id/1043/672/330"
        imageAlt="Health-conscious dad lifestyle"
      />
    </div>

    {/* ── Product grid + chips ──────────────────────────────────────────── */}
    <div style={{ maxWidth: '1344px', margin: '0 auto', padding: '0 48px 64px', boxSizing: 'border-box' }}>

      <section id="gifts">
        <SectionHeading title="Gifts He'll Actually Love" linkLabel="View All" />
        <div style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
          gap:                 'var(--spacer-6)',
          marginTop:           '24px',
          marginBottom:        'var(--spacer-4)',
        }}>
          {GIFT_PRODUCTS.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </section>

      <ChipSection
        heading="Browse Father's Day Gift Categories"
        chips={CATEGORY_CHIPS}
      />

    </div>

    <Footer />
  </div>
);

export default FathersDayLanding;
