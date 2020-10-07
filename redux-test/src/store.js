import { createStore } from "redux";

const InitialState = {};

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export function initializeStore() {
  return createStore(reducer);
}
