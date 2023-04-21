import type { Meta, StoryObj } from '@storybook/react';

import PokedexPictureComponent from './PokedexPicture';

const meta: Meta<typeof PokedexPictureComponent> = {
  title: 'Domains/PokedexPicture',
  component: PokedexPictureComponent,
};

export default meta;
type Story = StoryObj<typeof PokedexPictureComponent>;

export const PokedexPicture: Story = {};
