import {Type} from './Action'

export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state = initialState, action) => {
  // 'action.type' በትንሽ ፊደል መሆኑን እርግጠኛ ሁን
  switch (action.type) {
    case Type.ADD_TO_BASKET: {
      const item = action.payload;
      if (!item) return state;

      const itemKey = item.id || item.ASIN;
      const existingItem = state.basket.find((basketItem) => (basketItem.id || basketItem.ASIN) === itemKey);

      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...item, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((basketItem) =>
          (basketItem.id || basketItem.ASIN) === itemKey
            ? { ...basketItem, amount: (basketItem.amount || 0) + 1 }
            : basketItem
        );
        return { ...state, basket: updatedBasket };
      }
    }

    case Type.REMOVE_FROM_BASKET: {
      const itemId = action.payload;
      const existingItem = state.basket.find((item) => (item.id || item.ASIN) === itemId);

      if (!existingItem) return state;

      if (existingItem.amount > 1) {
        const updatedBasket = state.basket.map((item) =>
          (item.id || item.ASIN) === itemId ? { ...item, amount: item.amount - 1 } : item
        );
        return { ...state, basket: updatedBasket };
      } else {
        const updatedBasket = state.basket.filter((item) => (item.id || item.ASIN) !== itemId);
        return { ...state, basket: updatedBasket };
      }
    }

    case Type.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};