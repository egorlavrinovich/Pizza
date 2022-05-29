import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: "name",
  category: "all",
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
  },
});
export const { filterPopular, filterCategory } = FilterSlice.actions;

export default FilterSlice.reducer;
