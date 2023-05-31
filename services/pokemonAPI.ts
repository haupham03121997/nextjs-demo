import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
export const PokemonAPI = createApi({
  reducerPath: "POKEMON_API",
  baseQuery,
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: (params) => ({
        url: "pokemon/ditto",
        params,
      }),
    }),
  }),
});

// useGetPokemonQuery auto generator from endpoint getPokemon
export const { useGetPokemonQuery } = PokemonAPI;
