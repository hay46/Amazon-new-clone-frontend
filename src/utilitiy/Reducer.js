import { type } from "./Action";

export const initialState = {
  basket: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    default:
      return state;
  }
};