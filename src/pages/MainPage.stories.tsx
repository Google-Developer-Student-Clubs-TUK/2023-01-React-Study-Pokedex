import type { Meta, StoryObj } from '@storybook/react';

import MainPageComponent from './MainPage';

const meta: Meta<typeof MainPageComponent> = {
  title: 'Pages/MainPage',
  component: MainPageComponent,
};

export default meta;
type Story = StoryObj<typeof MainPageComponent>;

export const MainPage: Story = {};