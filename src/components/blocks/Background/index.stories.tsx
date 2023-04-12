import type { Meta, StoryObj } from "@storybook/react";

import { Background } from "./index";

const meta: Meta<typeof Background> = {
  title: "blocks/Background",
  component: Background,
};

export default meta;
type Story = StoryObj<typeof Background>;

export const Primary: Story = {
  render: () => <Background />,
};
