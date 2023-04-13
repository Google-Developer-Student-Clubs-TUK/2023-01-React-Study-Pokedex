import type { Meta, StoryObj } from "@storybook/react";

import { PokemonEvolutionChainCard } from "./index";

const meta: Meta<typeof PokemonEvolutionChainCard> = {
  title: "organisms/PokemonEvolutionChainCard",
  component: PokemonEvolutionChainCard,
};

export default meta;
type Story = StoryObj<typeof PokemonEvolutionChainCard>;

export const Primary: Story = {
  render: () => (
    <PokemonEvolutionChainCard
      evolutionChain={[
        { id: 1, name: "bulbasaur" },
        { id: 2, name: "ivysaur" },
        { id: 3, name: "venusaur" },
      ]}
    />
  ),
};
