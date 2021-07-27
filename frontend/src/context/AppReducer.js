const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_HERO":
      return {
        ...state,
        heroes: state.heroes.filter((hero) => hero.id !== action.payload),
      };
    case "ADD_HERO":
      return {
        ...state,
        heroes: [action.payload, ...state.heroes]
      };
    default:
      return state;
  }
};

export default AppReducer; 
