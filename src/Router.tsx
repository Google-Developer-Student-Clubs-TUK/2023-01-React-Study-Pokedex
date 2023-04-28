import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { PokedexDetailPage, PokedexListPage } from './pages';

const router = createBrowserRouter(
  [
    {
      path: '/',
      children: [
        { index: true, element: <PokedexListPage /> },
        {
          path: ':id',
          element: <PokedexDetailPage />,
        },
      ],
    },
  ],
  { basename: '/2023-01-React-Study-Pokedex' },
);

export default router;
