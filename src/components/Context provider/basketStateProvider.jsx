import { createContext, useContext, useReducer } from "react";

export const BasketStateContext = createContext()

export const BasketState=({reducer,initialState,children})=>{
    return(
    <BasketStateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </BasketStateContext.Provider>   
    )
}


export const useBasketState = () => useContext(BasketStateContext);


