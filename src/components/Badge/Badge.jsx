/**
 * Badge — PDP (Product Detail Page) promotional label.
 * Square corners, soft-tones-2 background, aqua-deep text.
 * Desktop: 14px | Mobile: 11px
 *
 * Sourced from Figma: "pdp label / dk" and "pdp label / mb"
 */

export const Badge = ({
  label = '10% OFF',
  size  = 'desktop',
}) => {
  const fontSize = size === 'mobile' ? '11px' : '14px';

  return (
    <span style={{
      display:    'inline-flex',
      alignItems: 'center',
      padding:    '8px 12px',
      borderRadius: 'var(--radius-none)',       /* 0px — square corners */
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

export default Badge;
