import { Button } from '../components/Button/Button';

export default {
  title:     'Design System / Button',
  component: Button,
  parameters: { layout: 'padded' },
  argTypes: {
    variant:  { control: 'select', options: ['primary', 'secondary'] },
    size:     { control: 'select', options: ['medium', 'large'] },
    disabled: { control: 'boolean' },
    label:    { control: 'text' },
  },
};

/* ─── Sandbox (interactive Controls panel) ─── */
export const Sandbox = {
  args: {
    label:    'Add to Cart',
    variant:  'primary',
    disabled: false,
  },
};

/* ─── All variants + states ─── */
const Row = ({ title, subtitle, children }) => (
  <div style={{ marginBottom: 32 }}>
    <p style={{
      margin: '0 0 2px',
      fontSize: 11,
      fontWeight: 700,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: '#6B6B69',
      fontFamily: "'Proxima Nova', 'Open Sans', sans-serif",
    }}>{title}</p>
    {subtitle && (
      <p style={{
        margin: '0 0 10px',
        fontSize: 10,
        color: '#C2C2C2',
        fontFamily: 'monospace',
      }}>{subtitle}</p>
    )}
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      {children}
    </div>
  </div>
);

// Static snapshot of a button's hover state (secondary → cactus bg)
const CactusButton = ({ label }) => (
  <button style={{
    display:       'inline-flex',
    alignItems:    'center',
    justifyContent:'center',
    height:        'var(--btn-height)',
    padding:       'var(--btn-padding-v) var(--btn-padding-h)',
    fontSize:      'var(--btn-font-size)',
    fontWeight:    'var(--btn-font-weight)',
    fontFamily:    'var(--font-family-base)',
    letterSpacing: 'var(--btn-letter-spacing)',
    borderRadius:  'var(--btn-radius)',
    border:        'var(--btn-secondary-border)',
    background:    'var(--color-cactus)',
    color:         'var(--btn-secondary-color)',
    cursor:        'pointer',
    textTransform: 'uppercase',
    whiteSpace:    'nowrap',
    boxSizing:     'border-box',
  }}>
    {label}
  </button>
);

export const AllVariants = () => (
  <div style={{ fontFamily: "'Proxima Nova', 'Open Sans', sans-serif" }}>
    <Row title="1 · Primary — Medium (32px)">
      <Button label="Add to Cart" variant="primary" size="medium" />
      <Button label="Shop Now"    variant="primary" size="medium" />
    </Row>
    <Row title="2 · Primary — Large (40px)">
      <Button label="Add to Cart" variant="primary" size="large" />
      <Button label="Shop Now"    variant="primary" size="large" />
    </Row>
    <Row title="3 · Secondary — Medium (32px)">
      <Button label="Add to Cart" variant="secondary" size="medium" />
      <Button label="Shop Now"    variant="secondary" size="medium" />
    </Row>
    <Row title="4 · Secondary — Large (40px)">
      <Button label="Add to Cart" variant="secondary" size="large" />
      <Button label="Shop Now"    variant="secondary" size="large" />
    </Row>
    <Row title="5 · Hover — Secondary" subtitle="background: --color-cactus (#C3F4D9)">
      <CactusButton label="Add to Cart" />
      <CactusButton label="Shop Now" />
    </Row>
    <Row title="6 · Disabled">
      <Button label="Add to Cart" variant="primary"   size="medium" disabled />
      <Button label="Add to Cart" variant="primary"   size="large"  disabled />
      <Button label="Add to Cart" variant="secondary" size="medium" disabled />
      <Button label="Add to Cart" variant="secondary" size="large"  disabled />
    </Row>
  </div>
);
