/**
 * Pill — value pill used on product cards and catalogue pages.
 * All variants share the same colourway: soft-tones-2 bg, aqua-deep text.
 * Sizes: desktop (14px) | mobile (11px)
 *
 * Sourced from Figma FTN Component Library — pills page.
 */

export const Pill = ({
  label   = 'Example',
  size    = 'desktop',
}) => {
  const fontSize = size === 'mobile' ? '11px' : '14px';

  return (
    <span style={{
      display:      'inline-flex',
      alignItems:   'center',
      padding:      '4px 12px',
      borderRadius: 'var(--radius-full)',        /* 9999px — pill shape */
      background:   'var(--color-soft-tones-2)', /* #D9EDE7 */
      color:        'var(--color-aqua-deep)',     /* #204B4A */
      fontSize,
      fontWeight:   'var(--font-weight-bold)',
      fontFamily:   'var(--font-family-base)',
      lineHeight:   1.4,
      whiteSpace:   'nowrap',
    }}>
      {label}
    </span>
  );
};

export default Pill;
