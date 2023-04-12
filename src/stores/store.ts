import { configureStore } from "@reduxjs/toolkit";
import pokemonIdReducer from "./pokemonIdSlice";
import pokemonReducer from "./pokemonSlice";
import colorReducer from "./colorSlice";

export const store = configureStore({
  reducer: {
    pokemonId: pokemonIdReducer,
    pokemon: pokemonReducer,
    color: colorReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;