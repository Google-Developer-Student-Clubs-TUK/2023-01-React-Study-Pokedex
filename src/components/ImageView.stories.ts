import type { Meta, StoryObj } from '@storybook/react';

import ImageViewComponent from './ImageView';

const meta: Meta<typeof ImageViewComponent> = {
  title: 'Components/ImageView',
  component: ImageViewComponent,
};

export default meta;
type Story = StoryObj<typeof ImageViewComponent>;

export const ImageView: Story = {
  args: {
    width: 400,
    height: 400,
    src: 'https://picsum.photos/400/400',
  },
};
