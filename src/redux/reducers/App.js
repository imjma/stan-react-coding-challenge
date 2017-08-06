import { Map } from "immutable";
import { createReducer } from "../../api";

export const initialState = new Map();

export default createReducer(initialState, {
  [`ADD_LOADING`]($$state, action) {
    return $$state.merge({
      loading: true,
    });
  },

  [`REMOVE_LOADING`]($$state, action) {
    return $$state.merge({
      loading: false,
    });
  },
});
