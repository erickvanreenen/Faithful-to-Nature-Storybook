import { useState } from 'react';

const base = {
  display:        'inline-flex',
  alignItems:     'center',
  justifyContent: 'center',
  height:         'var(--btn-height)',
  padding:        'var(--btn-padding-v) var(--btn-padding-h)',
  fontSize:       'var(--btn-font-size)',
  fontWeight:     'var(--btn-font-weight)',
  fontFamily:     'var(--font-family-base)',
  letterSpacing:  'var(--btn-letter-spacing)',
  borderRadius:   'var(--btn-radius)',
  cursor:         'pointer',
  textTransform:  'uppercase',
  whiteSpace:     'nowrap',
  position:       'relative',
  overflow:       'hidden',
  transition:     'background 0.15s ease, opacity 0.15s ease',
  textDecoration: 'none',
  boxSizing:      'border-box',
};

// Default (rest) styles per variant
const defaultStyles = {
  primary: {
    background: 'var(--btn-primary-bg)',
    color:      'var(--btn-primary-color)',
    border:     'none',
  },
  secondary: {
    background: 'var(--btn-secondary-bg)',
    color:      'var(--btn-secondary-color)',
    border:     'var(--btn-secondary-border)',
  },
};

// Hover background per variant
const hoverBg = {
  primary:   null,                    // primary uses dark overlay (subtle)
  secondary: 'var(--color-cactus)',   // secondary switches to cactus mint
};

const sizeHeight = {
  medium: 'var(--btn-height)',  /* 32px */
  large:  '40px',               /* btn-large from Figma Buttons 2.0 */
};

export const Button = ({
  label    = 'Button',
  variant  = 'primary',
  size     = 'medium',
  disabled = false,
  onClick,
}) => {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  // Background: secondary swaps to cactus on hover; primary stays + uses overlay
  const bgOverride =
    !disabled && hovered && hoverBg[variant]
      ? hoverBg[variant]
      : defaultStyles[variant].background;

  // Dark overlay only for primary hover/press (secondary uses bg swap instead)
  const overlay =
    variant === 'primary' && !disabled
      ? pressed ? 'var(--btn-press-overlay)'
        : hovered ? 'var(--btn-hover-overlay)'
        : 'transparent'
      : 'transparent';

  const style = {
    ...base,
    ...defaultStyles[variant],
    background: bgOverride,
    height:     sizeHeight[size] || sizeHeight.medium,
    opacity:    disabled ? 0.4 : 1,
    cursor:     disabled ? 'not-allowed' : 'pointer',
  };

  return (
    <button
      style={style}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => !disabled && setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={()  => !disabled && setPressed(true)}
      onMouseUp={()    => setPressed(false)}
    >
      <span style={{
        position:     'absolute',
        inset:        0,
        background:   overlay,
        borderRadius: 'inherit',
        pointerEvents:'none',
      }} />
      {label}
    </button>
  );
};

export default Button;
