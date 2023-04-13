import 'twin.macro';

import React from 'react';

import { BackgroundIcon } from '@/components/icons';
import { useBackgroundColor } from '@/domains/hooks';

const Background = () => {
  const { color, iconColor } = useBackgroundColor();

  return (
    <div>
      <div
        tw='fixed z-[-10] opacity-50 inset-0'
        style={{
          backgroundImage: color,
          transition: 'background-image 0.5s ease',
        }}
      />
      <div tw='fixed z-[-8] inset-0 opacity-30'>
        <BackgroundIcon size='75vh' color={iconColor} />
      </div>
    </div>
  );
};

export default Background;
