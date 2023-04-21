import type { Meta, StoryObj } from '@storybook/react';

import PokedexStatsComponent from './PokedexStats';

const meta: Meta<typeof PokedexStatsComponent> = {
  title: 'Domains/PokedexStats',
  component: PokedexStatsComponent,
};

export default meta;
type Story = StoryObj<typeof PokedexStatsComponent>;

export const PokedexStats: Story = {};
