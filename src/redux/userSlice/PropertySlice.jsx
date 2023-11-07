import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    id:'',
    name:'',
    email:'',
    number:'',
}

const propertySlice = createSlice({
    name:'property',
    initialState,
    reducers:{
        setPropertyOwnerDetails:(state,action) =>{
            state.id= action.payload.id;
            state.name= action.payload.name;
            state.email= action.payload.email;
            state.number= action.payload.number;
        },
        setPropertyOwnerlogoutDetails:(state) =>{
            state.id= '';
            state.name= '';
            state.email= '';    
            state.number= '';
        }
    }
})

export const {setPropertyOwnerDetails, setPropertyOwnerlogoutDetails}= propertySlice.actions;
export default propertySlice.reducer;