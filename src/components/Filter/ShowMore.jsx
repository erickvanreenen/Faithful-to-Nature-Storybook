/**
 * ShowMore — "SHOW MORE" load-more button used below product grids
 * Sourced from live site: innovate.faithful-to-nature.co.za
 *
 * Background:    #006654 (FtN green)
 * Border:        0.64px solid #006654
 * Border radius: 2.2px
 * Text:          white, bold, 14px, uppercase
 * Alignment:     centred below product grid
 */

export const ShowMore = ({
  label   = 'SHOW MORE',
  onClick,
  loading = false,
  disabled = false,
}) => (
  <div style={{
    width:      '100%',
    marginTop:  'var(--spacer-7)',
    fontFamily: 'var(--font-family-base)',
    textAlign:  'center',
  }}>
    <button
      onClick={onClick}
      disabled={disabled || loading}
      style={{
        all:           'unset',
        display:       'inline-flex',
        alignItems:    'center',
        justifyContent:'center',
        gap:           '8px',
        height:        '44px',
        padding:       '0 32px',
        background:    disabled ? '#AEAEAE' : 'var(--color-ftn-green)',
        border:        `0.64px solid ${disabled ? '#AEAEAE' : 'var(--color-ftn-green)'}`,
        borderRadius:  '2.2px',
        color:         '#FFFFFF',
        fontSize:      '14px',
        fontWeight:    'var(--font-weight-bold)',
        fontFamily:    'var(--font-family-base)',
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        cursor:        disabled ? 'not-allowed' : 'pointer',
        opacity:       loading ? 0.7 : 1,
        transition:    'opacity 0.15s',
        boxSizing:     'border-box',
      }}
    >
      {loading ? 'Loading...' : label}
    </button>
  </div>
);

export default ShowMore;
