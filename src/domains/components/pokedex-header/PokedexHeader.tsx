import 'twin.macro';

import React from 'react';

const PokedexHeader = () => (
  <>
    <div tw='container flex items-center px-8 mt-8 justify-between mx-auto max-w-5xl'>
      <p tw='text-2xl opacity-70 font-semibold flex gap-2 items-center'>
        Pokémon
      </p>
      <p tw='text-2xl opacity-70 font-semibold'>111</p>
    </div>
    <div tw='container flex items-center px-8 justify-between mx-auto max-w-5xl'>
      <p tw='text-8xl font-semibold opacity-70 font-fun'>bulbasaur</p>
    </div>
  </>
);
export default PokedexHeader;
