import React, { useReducer, createContext, useContext } from "react";
import { reducer, initialState } from "../../utilitiy/Reducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    return (
        <DataContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </DataContext.Provider>
    );
};

// ይህች አጭር Hook ሌላ ቦታ useContext እንዳትጽፍ ትረዳሃለች
export const useStateValue = () => useContext(DataContext);