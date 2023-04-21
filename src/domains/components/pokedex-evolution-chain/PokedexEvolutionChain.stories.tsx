import type { Meta, StoryObj } from '@storybook/react';

import PokedexEvolutionChainComponent from './PokedexEvolutionChain';

const meta: Meta<typeof PokedexEvolutionChainComponent> = {
  title: 'Domains/PokedexEvolutionChain',
  component: PokedexEvolutionChainComponent,
};

export default meta;
type Story = StoryObj<typeof PokedexEvolutionChainComponent>;

export const PokedexEvolutionChain: Story = {};
