import '../src/tokens/tokens.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        desktop1440: {
          name: 'Desktop — 1440px',
          styles: { width: '1440px', height: '900px' },
          type: 'desktop',
        },
        mobile320: {
          name: 'Mobile — 320px',
          styles: { width: '320px', height: '667px' },
          type: 'mobile',
        },
      },
      defaultViewport: 'desktop1440',
    },
  },
};

export default preview;
