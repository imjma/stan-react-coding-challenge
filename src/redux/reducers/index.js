import appReducer from "./App";
import seriesReducer from "./Series";
import moviesReducer from "./Movies";

import { initialState as $$appState } from "./App";
import { initialState as $$seriesState } from "./Series";
import { initialState as $$moviesState } from "./Movies";

export default {
  $$appStore: appReducer,
  $$seriesStore: seriesReducer,
  $$moviesStore: moviesReducer,
};

export const initialStates = {
  $$appState,
  $$seriesState,
  $$moviesState,
};
