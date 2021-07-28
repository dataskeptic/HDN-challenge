import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from 'axios';


// Initial state
const initialState = {
  heroes: [],
  error: null,
  loading: true
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getHeroes() {
    try {
      const res = await axios.get('/api/heroes');

      dispatch({
        type: 'GET_HEROES',
        payload: res.data.data
      });
    } catch (err) {
      dispatch({
        type: 'HEROES_ERROR',
        payload: err.response.data.error
      });
    }
  }

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
        error: state.error,
        loading: state.loading,
        getHeroes,
        deleteHero, 
        addHero
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
