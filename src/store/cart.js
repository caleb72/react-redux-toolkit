import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0.0,
  isChanged: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
      state.totalAmount = action.payload.totalAmount;
      state.items = action.payload.items;
      state.isChanged = false;
    },
    addItem: (state, action) => {
      const newItem = action.payload;

      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }

      state.totalQuantity++;
      state.totalAmount += newItem.price;
      state.isChanged = true;
    },

    removeItem: (state, action) => {
      const id = action.payload;

      const existingIndex = state.items.findIndex((item) => item.id === id);
      const existingItem = state.items[existingIndex];

      if (existingItem.quantity > 1) {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      } else {
        state.items.splice(existingIndex, 1);
      }

      state.totalQuantity--;
      state.totalAmount -= existingItem.price;
      state.isChanged = true;
    },

    emptyCart: (state) => {
      state = initialState;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
