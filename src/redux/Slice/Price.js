import React from "react";
import { createSlice, current } from "@reduxjs/toolkit/";
import { useEffect, useMemo, useState } from "react";

const initialState = {
  price: 0,
  count: 0,
  pizzas: [],
  allpizzas:[],
  counterPizzes: {},
};

export const ShoppingCart = createSlice({
  name: "shopcart",
  initialState,
  reducers: {
    AddPizza(state, action) {
      const obj = {...action.payload,count:1}
      function findpizza(pizza) {
        const pizas = state.allpizzas.filter(item=>JSON.stringify(item)===JSON.stringify(pizza))
        if(pizas.length){
          return pizas.length
        }
        return pizza
      } 
      if(findpizza(action.payload)){
        state.pizzas.push(obj)
        state.allpizzas.push(action.payload)
      }
      state.price += action.payload.price;
      state.count += 1;
      console.log(current(state))
    },
    DeletePizza(state, action) {
      // const count = state.counterPizzes[action.payload.id]; // Обязательно записываем наш стейт в переменную
      // state.count -= count;
      // state.price -= +count * +action.payload.price;
      // delete state.counterPizzes[action.payload.id];
      // state.pizzas = state.pizzas.filter(
      //   (item) => JSON.stringify(item) !== JSON.stringify(action.payload)
      // );
    },
    ReducePizza(state, action) {
      // if (state.counterPizzes[action.payload.id] > 1) {
      //   state.counterPizzes[action.payload.id] -= 1;
      //   state.count -= 1;
      //   state.price -= action.payload.price;
      // }
    },
  },
});
export const { AddPizza, DeletePizza, ReducePizza } = ShoppingCart.actions;
export default ShoppingCart.reducer;
