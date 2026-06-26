import { NewYearsEve } from '../pages/NewYearsEve';

export default {
  title:      'Experiments / New Years Eve',
  component:  NewYearsEve,
  parameters: { layout: 'fullscreen' },
};

export const Default = () => <NewYearsEve />;
Default.storyName = "New Year's Eve Page";
