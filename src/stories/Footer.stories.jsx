import { Footer } from '../components/Footer/Footer';

export default {
  title:      'Layout / Footer',
  component:  Footer,
  parameters: { layout: 'fullscreen' },
};

export const LoggedOut = () => <Footer />;
LoggedOut.storyName = 'Footer — logged out';

export const LoggedIn = () => <Footer userName="Erick" />;
LoggedIn.storyName = 'Footer — logged in';
