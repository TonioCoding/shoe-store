import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      if (state.cart.length < 10) state.cart.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (product) => product._id !== action.payload._id
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
    cartTotal: (state) => {
      if (state.cart.length > 0) {
        let startingTotal = 0;

        state.total = state.cart.reduce((total, currentValue) => {
          return total + currentValue.price;
        }, startingTotal);
      } else if (state.cart.length === 0) {
        state.total = 0;
      }
    },
  },
});

export const { addItemToCart, clearCart, removeItemFromCart, cartTotal } =
  cartSlice.actions;

export default cartSlice.reducer;
