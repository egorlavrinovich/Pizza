import React from "react";
import { createSlice, current } from "@reduxjs/toolkit/";
import { useEffect, useMemo, useState } from "react";

const initialState = {
  price: 0,
  count: 0,
  pizzas: [],
  drinks:[],
  counterPizzes: {},
};

export const ShoppingCart = createSlice({
  name: "shopcart",
  initialState,
  reducers: {
    AddPizza(state, action) {
      function findElem(obj) {
        const result = state.pizzas.filter(
          (item) =>
            item.url == obj.url &&
            item.dough == obj.dough &&
            item.length == obj.length
        );
        if (result.length) {
          result[0].count += 1;
          return false;
        }
        return result;
      }
      if (findElem(action.payload))
        state.pizzas.push({
          ShopcartId: Date.now(),
          ...action.payload,
          count: 1,
        });
      state.price += action.payload.price;
      state.count += 1;
    },
    DeletePizza(state, action) {
      const findobj = state.pizzas[action.payload.index]; // Обязательно записываем наш стейт в переменную
      state.pizzas = state.pizzas.filter(
        (item, index) => index !== action.payload.index
      );
      state.count -= findobj.count;
      state.price -= +findobj.count * +action.payload.price;
    },
    ReducePizza(state, action) {
      if (state.pizzas[action.payload.index].count > 1) {
        state.pizzas[action.payload.index].count -= 1;
        state.count -= 1;
        state.price -= action.payload.price;
      }
    },
  },
});
export const { AddPizza, DeletePizza, ReducePizza } = ShoppingCart.actions;
export default ShoppingCart.reducer;