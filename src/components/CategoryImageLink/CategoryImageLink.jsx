/**
 * CategoryImageLink — square image + label category navigation block
 * Sourced from live site: innovate.faithful-to-nature.co.za
 *
 * Specs:
 *   Block:  432 x 488px, flex column, align-items centre, bg #F4F2ED
 *   Image:  432 x 432px, object-fit cover
 *   Label:  18px, Bold (700), #191919, centred
 */

export const CategoryImageLink = ({
  label    = 'Good Food',
  href     = '#',
  imageSrc,
  imageAlt,
}) => (
  <a
    href={href}
    style={{
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      justifyContent: 'center',
      width:          '432px',
      height:         '488px',
      background:     '#F4F2ED',
      textDecoration: 'none',
      fontFamily:     'var(--font-family-base)',
      overflow:       'hidden',
    }}
  >
    {/* Image */}
    <div style={{
      width:    '432px',
      height:   '432px',
      flexShrink: 0,
      background: 'var(--color-grey-3)',
      display:  'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {imageSrc
        ? <img src={imageSrc} alt={imageAlt || label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        : <span style={{ fontSize: '12px', color: 'var(--color-grey-2)' }}>{label} Image</span>
      }
    </div>

    {/* Label */}
    <div style={{
      flex:           1,
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      padding:        '0 0 16px',
    }}>
      <span style={{
        fontSize:   '18px',
        fontWeight: 'var(--font-weight-bold)',
        color:      '#191919',
        textAlign:  'center',
        fontFamily: 'var(--font-family-base)',
      }}>
        {label}
      </span>
    </div>
  </a>
);

export default CategoryImageLink;
