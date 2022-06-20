import { createSlice } from "@reduxjs/toolkit";

export const Page = createSlice({
  name: "page",
  initialState: {
    page: 1,
    limit: 8,
  },
  reducers: {
    SetPage(state, action) {
      state.page = action.payload;
    },
  },
});
export const { SetPage } = Page.actions;
export default Page.reducer;
