/**
 * CheckoutTabs — 4-step checkout progress stepper.
 * Steps: Address → Delivery → Payment → Confirm
 *
 * States:
 *   completed — cactus bg (#C3F4D9), FtN green text, no border
 *   active    — white bg, solid black border, bold black text
 *   inactive  — grey-4 bg (#F3F4F8), grey-2 text, no border
 *
 * The last tab (Confirm) has rounded right corners (pill end).
 */

const STEPS = ['Address', 'Delivery', 'Payment', 'Confirm'];

const getState = (step, activeStep) => {
  const activeIndex = STEPS.indexOf(activeStep);
  const stepIndex   = STEPS.indexOf(step);
  if (stepIndex < activeIndex)  return 'completed';
  if (stepIndex === activeIndex) return 'active';
  return 'inactive';
};

const stateStyles = {
  completed: {
    background: 'var(--color-cactus)',      /* #C3F4D9 */
    color:      'var(--color-ftn-green)',   /* #006654 */
    fontWeight: 'var(--font-weight-semibold)',
    border:     'none',
    zIndex:     1,
  },
  active: {
    background: 'var(--color-white)',
    color:      'var(--color-black)',
    fontWeight: 'var(--font-weight-bold)',
    border:     '2px solid var(--color-black)',
    zIndex:     2,
  },
  inactive: {
    background: 'var(--color-grey-4)',      /* #F3F4F8 */
    color:      'var(--color-grey-2)',      /* #C2C2C2 */
    fontWeight: 'var(--font-weight-regular)',
    border:     'none',
    zIndex:     1,
  },
};

const TabStep = ({ label, state, isLast }) => {
  const styles = stateStyles[state];
  return (
    <div style={{
      flex:           1,
      height:         '48px',
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      background:     styles.background,
      color:          styles.color,
      fontWeight:     styles.fontWeight,
      border:         styles.border,
      fontFamily:     'var(--font-family-base)',
      fontSize:       '16px',
      cursor:         'default',
      userSelect:     'none',
      boxSizing:      'border-box',
      zIndex:         styles.zIndex,
      position:       'relative',
      /* Rounded right end on last tab only */
      borderRadius:   isLast ? '0 9999px 9999px 0' : '0',
    }}>
      {label}
    </div>
  );
};

export const CheckoutTabs = ({ activeStep = 'Address' }) => (
  <div style={{
    display:  'flex',
    width:    '100%',
    maxWidth: '640px',
    overflow: 'hidden',
  }}>
    {STEPS.map((step, i) => (
      <TabStep
        key={step}
        label={step}
        state={getState(step, activeStep)}
        isLast={i === STEPS.length - 1}
      />
    ))}
  </div>
);

export default CheckoutTabs;
