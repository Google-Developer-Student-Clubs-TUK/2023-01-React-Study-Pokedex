import type { Meta, StoryObj } from "@storybook/react";

import { PokemonTypeCard } from "./index";

const meta: Meta<typeof PokemonTypeCard> = {
  title: "organisms/PokemonTypeCard",
  component: PokemonTypeCard,
};

export default meta;
type Story = StoryObj<typeof PokemonTypeCard>;

export const Primary: Story = {
  render: () => <PokemonTypeCard types={["grass", "poison"]} />,
};
