import { Dropdown } from './Dropdown';

const sampleOptions = [
  { label: 'Option 1: React', value: 'react' },
  { label: 'Option 2: TypeScript', value: 'typescript' },
  { label: 'Option 3: Styled Components', value: 'styled-components' },
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    width: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    options: sampleOptions,
    placeholder: 'Choose your technology...',
    width: '300px',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    options: sampleOptions,
    placeholder: 'Disabled dropdown...',
    width: '300px',
    disabled: true,
  },
};