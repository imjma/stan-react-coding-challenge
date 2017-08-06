import axios from "axios";

export const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
};

export const fetchAction = (actionType, url) => {
  return dispatch => {
    dispatch({ type: `ADD_LOADING` });
    dispatch({ type: `FETCH_${actionType}` });
    axios
      .get(url)
      .then(response => {
        dispatch({
          type: `FETCH_${actionType}_SUCCESS`,
          payload: response.data,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
    dispatch({ type: `REMOVE_LOADING` });
  };
};
