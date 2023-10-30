import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    id:'',
    name:'',
    email:'',
    number:'',
    houseName:'',
    state:'',
    city:'',
    is_block:'',
    is_verified:'',
    is_admin:''
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserDetails:(state,action) =>{
            state.id= action.payload.id;
            state.name= action.payload.name;
            state.email= action.payload.email;
            state.houseName= action.payload.houseName;
            state.state= action.payload.state;
            state.city= action.payload.city;
            state.is_block= action.payload.is_block;
            state.is_verified= action.payload.is_verified;
            state.is_admin= action.payload.is_admin;
        },
        setUserlogoutDetails:(state) =>{
            state.id= '';
            state.name= '';
            state.email= '';
            state.houseName= '';
            state.state= '';
            state.city= '';
            state.is_block= '';
            state.is_verified= '';
            state.is_admin= '';
        }
    }
})

export const {setUserDetails, logoutDetails}= userSlice.actions;
export default userSlice.reducer;