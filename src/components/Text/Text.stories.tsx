import { Text } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    content: { control: 'text' },
  },
};

export const Default = {
  args: {
    content: 'This is a standard paragraph text.',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    content: 'This text is disabled.',
    disabled: true,
  },
};