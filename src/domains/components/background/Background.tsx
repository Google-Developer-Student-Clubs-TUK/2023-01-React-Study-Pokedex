import 'twin.macro';

import React from 'react';

import { BackgroundIcon } from '@/components/icons';

const Background = () => (
  <div>
    <div
      tw='fixed z-[-10] opacity-50 inset-0'
      style={{
        backgroundImage:
          'linear-gradient(45deg, rgb(33, 212, 182) 0%, rgb(134, 213, 134) 100%)',
        transition: 'background-image 0.5s ease',
      }}
    />
    <div tw='fixed z-[-8] inset-0 opacity-30'>
      <BackgroundIcon size='75vh' color='hsl(145deg 48% 48%)' />
    </div>
  </div>
);

export default Background;
