import { HeroImage } from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  tags: ['autodocs'],
  argTypes: {
    bgImage: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    height: { control: 'text' },
    overlayColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    title: 'Discover Your Next Adventure',
    subtitle: 'Explore our collection of modern web components.',
    height: '400px',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    title: 'Disabled Hero Banner',
    subtitle: 'This banner is currently inactive.',
    height: '400px',
    disabled: true,
  },
};