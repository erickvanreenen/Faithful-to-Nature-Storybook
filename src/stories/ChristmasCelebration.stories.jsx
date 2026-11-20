import { ChristmasCelebration } from '../pages/ChristmasCelebration';

export default {
  title:      'Experiments / Christmas Celebration',
  component:  ChristmasCelebration,
  parameters: { layout: 'fullscreen' },
};

export const Default = () => <ChristmasCelebration />;
Default.storyName = 'Christmas Celebration Page';
