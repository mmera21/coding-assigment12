import { Img } from './Img';

export default {
  title: 'Components/Img',
  component: Img,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export const Default = {
  args: {
    src: 'https://picsum.photos/300/200',
    alt: 'Random sample image',
    width: '300px',
    height: '200px',
    borderRadius: '8px',
    disabled: false,
  },
};

export const Disabled = {
  args: {
    src: 'https://picsum.photos/300/200',
    alt: 'Disabled sample image',
    width: '300px',
    height: '200px',
    borderRadius: '8px',
    disabled: true,
  },
};