export let initialState = {
  basket: [],
  wishlist: [],
  user: null,
  throughCheckout: false,
};

if (localStorage.amazonBasket) {
  initialState.basket = JSON.parse(localStorage.getItem("amazonBasket"));
}
if (localStorage.amazonWishlist) {
  initialState.wishlist = JSON.parse(localStorage.getItem("amazonWishlist"));
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
      localStorage.setItem("amazonBasket", JSON.stringify([]));
      return {
        ...state,
        basket: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "THROUGH_CHECKOUT":
      return {
        ...state,
        throughCheckout: true,
      };

    case "ADD_TO_WISHLIST":
      if (localStorage.amazonWishlist) {
        let currentLocalWishlist = JSON.parse(
          localStorage.getItem("amazonWishlist")
        );
        currentLocalWishlist = [...currentLocalWishlist, action.item];
        localStorage.setItem(
          "amazonWishlist",
          JSON.stringify(currentLocalWishlist)
        );
        state.wishlist = currentLocalWishlist;
      } else {
        localStorage.setItem("amazonWishlist", JSON.stringify([action.item]));
        state.wishlist = [action.item];
      }
      return {
        ...state,
        // basket: [...state.basket,action.item],
      };

    case "BASKET_TO_WISHLIST":
      const indexToWishlist = state.basket.findIndex((element) => {
        return element.id === action.item.id;
      });

      if (indexToWishlist >= 0) {
        state.basket.splice(indexToWishlist, 1);
        localStorage.setItem("amazonBasket", JSON.stringify(state.basket));
      }
      if (localStorage.amazonWishlist) {
        let currentLocalWishlist = JSON.parse(
          localStorage.getItem("amazonWishlist")
        );
        currentLocalWishlist = [...currentLocalWishlist, action.item];
        localStorage.setItem(
          "amazonWishlist",
          JSON.stringify(currentLocalWishlist)
        );
        state.wishlist = currentLocalWishlist;
      } else {
        localStorage.setItem("amazonWishlist", JSON.stringify([action.item]));
        state.wishlist = [action.item];
      }
      return {
        ...state,
        // basket: [...state.basket,action.item],
      };

    case "REMOVE_FROM_WISHLIST":
      const indexWishlist = state.wishlist.findIndex((element) => {
        return element.id === action.item.id;
      });

      if (indexWishlist >= 0) {
        state.wishlist.splice(indexWishlist, 1);
        localStorage.setItem("amazonWishlist", JSON.stringify(state.wishlist));
      }
      return {
        ...state,
        wishlist: [...state.wishlist],
      };

    case "WISHLIST_TO_BASKET":
      const indexWishlistToBasket = state.wishlist.findIndex((element) => {
        return element.id === action.item.id;
      });

      if (indexWishlistToBasket >= 0) {
        state.wishlist.splice(indexWishlistToBasket, 1);
        localStorage.setItem("amazonWishlist", JSON.stringify(state.wishlist));
      }
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
    case "EMPTY_WISHLIST":
      localStorage.setItem("amazonWishlist", JSON.stringify([]));
      return {
        ...state,
        wishlist: [],
      };
    default:
      return state;
  }
};
export default reducer;
