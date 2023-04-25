import 'twin.macro';

import React from 'react';

import PokedexList from '@/domains/components/pokedex-list/PokedexList';

const PokedexListPage = () => (
  <div tw='w-1/2 mx-auto mt-40'>
    <PokedexList />
  </div>
);

export default PokedexListPage;
