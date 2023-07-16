import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {

    addUser(state, action) {
      state.push(action.payload);
    },

    addSaveData(state, action) {
      const { id, data } = action.payload;
      const value = state.find((e) => e.userID === id);
      if (value) {
        value.savedArray.push(data);
      }
    },

    removeSaveData(state, action) {
      const { id, data } = action.payload;
      const value = state.find((e) => e.userID === id);
      if (value) {
        value.savedArray = value.savedArray.filter((e) => {
          return e.zpid != data.zpid;
        });
      }
    },

   
  },
});

export { UserSlice };

export const { addUser, addSaveData, removeSaveData } = UserSlice.actions;
