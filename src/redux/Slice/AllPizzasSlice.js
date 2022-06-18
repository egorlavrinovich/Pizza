import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchposts } from "../../API/fetchposts";
import { Fetch } from "../../hooks/RequestHandling";
import axios from "axios";

export const fetchUserById = createAsyncThunk(
  "allpizzas/fetchstatus",
  async () => {
    const response = await axios.get(
      "https://628f6338dc478523653f95fe.mockapi.io/Items"
    );
    return response.data;
  }
);

const initialState = {
  Pizzes: [],
};

export const AllPizzas = createSlice({
  name: "allpizzas",
  initialState,
  reducers: {
    getAllPizzes(state, action) {
      state.Pizzes = [...state.Pizzes, ...action.payload];
    },
  },
  extraReducers: {
    [fetchUserById.pending]: (state, action) => {
      console.log(state);
    },
    [fetchUserById.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [fetchUserById.rejected]: (state, action) => {
      console.log(state);
    },
  },
});
export const { getAllPizzes } = AllPizzas.actions;

export default AllPizzas.reducer;
