import { createAction, createReducer } from "@reduxjs/toolkit";

export const addToCart = createAction("addToCart");
export const removeToCart = createAction("removeToCart");
export const removeCart = createAction("removeCart");
export const modifCantidad = createAction("modifCantidad");

export const setCart = createAction("setCart");

const reducerCart = createReducer([], {
  [setCart]: (state, action) => void (state = action.payload),
  [removeCart]: (state, action) => void (state = []),
  [addToCart]: (state, action) => void state.push(action.payload),
  [removeToCart]: (state, action) => void (state[action.payload] = null),
  [modifCantidad]: (state, action) =>
    (state[action.payload[0]].cantidad = void action.payload[1]),
});

export default reducerCart;
