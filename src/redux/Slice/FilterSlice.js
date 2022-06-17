import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: "name",
  category: "all",
  symbol: "",
};

export const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterPopular(state, action) {
      state.popular = action.payload;
    },
    filterCategory(state, action) {
      state.category = action.payload;
    },
    filterSymbol(state, action) {
      state.symbol = action.payload;
    },
  },
});
export const { filterPopular, filterCategory, filterSymbol } =
  FilterSlice.actions;

export default FilterSlice.reducer;
