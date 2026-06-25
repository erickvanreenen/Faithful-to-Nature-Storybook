/**
 * SectionHeading — used above every product slider and content section
 * Sourced from live site: innovate.faithful-to-nature.co.za
 *
 * Specs:
 *   Heading:  H1, 38px, Semibold (600), #031410
 *   Button:   88 x 32px, filled FtN green, white text, 14px Bold, radius 4px
 *   Layout:   flex, space-between, align-items: flex-end, height 62px
 */

export const SectionHeading = ({
  title     = 'Section Title',
  linkLabel,
  linkHref  = '#',
  centered  = false,
}) => (
  <div style={{
    display:        'flex',
    alignItems:     'flex-end',
    justifyContent: centered ? 'center' : 'space-between',
    width:          '100%',
    height:         '62px',
    fontFamily:     'var(--font-family-base)',
    boxSizing:      'border-box',
  }}>
    <h1 style={{
      margin:     0,
      fontSize:   'var(--font-size-desktop-h1)',   /* 38px */
      fontWeight: 'var(--font-weight-semibold)',   /* 600 */
      color:      '#031410',
      lineHeight:  'var(--line-height-120)',
      textAlign:  centered ? 'center' : 'left',
    }}>
      {title}
    </h1>

    {linkLabel && (
      <a
        href={linkHref}
        style={{
          display:        'inline-flex',
          alignItems:     'center',
          justifyContent: 'center',
          height:         '32px',
          padding:        '0 16px',
          background:     'var(--color-ftn-green)',
          color:          'var(--color-white)',
          fontSize:       '14px',
          fontWeight:     'var(--font-weight-bold)',
          fontFamily:     'var(--font-family-base)',
          border:         '1.6px solid var(--color-ftn-green)',
          borderRadius:   'var(--radius-default)',
          textDecoration: 'none',
          boxSizing:      'border-box',
          whiteSpace:     'nowrap',
        }}
      >
        {linkLabel}
      </a>
    )}
  </div>
);

export default SectionHeading;
