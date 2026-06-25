const colours = [
  { group: 'Brand — Greens', tokens: [
    { name: 'FtN Green',    token: '--color-ftn-green',    hex: '#006654' },
    { name: 'Aqua Deep',    token: '--color-aqua-deep',    hex: '#204B4A' },
    { name: 'Cactus',       token: '--color-cactus',       hex: '#C3F4D9' },
    { name: 'Soft Tones 2', token: '--color-soft-tones-2', hex: '#D9EDE7' },
  ]},
  { group: 'Neutrals', tokens: [
    { name: 'Grey 1',  token: '--color-grey-1', hex: '#6B6B69' },
    { name: 'Grey 2',  token: '--color-grey-2', hex: '#C2C2C2' },
    { name: 'Grey 3',  token: '--color-grey-3', hex: '#EDEDED' },
    { name: 'Grey 4',  token: '--color-grey-4', hex: '#F3F4F8' },
    { name: 'White',   token: '--color-white',  hex: '#FFFFFF' },
    { name: 'Black',   token: '--color-black',  hex: '#000000' },
  ]},
  { group: 'Accents', tokens: [
    { name: 'Orange',      token: '--color-orange',      hex: '#D46327' },
    { name: 'Orange Warm', token: '--color-orange-warm', hex: '#D77929' },
    { name: 'Navy',        token: '--color-navy',        hex: '#1A4170' },
    { name: 'Cream',       token: '--color-cream',       hex: '#FFF6D1' },
  ]},
  { group: 'Semantic Backgrounds', tokens: [
    { name: 'Health Bg',  token: '--color-bg-health', hex: '#D4EBF9' },
    { name: 'Env Bg',     token: '--color-bg-env',    hex: '#EAF7C9' },
  ]},
];

const Swatch = ({ name, token, hex }) => (
  <div style={{ width: 140, marginBottom: 16 }}>
    <div style={{
      width: 140, height: 80,
      background: `var(${token})`,
      borderRadius: 4,
      border: '1px solid rgba(0,0,0,0.08)',
    }} />
    <p style={{ margin: '6px 0 2px', fontSize: 12, fontWeight: 600, color: '#006654' }}>{name}</p>
    <p style={{ margin: 0, fontSize: 11, color: '#6B6B69', fontFamily: 'monospace' }}>#{hex.replace('#','')}</p>
    <p style={{ margin: 0, fontSize: 10, color: '#C2C2C2', fontFamily: 'monospace' }}>{token}</p>
  </div>
);

export default {
  title: 'Design System / Colour Palette',
  parameters: { layout: 'padded' },
};

export const AllColours = () => (
  <div style={{ fontFamily: "'Proxima Nova', sans-serif" }}>
    {colours.map(({ group, tokens }) => (
      <div key={group} style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: '#006654', borderBottom: '1px solid #EDEDED', paddingBottom: 8, marginBottom: 16 }}>
          {group}
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {tokens.map(t => <Swatch key={t.token} {...t} />)}
        </div>
      </div>
    ))}
  </div>
);
