import { combineReducers } from "redux";

import CountRedux from "../slices/count.slice";
import { PokemonAPI } from "@/services/pokemonAPI";

export const rootReducer = combineReducers({
  [CountRedux.name]: CountRedux.reducer,
  [PokemonAPI.reducerPath]: PokemonAPI.reducer,
});
