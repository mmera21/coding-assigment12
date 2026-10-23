import { Label } from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    disabled: { control: 'boolean' },
    text: { control: 'text' },
  },
};

export const Default = {
  args: {
    text: 'Form Label',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: 'Disabled Label',
    disabled: true,
  },
};