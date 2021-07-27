import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  heroes: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteHero(id) {
    dispatch({
      type: "DELETE_HERO",
      payload: id,
    });
  }

  function addHero(hero) {
    dispatch({
      type: 'ADD_HERO',
      payload: hero
    });
  }

  return (

    <GlobalContext.Provider
      value={{
        heroes: state.heroes,
        deleteHero, 
        addHero
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
