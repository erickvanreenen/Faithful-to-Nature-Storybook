import { GlobalNav } from '../components/GlobalNav/GlobalNav';

export default {
  title:      'Layout / Global Nav',
  component:  GlobalNav,
  parameters: { layout: 'fullscreen' },
};

export const Default = () => <GlobalNav cartCount={0} profileName="Account" />;
Default.storyName = 'Global Nav — logged out';

export const LoggedIn = () => <GlobalNav cartCount={2} profileName="Erick" />;
LoggedIn.storyName = 'Global Nav — logged in with cart';
