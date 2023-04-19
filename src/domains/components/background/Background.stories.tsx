import type { Meta, StoryObj } from '@storybook/react';

import BackgroundColorComponent from './Background';

const meta: Meta<typeof BackgroundColorComponent> = {
  title: 'Domains/Background',
  component: BackgroundColorComponent,
};

export default meta;
type Story = StoryObj<typeof BackgroundColorComponent>;

export const Background: Story = {};
