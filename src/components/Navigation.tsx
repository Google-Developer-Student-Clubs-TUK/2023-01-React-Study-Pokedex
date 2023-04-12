import 'twin.macro';

import React from 'react';

import { NextButton, PreviousButton } from './buttons';

type NavigationProps = {
  currentHashTagNumber: string;
  onPreviousButtonClick: () => void;
  onNextButtonClick: () => void;
  previousButtonDisabled?: boolean;
  nextButtonDisabled?: boolean;
};

const Navigation = ({
  currentHashTagNumber,
  onPreviousButtonClick,
  onNextButtonClick,
  previousButtonDisabled = false,
  nextButtonDisabled = false,
}: NavigationProps) => (
  <div tw='flex items-center'>
    <PreviousButton
      onClick={onPreviousButtonClick}
      disabled={previousButtonDisabled}
    />
    <div tw='flex-1 text-center text-sm text-black/80 font-medium'>
      {currentHashTagNumber}
    </div>
    <NextButton onClick={onNextButtonClick} disabled={nextButtonDisabled} />
  </div>
);

export default Navigation;
