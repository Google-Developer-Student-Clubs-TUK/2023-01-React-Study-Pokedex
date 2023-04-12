import type { Meta, StoryObj } from "@storybook/react";

import { PokemonProfileCard } from "./index";

const meta: Meta<typeof PokemonProfileCard> = {
  title: "organisms/PokemonProfileCard",
  component: PokemonProfileCard,
};

export default meta;
type Story = StoryObj<typeof PokemonProfileCard>;

export const Primary: Story = {
  render: () => (
    <PokemonProfileCard profile="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
  ),
};
