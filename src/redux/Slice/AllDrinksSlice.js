import { createSlice } from "@reduxjs/toolkit";

const Drinks = createSlice({
  name: "drinks",
  initialState: {
    drinks: [],
  },
  reducers: {
    AddDrinks(state, action) {
      state.drinks = [...state.drinks, ... action.payload]
    },
  },
});

export const { AddDrinks } = Drinks.actions;
export default Drinks.reducer;
