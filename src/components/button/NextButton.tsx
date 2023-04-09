import 'twin.macro';

import React from 'react';

import { NextIcon } from '../icons';

type NextButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
>;

const NextButton = (props: NextButtonProps) => (
  <button
    tw='text-black/80 hover:bg-black/5 w-8 h-8 flex justify-center items-center rounded-md'
    type='button'
    {...props}>
    <NextIcon />
  </button>
);

export default NextButton;
