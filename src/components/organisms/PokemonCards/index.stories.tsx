import type { Meta, StoryObj } from "@storybook/react";

import { PokemonCards } from "./index";

import { Background } from "@/components/blocks/Background";

const meta: Meta<typeof PokemonCards> = {
  title: "organisms/PokemonCards",
  component: PokemonCards,
};

export default meta;
type Story = StoryObj<typeof PokemonCards>;

export const Primary: Story = {
  render: () => <PokemonCards />,
  decorators: [
    (Story) => (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Story />
        <Background></Background>
      </div>
    ),
  ],
};
