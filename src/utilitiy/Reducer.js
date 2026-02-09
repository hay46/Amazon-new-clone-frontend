import { Type } from "./Action";

// 1. Selector - ጠቅላላ ዋጋን ለማስላት
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => {
    const price = typeof item.price === "string"
        ? parseFloat(item.price.replace(/[^0-9.-]+/g, ""))
        : item.price;
    return price * (item.amount || 1) + amount;
  }, 0);

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      // ብሎክ መክፈቻ { } ተጨምሯል
      const existingItemIndex = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );

      let newBasket = [...state.basket];

      if (existingItemIndex >= 0) {
        // እቃው ካለ ብዛቱን ይጨምራል
        newBasket[existingItemIndex] = {
          ...newBasket[existingItemIndex],
          amount: (newBasket[existingItemIndex].amount || 0) + 1,
        };
      } else {
        // እቃው አዲስ ከሆነ ይጨምራል
        newBasket.push({ ...action.payload, amount: 1 });
      }

      return {
        ...state,
        basket: newBasket,
      };
    }

    case Type.REMOVE_FROM_BASKET: {
      // ብሎክ መክፈቻ { } ተጨምሯል
      const index = state.basket.findIndex((item) =>String( item.id) === String(action.payload));
      let updatedBasket = [...state.basket]; // እዚህ ጋር ስሙን ቀይረነዋል (updatedBasket)

      if (index >= 0) {
        if (updatedBasket[index].amount > 1) {
          // ብዛቱ ከ 1 በላይ ከሆነ 1 ቀንሰን እናስቀምጣለን
          updatedBasket[index] = {
            ...updatedBasket[index],
            amount: updatedBasket[index].amount - 1,
          };
        } else {
          // ብዛቱ 1 ከሆነ ሙሉ በሙሉ እናስወግደዋለን
          updatedBasket.splice(index, 1);
        }
      }
      return {
        ...state,
        basket: updatedBasket,
      };
    }

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