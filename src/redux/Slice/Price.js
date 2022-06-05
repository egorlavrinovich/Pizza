import React from "react";
import { createSlice } from "@reduxjs/toolkit/";
import { useEffect, useMemo, useState } from "react";

const initialState = {
  price: 0,
  count: 0,
  pizzas: [],
  counterPizzes: {},
};

export const ShoppingCart = createSlice({
  name: "shopcart",
  initialState,
  reducers: {
    AddPizza(state, action) {
      const valueconsist = state.pizzas.filter(
        (item) => JSON.stringify(action.payload) === JSON.stringify(item)
      );
      if (valueconsist.length) {
        if (state.counterPizzes[action.payload.id]) {
          state.counterPizzes[action.payload.id] += 1;
        } else {
          state.counterPizzes[action.payload.id] = 2;
        }
      }
      if (!state.counterPizzes[action.payload.id]) {
        state.pizzas.push(action.payload);
      }
      state.price += action.payload.price;
      state.count += 1;
    },
    DeletePizza(state, action) {
      delete state.counterPizzes[action.payload.id];
      state.pizzas = state.pizzas.filter(
        (item) => JSON.stringify(item) !== JSON.stringify(action.payload)
      );
    },
  },
});
export const { AddPizza, DeletePizza } = ShoppingCart.actions;
export default ShoppingCart.reducer;
