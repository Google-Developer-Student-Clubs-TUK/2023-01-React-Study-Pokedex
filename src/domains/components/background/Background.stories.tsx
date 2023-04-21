import type { Meta, StoryObj } from '@storybook/react';

import BackgroundComponent from './Background';

const meta: Meta<typeof BackgroundComponent> = {
  title: 'Domains/BackgroundColor',
  component: BackgroundComponent,
};

export default meta;
type Story = StoryObj<typeof BackgroundComponent>;

export const BackgroundColor: Story = {};
