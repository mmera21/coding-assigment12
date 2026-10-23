import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export const Default = {
  args: {
    label: 'Click Me',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};