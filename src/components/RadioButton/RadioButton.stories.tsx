import { RadioButton } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    label: 'Option 1: React',
    name: 'tech',
    value: 'react',
    checked: false,
    disabled: false,
  },
};

export const Checked = {
  args: {
    label: 'Option 2: TypeScript (Selected)',
    name: 'tech',
    value: 'typescript',
    checked: true,
    disabled: false,
  },
};

export const Disabled = {
  args: {
    label: 'Disabled Option',
    name: 'tech',
    value: 'disabled',
    checked: false,
    disabled: true,
  },
};