import { createStore } from "redux";

import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import authSlice from "./authSlice";



// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }

//   if (action.type === "increase") {
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

//const store = createStore(counterReducer);

//const store = createStore(counterSlice.reducer);

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

// const store = configureStore({
//   reducer: counterSlice.reducer,
// });

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
