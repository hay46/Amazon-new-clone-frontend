import { useReducer,createContext } from "react";

import { reducer, initialState } from "../../utilitiy/Reducer";

export const DataContext = createContext();
export const DataProvider = ({ children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};


