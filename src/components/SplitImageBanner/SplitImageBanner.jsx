/**
 * SplitImageBanner — full-width banner with image and content side by side
 * Sourced from live site: innovate.faithful-to-nature.co.za
 *
 * Specs:
 *   Total:         1344 x 330px, flex row-reverse
 *   Content block: 50% width, bg #F1E7DD (warm cream), padding 32px
 *   Image block:   50% width
 *   H1:            38px, Semibold (600), --color-aqua-deep (#204B4A)
 *   Body:          16px, Regular (400), --color-aqua-deep
 *   CTA button:    40px height, aqua-deep bg, cream text, 16px Bold, radius 4px
 */

export const SplitImageBanner = ({
  heading     = 'Sustainable Home & Lifestyle Essentials to Make Mindful Living Effortless',
  body        = 'Discover our best-selling home and lifestyle essentials, thoughtfully chosen to bring comfort, care and conscious living into every corner of your home.',
  ctaLabel    = 'SHOP NOW',
  ctaHref     = '#',
  imageSrc,
  imageAlt    = 'Banner image',
}) => (
  <div style={{
    display:      'flex',
    flexDirection: 'row-reverse',
    width:        '100%',
    maxWidth:     '1344px',
    height:       '330px',
    overflow:     'hidden',
  }}>

    {/* Image — right side (first in DOM due to row-reverse) */}
    <div style={{
      flex:       '0 0 50%',
      background: 'var(--color-grey-4)',
      display:    'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow:   'hidden',
    }}>
      {imageSrc
        ? <img src={imageSrc} alt={imageAlt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : <span style={{ fontSize: '14px', color: 'var(--color-grey-2)', fontFamily: 'var(--font-family-base)' }}>Product Image</span>
      }
    </div>

    {/* Content — left side */}
    <div style={{
      flex:           '0 0 50%',
      background:     '#F1E7DD',
      padding:        '32px',
      display:        'flex',
      flexDirection:  'column',
      justifyContent: 'center',
      gap:            '16px',
      boxSizing:      'border-box',
    }}>
      <h1 style={{
        margin:     0,
        fontSize:   'var(--font-size-desktop-h1)',   /* 38px */
        fontWeight: 'var(--font-weight-semibold)',   /* 600 */
        color:      'var(--color-aqua-deep)',
        lineHeight: 'var(--line-height-120)',
        fontFamily: 'var(--font-family-base)',
      }}>
        {heading}
      </h1>

      <p style={{
        margin:     0,
        fontSize:   'var(--font-size-desktop-body-1)',  /* 16px */
        fontWeight: 'var(--font-weight-regular)',
        color:      'var(--color-aqua-deep)',
        lineHeight: 'var(--line-height-150)',
        fontFamily: 'var(--font-family-base)',
      }}>
        {body}
      </p>

      <a
        href={ctaHref}
        style={{
          display:        'inline-flex',
          alignItems:     'center',
          justifyContent: 'center',
          height:         '40px',
          padding:        '0 24px',
          background:     'var(--color-aqua-deep)',
          color:          '#F1E7DD',
          fontSize:       '16px',
          fontWeight:     'var(--font-weight-bold)',
          fontFamily:     'var(--font-family-base)',
          border:         '1.6px solid var(--color-aqua-deep)',
          borderRadius:   'var(--radius-default)',
          textDecoration: 'none',
          alignSelf:      'flex-start',
          boxSizing:      'border-box',
          whiteSpace:     'nowrap',
        }}
      >
        {ctaLabel}
      </a>
    </div>
  </div>
);

export default SplitImageBanner;
