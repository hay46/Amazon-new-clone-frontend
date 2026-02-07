import { Type } from "./Action";

// 1. Selector - ይህንን መጨመርህን አረጋግጥ
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => {
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace(/[^0-9.-]+/g, "")) 
      : item.price;
    return (price * item.amount) + amount;
  }, 0);

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const existingItem = state.basket.find((item) => item.id === action.payload.id);
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.payload, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((item) =>
          item.id === action.payload.id ? { ...item, amount: item.amount + 1 } : item
        );
        return { ...state, basket: updatedBasket };
      }

    case Type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.payload);
      let newBasket = [...state.basket];
      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = { ...newBasket[index], amount: newBasket[index].amount - 1 };
        } else {
          newBasket.splice(index, 1);
        }
      }
      return { ...state, basket: newBasket };

    case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case Type.EMPTY_BASKET:
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};