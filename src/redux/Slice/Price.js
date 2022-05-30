import { createSlice } from "@reduxjs/toolkit/";

const initialState = {
  price: 0,
  count: 0,
  pizzas: [],
};

export const ShoppingCart = createSlice({
  name: "shopcart",
  initialState,
  reducers: {
    Price(state, action) {
      state.price += action.payload;
    },
    Count(state, action) {
      state.count += 1;
    },
    AddPizza(state, action) {
      state.pizzas.push(action.payload);
    },
  },
});
export const { Price, Count, AddPizza } = ShoppingCart.actions;
export default ShoppingCart.reducer;
