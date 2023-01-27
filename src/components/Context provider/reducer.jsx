export const initialState = {
  basket: [],
  user: null,
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
        return (
          element.id === action.item.id
        );
      });

      // var index = action.item.index-1;
      
      if (index >= 0) state.basket.splice(index, 1);
      // console.log(state.basket)
      return {
        ...state,
      };
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
