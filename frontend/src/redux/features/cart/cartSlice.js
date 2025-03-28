import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (!existingItem) {
        state.cartItems.push(action.payload);

        Swal.fire({
          title: "Item Added To Cart",
          icon: "success",
        });

      } else {
        Swal.fire({
            icon: "error",
            title: "Item Already in Cart",
          });
      }
    },

    removeFromCart : (state, action) => {
        state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
    },
    
    clearCart : (state) => {
        state.cartItems = []
    }
  },
});

export const { addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
