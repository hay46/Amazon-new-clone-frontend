import React, { createContext, useReducer, useContext } from "react";

import { reducer, initialState } from "../../utilitiy/Reducer";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};

export const useDataContext = () => useContext(DataContext);
export const useDispatch = () => useContext(DataContext).dispatch;
export const useStateValue = () => useContext(DataContext).state;
