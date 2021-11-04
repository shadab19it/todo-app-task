import React, { createContext, useContext, useReducer } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children, initialState, reducer }) => (
  <GlobalContext.Provider value={useReducer(reducer, initialState)}>{children}</GlobalContext.Provider>
);

export const useGlobalState = () => useContext(GlobalContext);
