import * as actionTypes from "../constants";
import { fetchAction } from "../../api";

export function fetchMovies() {
  return fetchAction(actionTypes.MOVIES, "/sample.json");
}
