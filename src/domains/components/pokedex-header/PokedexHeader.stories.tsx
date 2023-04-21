import type { Meta, StoryObj } from '@storybook/react';

import PokedexHeaderComponent from './PokedexHeader';

const meta: Meta<typeof PokedexHeaderComponent> = {
  title: 'Domains/PokedexHeader',
  component: PokedexHeaderComponent,
};

export default meta;
type Story = StoryObj<typeof PokedexHeaderComponent>;

export const PokedexHeader: Story = {};
