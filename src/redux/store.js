import { configureStore } from "@reduxjs/toolkit";
import filter from "./Slice/FilterSlice";
import shopcart from "./Slice/Price";

export default configureStore({
  reducer: {
    filter,
    shopcart,
  },
});
