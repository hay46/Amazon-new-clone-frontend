import React, { useReducer, createContext } from "react";
import { reducer, initialState } from "../../utilitiy/Reducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    // እዚህ ጋር በ Array [state, dispatch] መላክ አለበት
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <DataContext.Provider value={[state, dispatch]}>
            {children}
        </DataContext.Provider>
    );
};