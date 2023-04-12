import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface pokemonState {
  id: number;
  name: string;
  profile: string;
  stats: {
    Hp: number;
    Attack: number;
    Defense: number;
    "Sp. Atk": number;
    "Sp. Def": number;
    Speed: number;
  };
  types: string[];
  evolutionChain: { id: number; name: string }[];
}

const initialState: pokemonState = {
  id: 0,
  name: "",
  profile: "",
  stats: {
    Hp: 0,
    Attack: 0,
    Defense: 0,
    "Sp. Atk": 0,
    "Sp. Def": 0,
    Speed: 0,
  },
  types: [],
  evolutionChain: [],
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getPokemon: (
      state,
      action: PayloadAction<Omit<pokemonState, "isLoading">>
    ) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.profile = action.payload.profile;
      state.stats = action.payload.stats;
      state.types = action.payload.types;
      state.evolutionChain = action.payload.evolutionChain;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
