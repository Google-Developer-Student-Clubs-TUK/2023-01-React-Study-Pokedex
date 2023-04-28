import type { Meta, StoryObj } from "@storybook/react";

import { PokeBall } from "./index";

const meta: Meta<typeof PokeBall> = {
  title: "organisms/PokeBall",
  component: PokeBall,
};

export default meta;
type Story = StoryObj<typeof PokeBall>;

export const Primary: Story = {
  render: () => <PokeBall />,
  decorators: [
    (Stroy) => (
      <div style={{ position: "relative", height: "100vh" }}>
        <Stroy />
      </div>
    ),
  ],
};
