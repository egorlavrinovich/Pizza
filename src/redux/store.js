import { configureStore } from "@reduxjs/toolkit";
import filter from "./Slice/FilterSlice";
import shopcart from "./Slice/PriceSlice";
import posts from "./Slice/AllPizzasSlice";
import page from "./Slice/Page";

export default configureStore({
  reducer: {
    filter,
    shopcart,
    posts,
    page,
  },
});
