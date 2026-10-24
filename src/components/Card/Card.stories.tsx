import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    imageUrl: { control: 'text' },
    width: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    title: 'Modern Web Development',
    description: 'Learn how to build reusable components using React, TypeScript, and Styled Components.',
    imageUrl: 'https://picsum.photos/300/180',
    width: '300px',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    title: 'Archived Card',
    description: 'This card is currently disabled and unavailable for interaction.',
    imageUrl: 'https://picsum.photos/300/180',
    width: '300px',
    disabled: true,
  },
};