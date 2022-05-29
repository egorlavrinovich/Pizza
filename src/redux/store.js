import { configureStore } from "@reduxjs/toolkit";
import filter from "./Slice/FilterSlice";

export default configureStore({
  reducer: {
    filter,
  },
});
