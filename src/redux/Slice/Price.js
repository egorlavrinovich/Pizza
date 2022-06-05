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
    AddPizza(state, action) {
      state.pizzas.push(action.payload);
      state.price += action.payload.price;
      state.count += 1;
    },
    DeletePizza(state, action) {
      console.log(action.payload);
      state.pizzas = state.pizzas.filter(
        (item) => JSON.stringify(item) !== JSON.stringify(action.payload)
      );
    },
  },
});
export const { AddPizza, DeletePizza } = ShoppingCart.actions;
export default ShoppingCart.reducer;
