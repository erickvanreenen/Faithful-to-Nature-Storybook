import { Icon, ICON_NAMES } from '../components/Icon/Icon';

export default {
  title:      'Design System / Icons',
  parameters: { layout: 'padded' },
};

const font = "'Proxima Nova', 'Open Sans', sans-serif";

const IconTile = ({ name }) => (
  <div style={{
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
    width: '100px', padding: '16px 8px',
    background: '#FFFFFF', borderRadius: '4px', border: '0.5px solid #EDEDED',
  }}>
    <Icon name={name} size={32} color="#006654" />
    <span style={{ fontSize: '10px', color: '#6B6B69', fontFamily: 'monospace', textAlign: 'center', wordBreak: 'break-all' }}>
      {name}
    </span>
  </div>
);

export const AllIcons = () => (
  <div style={{ fontFamily: font }}>
    <p style={{ margin: '0 0 16px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6B6B69' }}>
      {ICON_NAMES.length} icons — all 32×32 Ionicons
    </p>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      {ICON_NAMES.map(name => <IconTile key={name} name={name} />)}
    </div>
  </div>
);

export const Sandbox = {
  args: { name: 'heart', size: 32, color: '#006654', strokeWidth: 2 },
  argTypes: {
    name:        { control: 'select', options: ICON_NAMES },
    size:        { control: { type: 'range', min: 16, max: 64, step: 4 } },
    color:       { control: 'color' },
    strokeWidth: { control: { type: 'range', min: 1, max: 4, step: 0.5 } },
  },
  render: (args) => <Icon {...args} />,
};
