import { createSlice } from "@reduxjs/toolkit";

export const Page = createSlice({
  name: "page",
  initialState: {
    Pizzapage: 1,
    limit: 8,
    Drinkspage:1,
  },
  reducers: {
    SetPage(state, action) {
      state.Pizzapage = action.payload;
    },
    SetDrinkPage(state,action){
      state.Drinkspage = action.payload
    }
  },
});
export const { SetPage,SetDrinkPage } = Page.actions;
export default Page.reducer;
