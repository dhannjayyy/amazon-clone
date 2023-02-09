export const initialState = {
  basket: [],
  user: null,
};

export const getBasketValue = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((element) => {
        return element.id === action.item.id;
      });

      if (index >= 0) {
        state.basket.splice(index, 1);
      }
      return {
        ...state,
        basket: [...state.basket],
      };
    
    case "EMPTY_BASKET":
      return {
        ...state,
        basket:[]
      }

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
