import 'twin.macro';

import React from 'react';

import {
  Background,
  PokedexEvolutionChain,
  PokedexHeader,
  PokedexPicture,
  PokedexStats,
  PokedexType,
} from '@/domains/components';

const MainPage = () => (
  <main tw='mb-24'>
    <div>
      <h1 tw='text-3xl font-bold text-center opacity-70 mt-4'>
        GDSC TUK React Study
      </h1>
      <h2 tw='text-xl font-semibold text-center opacity-60 mt-2'>
        {`Jqkk's Pokédex`}
      </h2>
    </div>
    <PokedexHeader />
    <div tw='flex gap-4 items-center px-8 mt-8 justify-between mx-auto max-w-5xl'>
      <PokedexPicture />
      <PokedexStats />
    </div>
    <div tw='flex gap-4 items-center px-8 mt-4 justify-between mx-auto max-w-5xl'>
      <PokedexType />
      <PokedexEvolutionChain />
    </div>
    <Background />
  </main>
);

export default MainPage;
