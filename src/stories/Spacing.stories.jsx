const spacers = [
  { token: '--spacer-1',  value: '64px', label: 'Spacer 1' },
  { token: '--spacer-2',  value: '56px', label: 'Spacer 2' },
  { token: '--spacer-3',  value: '48px', label: 'Spacer 3' },
  { token: '--spacer-4',  value: '40px', label: 'Spacer 4' },
  { token: '--spacer-5',  value: '32px', label: 'Spacer 5' },
  { token: '--spacer-6',  value: '24px', label: 'Spacer 6' },
  { token: '--spacer-7',  value: '16px', label: 'Spacer 7' },
  { token: '--spacer-8',  value: '12px', label: 'Spacer 8' },
  { token: '--spacer-9',  value:  '8px', label: 'Spacer 9' },
  { token: '--spacer-10', value:  '4px', label: 'Spacer 10' },
];

const font     = "'Proxima Nova', 'Open Sans', sans-serif";
const green    = '#006654';
const grey1    = '#6B6B69';
const grey2    = '#C2C2C2';
const grey3    = '#EDEDED';
const cactus   = '#C3F4D9';

const SpacerRow = ({ token, value, label }) => (
  <div style={{
    display:     'flex',
    alignItems:  'center',
    gap:         24,
    padding:     '12px 0',
    borderBottom: `1px solid ${grey3}`,
    fontFamily:  font,
  }}>
    {/* Label column */}
    <div style={{ width: 100, flexShrink: 0 }}>
      <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: grey1 }}>{label}</p>
      <p style={{ margin: 0, fontSize: 10, color: grey2, fontFamily: 'monospace' }}>{token}</p>
    </div>

    {/* Value */}
    <p style={{ margin: 0, width: 48, fontSize: 12, fontWeight: 600, color: green, flexShrink: 0 }}>
      {value}
    </p>

    {/* Visual bar */}
    <div style={{
      height:       16,
      width:        `var(${token})`,
      background:   cactus,
      borderRadius: 2,
      flexShrink:   0,
    }} />
  </div>
);

export default {
  title:      'Design System / Spacing',
  parameters: { layout: 'padded' },
};

export const SpacingScale = () => (
  <div style={{ fontFamily: font, maxWidth: 600 }}>
    <h2 style={{
      fontSize: 12, fontWeight: 700, color: green,
      textTransform: 'uppercase', letterSpacing: '0.08em',
      marginBottom: 4,
    }}>
      Spacing Scale
    </h2>
    <p style={{ fontSize: 12, color: grey1, marginBottom: 24 }}>
      All spacing in the FtN design system uses these 10 tokens.
      Use <span style={{ fontFamily: 'monospace', color: green }}>var(--spacer-n)</span> in components — never hardcode pixel values.
    </p>
    {spacers.map(s => <SpacerRow key={s.token} {...s} />)}
  </div>
);
