/**
 * DealCard — promotional deal card used in "Shop This Week's Top Deals"
 * Sourced from live site: innovate.faithful-to-nature.co.za
 *
 * Specs:
 *   Card:     290 x 280px, white bg, radius 6px, overflow hidden
 *   Image:    290 x 140px, object-fit contain
 *   Content:  290 x 140px, padding 16px
 *   Title:    12px, Bold, #191919
 *   CTA:      168 x 32px, FtN green bg, white text, 14px Bold, radius 4px
 */

export const DealCard = ({
  title   = '30% Off Select Lelive.',
  href    = '#',
  imageSrc,
  imageAlt,
}) => (
  <div style={{
    width:        '290px',
    height:       '280px',
    background:   'var(--color-white)',
    borderRadius: 'var(--radius-card)',   /* 6px */
    overflow:     'hidden',
    display:      'flex',
    flexDirection:'column',
    fontFamily:   'var(--font-family-base)',
  }}>

    {/* Image */}
    <div style={{
      width:          '290px',
      height:         '140px',
      background:     'var(--color-grey-4)',
      flexShrink:     0,
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      overflow:       'hidden',
    }}>
      {imageSrc
        ? <img src={imageSrc} alt={imageAlt || title} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
        : <span style={{ fontSize: '12px', color: 'var(--color-grey-2)' }}>Deal Image</span>
      }
    </div>

    {/* Content */}
    <div style={{
      padding:        '16px',
      display:        'flex',
      flexDirection:  'column',
      justifyContent: 'space-between',
      alignItems:     'center',
      flex:           1,
    }}>
      <p style={{
        margin:     0,
        fontSize:   '16px',
        fontWeight: 'var(--font-weight-bold)',
        color:      '#191919',
        lineHeight: 'var(--line-height-140)',
        textAlign:  'center',
      }}>
        {title}
      </p>

      <a
        href={href}
        style={{
          display:        'inline-flex',
          alignItems:     'center',
          justifyContent: 'center',
          width:          '168px',
          height:         '32px',
          background:     'var(--color-ftn-green)',
          color:          'var(--color-white)',
          fontSize:       '14px',
          fontWeight:     'var(--font-weight-bold)',
          fontFamily:     'var(--font-family-base)',
          border:         '1.6px solid var(--color-ftn-green)',
          borderRadius:   'var(--radius-default)',
          textDecoration: 'none',
          boxSizing:      'border-box',
          letterSpacing:  'var(--letter-spacing-tight)',
          textTransform:  'uppercase',
        }}
      >
        Shop Deal
      </a>
    </div>
  </div>
);

export default DealCard;
