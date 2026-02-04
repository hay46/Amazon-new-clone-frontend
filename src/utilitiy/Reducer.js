import { type } from "./Action";

export const initialState = {
  basket: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TO_BASKET: {
      // check if item exists
      const existingItem = state.basket.find((item) => item.id === action.item.id);

      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((item) =>
          item.id === action.item.id ? { ...item, amount: (item.amount || 0) + 1 } : item
        );

        return {
          ...state,
          basket: updatedBasket,
        };
      }
    }

    default:
      return state;
  }
};