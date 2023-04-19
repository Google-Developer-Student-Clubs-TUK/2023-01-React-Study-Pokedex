import type { Meta, StoryObj } from '@storybook/react';

import PokedexTypeComponent from './PokedexType';

const meta: Meta<typeof PokedexTypeComponent> = {
  title: 'Domains/PokedexType',
  component: PokedexTypeComponent,
};

export default meta;
type Story = StoryObj<typeof PokedexTypeComponent>;

export const PokedexType: Story = {};
