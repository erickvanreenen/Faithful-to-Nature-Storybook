import { Pill }         from '../components/Pill/Pill';
import { Badge }        from '../components/Badge/Badge';
import { CheckoutTabs } from '../components/CheckoutTabs/CheckoutTabs';

export default {
  title:      'Design System / Pills, Tabs & Labels',
  parameters: { layout: 'padded' },
};

const font = "'Proxima Nova', 'Open Sans', sans-serif";
const Section = ({ title, children }) => (
  <div style={{ marginBottom: 40, fontFamily: font }}>
    <p style={{
      margin: '0 0 12px',
      fontSize: 11, fontWeight: 700,
      textTransform: 'uppercase', letterSpacing: '0.08em',
      color: '#6B6B69',
    }}>{title}</p>
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      {children}
    </div>
  </div>
);

/* ─── Pills ─── */
export const Pills = () => (
  <div>
    <Section title="Desktop Pills (14px)">
      <Pill label="Sugar Free"    size="desktop" />
      <Pill label="Biodegradable" size="desktop" />
      <Pill label="Vegan"         size="desktop" />
      <Pill label="Organic"       size="desktop" />
    </Section>
    <Section title="Mobile Pills (11px)">
      <Pill label="Sugar Free"    size="mobile" />
      <Pill label="Biodegradable" size="mobile" />
      <Pill label="Vegan"         size="mobile" />
      <Pill label="Organic"       size="mobile" />
    </Section>
  </div>
);

/* ─── PDP Badge ─── */
export const PDPBadge = () => (
  <div>
    <Section title="Desktop Badge (14px)">
      <Badge label="10% OFF"       size="desktop" />
      <Badge label="Free Delivery" size="desktop" />
      <Badge label="New"           size="desktop" />
    </Section>
    <Section title="Mobile Badge (11px)">
      <Badge label="10% OFF"       size="mobile" />
      <Badge label="Free Delivery" size="mobile" />
      <Badge label="New"           size="mobile" />
    </Section>
  </div>
);

/* ─── Checkout Tabs — all 4 steps ─── */
export const StepAddress  = () => <CheckoutTabs activeStep="Address" />;
StepAddress.storyName  = 'Checkout Tabs — Step 1: Address';

export const StepDelivery = () => <CheckoutTabs activeStep="Delivery" />;
StepDelivery.storyName = 'Checkout Tabs — Step 2: Delivery';

export const StepPayment  = () => <CheckoutTabs activeStep="Payment" />;
StepPayment.storyName  = 'Checkout Tabs — Step 3: Payment';

export const StepConfirm  = () => <CheckoutTabs activeStep="Confirm" />;
StepConfirm.storyName  = 'Checkout Tabs — Step 4: Confirm';
