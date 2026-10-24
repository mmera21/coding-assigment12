import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from './DropdownMenu';
import { fn } from '@storybook/test';

const meta: Meta<typeof DropdownMenu> = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'text' },
    disabled: { control: 'boolean' },
    buttonLabel: { control: 'text' },
  },
  args: {
    items: [
      { label: 'Action 1', onClick: fn() },
      { label: 'Action 2', onClick: fn() },
      { label: 'Action 3', onClick: fn() },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    buttonLabel: 'Select Option',
  },
};

export const Disabled: Story = {
  args: {
    buttonLabel: 'Disabled Menu',
    disabled: true,
  },
};