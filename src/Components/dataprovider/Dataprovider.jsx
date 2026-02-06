import React, { useReducer, createContext } from "react";
import { reducer, initialState } from "../../utilitiy/Reducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    return (
        <DataContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataContext.Provider>
    );
};