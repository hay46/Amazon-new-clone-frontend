import { type } from "./Action";

export const initialState = {
  basket: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TO_BASKET: {
      // Use action.payload and handle both id and ASIN
      const item = action.payload;
      
      if (!item) {
        console.error('ADD_TO_BASKET: item is undefined');
        return state;
      }

      // Get unique identifier (support both id and ASIN)
      const itemKey = item.id || item.ASIN;
      
      // check if the item exists
      const existingItem = state.basket.find((basketItem) => {
        const basketKey = basketItem.id || basketItem.ASIN;
        return basketKey === itemKey;
      });

      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...item, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((basketItem) => {
          const basketKey = basketItem.id || basketItem.ASIN;
          return basketKey === itemKey 
            ? { ...basketItem, amount: (basketItem.amount || 0) + 1 } 
            : basketItem;
        });

        return {
          ...state,
          basket: updatedBasket,
        };
      }
    }

    case type.REMOVE_FROM_BASKET: {
      const itemId = action.payload;
      
      if (!itemId) {
        console.error('REMOVE_FROM_BASKET: id is undefined');
        return state;
      }

      // Find the item in basket
      const existingItem = state.basket.find((basketItem) => {
        const basketKey = basketItem.id || basketItem.ASIN;
        return basketKey === itemId;
      });

      if (!existingItem) {
        return state; // Item not found
      }

      // If amount > 1, decrease it. If amount === 1, remove item
      if (existingItem.amount > 1) {
        const updatedBasket = state.basket.map((basketItem) => {
          const basketKey = basketItem.id || basketItem.ASIN;
          return basketKey === itemId 
            ? { ...basketItem, amount: basketItem.amount - 1 } 
            : basketItem;
        });

        return {
          ...state,
          basket: updatedBasket,
        };
      } else {
        // Remove item from basket
        const updatedBasket = state.basket.filter((basketItem) => {
          const basketKey = basketItem.id || basketItem.ASIN;
          return basketKey !== itemId;
        });

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