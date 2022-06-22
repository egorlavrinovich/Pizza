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
        let result=[]
        switch (obj.type) {
          case "pizzas":
            result = state.pizzas.filter(
              (item) =>
                item.url == obj.url &&
                item.dough == obj.dough &&
                item.length == obj.length
            );
            break;
            case "drinks":
              result = state.drinks.filter(
                (item) =>
                  item.url == obj.url &&
                  item.volume == obj.volume
              );
              break;
          default: return obj;
        }
        if (result.length) {
          result[0].count += 1;
          return false;
        }
        return result;
      }
      if (findElem(action.payload)){
        const way = action.payload.type // Указываем путь массива, куда будем добавлять наши элементы
        state[way].push({
          ShopcartId: Date.now(),
          ...action.payload,
          count: 1,
        });
      }
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


