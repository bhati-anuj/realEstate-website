import { createSlice } from "@reduxjs/toolkit";

const LoginUserSlice = createSlice({

    name : "loginUser",
    initialState:[],
    reducers :{
        
        addLoginUser(state,action){
          
           state.splice(0,1,action.payload)
           
        },

        login(state,action){
           
            state[0].status = action.payload;
        },

       

    }
})

export {LoginUserSlice};
export const {addLoginUser,login} = LoginUserSlice.actions;