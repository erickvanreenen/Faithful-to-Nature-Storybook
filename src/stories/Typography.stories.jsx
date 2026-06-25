export default {
  title: 'Design System / Typography',
  parameters: { layout: 'padded' },
};

const font = "'Proxima Nova', 'Open Sans', sans-serif";
const green = '#006654';
const grey1 = '#6B6B69';
const grey3 = '#EDEDED';

const Row = ({ label, size, lh, weight, sample }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, padding: '12px 0', borderBottom: `1px solid ${grey3}` }}>
    <div style={{ width: 180, flexShrink: 0 }}>
      <p style={{ margin: 0, fontSize: 11, color: grey1, fontFamily: font }}>{label}</p>
      <p style={{ margin: 0, fontSize: 10, color: '#C2C2C2', fontFamily: 'monospace' }}>{size} / {lh} / {weight}</p>
    </div>
    <p style={{ margin: 0, fontFamily: font, fontSize: size, lineHeight: lh, fontWeight: weight, color: '#031410' }}>
      {sample || 'The quick brown fox jumps over the lazy dog'}
    </p>
  </div>
);

export const DesktopScale = () => (
  <div style={{ fontFamily: font }}>
    <h2 style={{ fontSize: 12, fontWeight: 700, color: green, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
      Desktop — 1440px
    </h2>
    <div style={{ marginBottom: 40 }}>
      <Row label="H1 · Display"      size="38px" lh="1.2"  weight={700} sample="H1 Heading — 38px Bold" />
      <Row label="H2"                size="30px" lh="1.2"  weight={700} sample="H2 Heading — 30px Bold" />
      <Row label="H3"                size="24px" lh="1.25" weight={700} sample="H3 Heading — 24px Bold" />
      <Row label="H4"                size="20px" lh="1.3"  weight={700} sample="H4 Heading — 20px Bold" />
      <Row label="H5"                size="18px" lh="1.35" weight={700} sample="H5 Heading — 18px Bold" />
      <Row label="H6"                size="16px" lh="1.4"  weight={700} sample="H6 Heading — 16px Bold" />
      <Row label="H7"                size="16px" lh="1.4"  weight={600} sample="H7 Heading — 16px Semibold" />
    </div>

    <h2 style={{ fontSize: 12, fontWeight: 700, color: green, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
      Body
    </h2>
    <div style={{ marginBottom: 40 }}>
      <Row label="Body 1 Regular"    size="16px" lh="1.5"  weight={400} />
      <Row label="Body 1 Semibold"   size="16px" lh="1.5"  weight={600} />
      <Row label="Body 1 Bold"       size="16px" lh="1.5"  weight={700} />
      <Row label="Body 2 Regular"    size="14px" lh="1.5"  weight={400} />
      <Row label="Body 2 Semibold"   size="14px" lh="1.5"  weight={600} />
      <Row label="Body 2 Bold"       size="14px" lh="1.5"  weight={700} />
      <Row label="Body 3 Regular"    size="12px" lh="1.45" weight={400} />
      <Row label="Body 3 Semibold"   size="12px" lh="1.45" weight={600} />
      <Row label="Body 3 Bold"       size="12px" lh="1.45" weight={700} />
    </div>

    <h2 style={{ fontSize: 12, fontWeight: 700, color: green, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
      Links & Labels
    </h2>
    <div style={{ marginBottom: 40 }}>
      <Row label="Link 1 Regular"    size="14px" lh="1.4"  weight={400} sample="Link text — 14px Regular" />
      <Row label="Link 1 Semibold"   size="14px" lh="1.4"  weight={600} sample="Link text — 14px Semibold" />
      <Row label="Link 2 Regular"    size="12px" lh="1.4"  weight={400} sample="Link text — 12px Regular" />
      <Row label="Link 2 Semibold"   size="12px" lh="1.4"  weight={600} sample="Link text — 12px Semibold" />
      <Row label="Button Label 1"    size="12px" lh="1.25" weight={700} sample="BUTTON LABEL" />
      <Row label="Button Label 2"    size="10px" lh="1.25" weight={700} sample="BUTTON LABEL SMALL" />
      <Row label="Small Label"       size="10px" lh="1.5"  weight={600} sample="Small label text" />
    </div>
  </div>
);

export const MobileScale = () => (
  <div style={{ fontFamily: font, maxWidth: 390 }}>
    <h2 style={{ fontSize: 12, fontWeight: 700, color: green, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>
      Mobile — 390px
    </h2>
    <div style={{ marginBottom: 40 }}>
      <Row label="H1"                size="20px" lh="1.25" weight={700} sample="H1 — 20px Bold" />
      <Row label="H2"                size="18px" lh="1.3"  weight={700} sample="H2 — 18px Bold" />
      <Row label="H3"                size="16px" lh="1.35" weight={700} sample="H3 — 16px Bold" />
      <Row label="H4"                size="14px" lh="1.4"  weight={700} sample="H4 — 14px Bold" />
      <Row label="H5"                size="13px" lh="1.4"  weight={700} sample="H5 — 13px Bold" />
      <Row label="H6"                size="12px" lh="1.45" weight={700} sample="H6 — 12px Bold" />
      <Row label="H7"                size="12px" lh="1.45" weight={600} sample="H7 — 12px Semibold" />
      <Row label="Body 1"            size="14px" lh="1.5"  weight={400} />
      <Row label="Body 2"            size="12px" lh="1.5"  weight={400} />
      <Row label="Body 3"            size="11px" lh="1.5"  weight={400} />
    </div>
  </div>
);
