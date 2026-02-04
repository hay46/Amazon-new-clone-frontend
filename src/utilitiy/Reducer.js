import { UNSAFE_RSCDefaultRootErrorBoundary } from "react-router-dom";
import { type } from "./Action";

export const initialState = {
  basket: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TO_BASKET:
      //check id item is exist 
      const existingitem = state.baskat.find((item)=>item.id===action.item.id)
      if(existingitem){
  return {
        ...state,
        basket : [...state.basket,{...action.item,amount:1}]
      }
    }else{
      
    }

    default:
      return state;
  }
};