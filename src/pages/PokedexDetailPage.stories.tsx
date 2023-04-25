import type { Meta, StoryObj } from '@storybook/react';

import PokedexDetailPage from './PokedexDetailPage';

const meta: Meta<typeof PokedexDetailPage> = {
  title: 'Pages/PokedexListPage',
  component: PokedexDetailPage,
};

export default meta;
type Story = StoryObj<typeof PokedexDetailPage>;

export const MainPage: Story = {};
