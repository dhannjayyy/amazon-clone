export let initialState = {
  basket: [],
  wishlist: [],
  user: null,
};

if (localStorage.amazonBasket) {
  initialState.basket = JSON.parse(localStorage.getItem("amazonBasket"));
}

export const getBasketValue = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      if (localStorage.amazonBasket) {
        let currentLocalBasket = JSON.parse(
          localStorage.getItem("amazonBasket")
        );
        currentLocalBasket = [...currentLocalBasket, action.item];
        localStorage.setItem(
          "amazonBasket",
          JSON.stringify(currentLocalBasket)
        );
        state.basket = currentLocalBasket;
      } else {
        localStorage.setItem("amazonBasket", JSON.stringify([action.item]));
        state.basket = [action.item];
      }
      return {
        ...state,
        // basket: [...state.basket,action.item],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex((element) => {
        return element.id === action.item.id;
      });

      if (index >= 0) {
        state.basket.splice(index, 1);
        localStorage.setItem("amazonBasket", JSON.stringify(state.basket));
      }
      return {
        ...state,
        basket: [...state.basket],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
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
