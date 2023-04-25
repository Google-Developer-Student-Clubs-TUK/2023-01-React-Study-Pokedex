import type { Meta, StoryObj } from '@storybook/react';

import PokedexItemComponent from './PokedexItem';

const meta: Meta<typeof PokedexItemComponent> = {
  title: 'Domains/PokedexItem',
  component: PokedexItemComponent,
};

export default meta;
type Story = StoryObj<typeof PokedexItemComponent>;

export const PokedexItem: Story = {
  args: {
    pokemonName: 'Pikachu',
    pokemonImageSrc:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
  },
};
