import 'twin.macro';

import React from 'react';

import { PreviousIcon } from '../icons';

type PreviousButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
>;

const PreviousButton = (props: PreviousButtonProps) => (
  <button
    tw='text-black/80 hover:bg-black/5 w-8 h-8 flex justify-center items-center rounded-md'
    type='button'
    {...props}>
    <PreviousIcon />
  </button>
);

export default PreviousButton;
