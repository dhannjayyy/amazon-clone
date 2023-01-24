export const initialState = {
  basket: [],
};

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
      if (index >= 0) state.basket.splice(index, 1);
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default reducer;
