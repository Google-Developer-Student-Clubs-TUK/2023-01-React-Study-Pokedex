import 'twin.macro';

import React from 'react';

import { NextIcon } from '../icons';
import Button from './Button';

type NextButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
>;

const NextButton = (props: NextButtonProps) => (
  <Button type='button' {...props}>
    <NextIcon />
  </Button>
);

export default NextButton;
