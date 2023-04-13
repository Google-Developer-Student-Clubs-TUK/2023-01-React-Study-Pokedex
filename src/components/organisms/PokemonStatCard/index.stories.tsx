import type { Meta, StoryObj } from "@storybook/react";

import { PokemonStatCard } from "./index";

const meta: Meta<typeof PokemonStatCard> = {
  title: "organisms/PokemonStatCard",
  component: PokemonStatCard,
};

export default meta;
type Story = StoryObj<typeof PokemonStatCard>;

export const Primary: Story = {
  render: () => (
    <PokemonStatCard
      stats={{
        Attack: 49,
        Defense: 49,
        Hp: 45,
        "Sp. Atk": 65,
        "Sp. Def": 65,
        Speed: 45,
      }}
    />
  ),
};
