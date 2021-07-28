import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial state
const initialState = {
  heroes: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getHeroes() {
    try {
      const res = await axios.get("/api/heroes");

      dispatch({
        type: "GET_HEROES",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "HEROES_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function deleteHero(id) {
    try {
      await axios.delete(`/api/heroes/${id}`);

      dispatch({
        type: "DELETE_HERO",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "HEROES_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addHero(hero) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/heroes", hero, config);

      dispatch({
        type: "ADD_HERO",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "HERO_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        heroes: state.heroes,
        error: state.error,
        loading: state.loading,
        getHeroes,
        deleteHero,
        addHero,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
