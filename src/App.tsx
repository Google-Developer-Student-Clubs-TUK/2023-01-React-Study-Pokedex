import React from "react";
import { Route, Routes } from "react-router-dom";

import PokemonListPage from "@/pages/PokemonListPage";
import PokemonPage from "@/pages/PokemonPage";
import CaughtPage from "@/pages/CaughtPage";

import { Header } from "@/components/blocks/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/poke-encyclopedia/:id" element={<PokemonPage />} />
        <Route path="/poke-encyclopedia" element={<PokemonListPage />} />
        <Route path="/poke-encyclopedia/caught" element={<CaughtPage />} />
      </Routes>
    </>
  );
}
