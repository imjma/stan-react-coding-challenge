import { Map } from "immutable";
import _ from "lodash";
import { createReducer } from "../../api";
import * as actionTypes from "../constants";
import { filterEntries } from "../../func";

export const initialState = new Map();

export default createReducer(initialState, {
  [`FETCH_${actionTypes.MOVIES}_SUCCESS`]($$state, action) {
    const data = filterEntries(action.payload.entries, "movie");
    return $$state.merge({
      total: _.size(data),
      entries: data,
    });
  },
});
