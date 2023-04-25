import 'twin.macro';

import React from 'react';

import PokedexList from '@/domains/components/pokedex-list/PokedexList';

const PokedexListPage = () => (
  <div tw='w-1/2 mx-auto mt-10'>
    <h1 tw='text-center text-7xl font-bold mb-20'>GDSC TUK React Study</h1>
    <PokedexList />
  </div>
);

export default PokedexListPage;
