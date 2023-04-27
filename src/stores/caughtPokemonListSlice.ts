import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface caughtPokemonListState {
  pokemonList: number[];
}

const pokemonListJSON = window.sessionStorage.getItem("caught-pokemons");

const pokemonList: number[] = pokemonListJSON
  ? JSON.parse(pokemonListJSON)
  : [];

const initialState: caughtPokemonListState = {
  pokemonList: [...pokemonList],
};

export const caughtPokemonListSlice = createSlice({
  name: "caughtPokemonList",
  initialState,
  reducers: {
    addCaughtPokemon: (state, action: PayloadAction<number>) => {
      state.pokemonList = [...state.pokemonList, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCaughtPokemon } = caughtPokemonListSlice.actions;

export default caughtPokemonListSlice.reducer;
