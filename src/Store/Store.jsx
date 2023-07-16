import { configureStore } from "@reduxjs/toolkit";
import {UserSlice} from "./UserSlice/UserSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { LoginUserSlice } from "./LoginUserSlice/LoginUserSlice";





// const store = configureStore({
//   reducer :{
//     users: UserSlice.reducer,
//       loginUsers :LoginUserSlice.reducer
//   },
// })


const rootReducer = combineReducers({
  users: UserSlice.reducer,
  loginUsers :LoginUserSlice.reducer,
  
});
const persistConfig = {
  key: "root",

  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;
