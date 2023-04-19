import type { Meta, StoryObj } from '@storybook/react';

import NavigationComponent from './Navigation';

const meta: Meta<typeof NavigationComponent> = {
  title: 'Components/Navigation',
  component: NavigationComponent,
};

export default meta;
type Story = StoryObj<typeof NavigationComponent>;

export const Navigation: Story = {
  args: {
    currentHashTagNumber: '#001',
    nextButtonDisabled: false,
    previousButtonDisabled: false,
  },
};
