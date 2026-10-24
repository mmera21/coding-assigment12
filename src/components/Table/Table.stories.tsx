import { Table } from './Table';

const sampleHeaders = ['ID', 'Component Name', 'Status', 'Category'];
const sampleData = [
  [1, 'Button', 'Passed', 'Core'],
  [2, 'Label', 'Passed', 'Typography'],
  [3, 'Text', 'Passed', 'Typography'],
  [4, 'Img', 'Passed', 'Media'],
  [5, 'Card', 'Passed', 'Layout'],
];

export default {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    headers: sampleHeaders,
    data: sampleData,
    width: '100%',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    headers: sampleHeaders,
    data: sampleData,
    width: '100%',
    disabled: true,
  },
};