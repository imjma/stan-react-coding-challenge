import * as actionTypes from "../constants";
import { fetchAction } from "../../api";

export function fetchSeries() {
  return fetchAction(actionTypes.SERIES, "/sample.json");
}
