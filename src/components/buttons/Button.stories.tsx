import 'twin.macro';

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { NextIcon, PreviousIcon } from '../icons';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const NextButton: Story = {
  args: {
    children: <NextIcon />,
  },
};

export const PreviousButton: Story = {
  args: {
    children: <PreviousIcon />,
  },
};
