import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./index";

const meta: Meta<typeof Card> = {
  title: "blocks/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  render: (args) => <Card {...args} />,
};

Primary.args = {
  title: "title",
  children: <div>카드 바디</div>,
};
