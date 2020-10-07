import { applyMiddleware, createStore } from "redux";
import thunkMiddlware from "redux-thunk";

const InitialState = {
  inputValue: "",
  tasks: [],
};

export const reducer = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, state.inputValue],
      };
    case "CHANGE_INPUT_VALUE":
      return {
        ...state,
        inputValue: payload,
      };
    default:
      return state;
  }
};

export const addTask = () => (dispatch) => {
  return dispatch({
    type: "ADD_TASK",
  });
};

export const changeInputValue = (value) => (dispatch) => {
  return dispatch({
    type: "CHANGE_INPUT_VALUE",
    payload: value,
  });
};

export function initializeStore() {
  return createStore(reducer, InitialState, applyMiddleware(thunkMiddlware));
}
