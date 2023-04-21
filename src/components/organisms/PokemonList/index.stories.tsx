import type { Meta, StoryObj } from "@storybook/react";

import { PokemonList } from "./index";

const meta: Meta<typeof PokemonList> = {
  title: "organisms/PokemonList",
  component: PokemonList,
};

export default meta;
type Story = StoryObj<typeof PokemonList>;

export const Primary: Story = {
  render: () => <PokemonList />,
};
