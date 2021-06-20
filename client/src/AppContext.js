import { useReducer, createContext } from 'react';

const initialState = {
  products: [],
  cartItems: [],
  totalAmount: 0,
  totalItem: 0,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_PRODUCTS':
      return { ...state, products: payload };

    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };

    case 'INCREMENT_QUANTITY':
      const incrementQuantity = state.cartItems.map((item) => {
        if (item.productId === payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return { ...state, cartItems: incrementQuantity };

    case 'DECREMENT_QUANTITY':
      const decrementQuantity = state.cartItems.map((item) => {
        if (item.productId === payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return { ...state, cartItems: decrementQuantity };

    case 'CART_ITEMS':
      return { ...state, cartItems: payload };
    case 'CLEAR_CART':
      return { ...state, cartItems: [] };

    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.productId !== payload),
      };

    case 'GET_TOTAL':
      let { totalAmount, totalItem } = state.cartItems.reduce(
        (accum, curVal) => {
          let { specialPrice, quantity } = curVal;
          let updatedTotalAmount = specialPrice * quantity;
          accum.totalAmount += updatedTotalAmount;

          accum.totalItem += quantity;
          return accum;
        },
        {
          totalItem: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalAmount, totalItem };
    default:
      return { ...state };
  }
};

const AppContext = createContext({
  state: initialState,
  dispatch: () => {},
});

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
