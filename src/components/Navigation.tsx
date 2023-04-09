import 'twin.macro';

import React from 'react';

import { NextButton, PreviousButton } from './button';

type NavigationProps = {
  currentHashTagNumber: string;
  onPreviousButtonClick: () => void;
  onNextButtonClick: () => void;
};

const Navigation = ({
  currentHashTagNumber,
  onPreviousButtonClick,
  onNextButtonClick,
}: NavigationProps) => (
  <div tw='flex items-center'>
    <PreviousButton onClick={onPreviousButtonClick} />
    <div tw='flex-1 text-center text-sm text-black/80 font-medium'>
      {currentHashTagNumber}
    </div>
    <NextButton onClick={onNextButtonClick} />
  </div>
);

export default Navigation;
