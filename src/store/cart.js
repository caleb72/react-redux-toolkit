import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0.0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },

    removeItem: (state, action) => {
      const id = action.payload;

      const existingIndex = state.items.findIndex((item) => item.itemId === id);
      const existingItem = state.items[existingIndex];

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      } else {
        state.items.splice(existingIndex, 1);
      }
    },

    emptyCart: (state) => {
      state = initialState;
    }
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
