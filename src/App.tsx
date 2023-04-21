import React from "react";
import { Route, Routes } from "react-router-dom";

import PokemonListPage from "@/pages/PokemonListPage";
import PokemonPage from "@/pages/PokemonPage";

export default function App() {
  return (
    <Routes>
      <Route path="/poke-encyclopedia/:id" element={<PokemonPage />} />
      <Route path="/poke-encyclopedia/" element={<PokemonListPage />} />
    </Routes>
  );
}
