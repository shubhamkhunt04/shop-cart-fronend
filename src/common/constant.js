// routes
export const ROUTES = {
  MAIN: '/',
  PRODUCTS: '/products',
  SINGLE_PRODUCT: '/products/:productId',
  CART_ITEMS: '/cartItems',
};

// modules
export const MODULES = {
  ALL: 'ALL',
  REFINANCE: 'REFINANCE',
  FIXED_RATE: 'FIXED RATE',
  FIRST_HOME_BUYER: 'FIRST HOME BUYER',
  NVESTOR: 'NVESTOR',
  NEXT_HOME_BUYER: 'NEXT HOME BUYER',
};

// main end point
export const API = process.env.REACT_APP_SERVER_REST_URL;
