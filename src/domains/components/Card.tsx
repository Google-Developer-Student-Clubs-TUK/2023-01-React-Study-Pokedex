import 'twin.macro';

import React from 'react';

import { Navigation } from '@/components';

import { useNavigation } from '../hooks';
import { createLeadingZero } from '../utils';

type CardProps = {
  title: string;
  contents: React.ReactNode;
  style?: React.CSSProperties;
};

const Card = ({ title, contents, style }: CardProps) => {
  const { currentNumber, handleNext, handlePrevious } = useNavigation();

  return (
    <div
      tw='bg-white/70 flex flex-col p-3 aspect-square backdrop-blur-md rounded-xl h-72'
      style={style}>
      <div tw='flex'>
        <p tw='font-semibold flex-1 text-lg text-black/70'>{title}</p>
      </div>
      {contents}
      <Navigation
        currentHashTagNumber={`#${createLeadingZero(currentNumber)}`}
        onPreviousButtonClick={handlePrevious}
        onNextButtonClick={handleNext}
        nextButtonDisabled={currentNumber === 898}
        previousButtonDisabled={currentNumber === 1}
      />
    </div>
  );
};

export default Card;
