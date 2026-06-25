import { FathersDayLanding } from '../pages/FathersDayLanding';

export default {
  title:      'Experiments / Fathers Day Landing',
  component:  FathersDayLanding,
  parameters: { layout: 'fullscreen' },
};

export const Default = () => <FathersDayLanding />;
Default.storyName = "Father's Day Landing Page";
