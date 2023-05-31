"use client";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";
import { PokemonAPI } from "@/services/pokemonAPI";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(PokemonAPI.middleware);
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
