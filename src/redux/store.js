import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { initialStates } from "./reducers";

function configureStore() {
  const reducer = combineReducers(reducers);

  let middlewares = [thunk];

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;

  const initialState = {
    $$appStore: initialStates.$$appState.merge({}),
    $$seriesStore: initialStates.$$seriesState.merge({}),
    $$moviesStore: initialStates.$$moviesState.merge({}),
  };

  return createStore(reducer, initialState, composeEnhancers(...enhancers));
}

export default configureStore;
