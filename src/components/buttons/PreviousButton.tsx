import 'twin.macro';

import React from 'react';

import { PreviousIcon } from '../icons';
import Button from './Button';

type PreviousButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
>;

const PreviousButton = (props: PreviousButtonProps) => (
  <Button type='button' {...props}>
    <PreviousIcon />
  </Button>
);

export default PreviousButton;
