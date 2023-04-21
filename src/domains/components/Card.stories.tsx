import type { Meta, StoryObj } from '@storybook/react';

import CardComponent from './Card';

const meta: Meta<typeof CardComponent> = {
  title: 'Domains/Card',
  component: CardComponent,
};

export default meta;
type Story = StoryObj<typeof CardComponent>;

export const Card: Story = {
  args: {
    title: 'Title',
    contents: 'Contents',
    style: { textAlign: 'center' },
  },
};
