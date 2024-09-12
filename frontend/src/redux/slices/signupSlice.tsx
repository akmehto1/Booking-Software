import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email:null,
  password:null,
  firstName:null,
  lastName:null,
  loading:false,
  error:null,
}

export const signUpSlice = createSlice({
  name: 'signupsave',
  initialState,
  reducers: {
      signUpSave(state,action){
             console.log(action.payload);
             state.email=action.payload.email;
             state.password=action.payload.password;
             state.firstName=action.payload.firstName;
             state.lastName=action.payload.lastName;
      }
  },
})

// Action creators are generated for each case reduce,r function
export const {signUpSave} = signUpSlice.actions

export default signUpSlice.reducer

