const AppReducer = (state, action) => {
  switch (action.type) {
    case 'GET_HEROES':
      return {
        ...state,
        loading: false,
        heroes: action.payload
      }
    case "DELETE_HERO":
      return {
        ...state,
        heroes: state.heroes.filter((hero) => hero._id !== action.payload),
      };
    case "ADD_HERO":
      return {
        ...state,
        heroes: [...state.heroes, action.payload]
      };
    case 'HEROES_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
};

export default AppReducer; 
