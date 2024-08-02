import { createSlice } from "@reduxjs/toolkit";




 const tourSlice=createSlice({
    name:'tours',
    initialState:{
        tours:[],
    },
    reducers:{
        addTour(state,action){
state.tours.push(action.payload)
        },
        deleteTour(state,action){
            state.tours=state.tours.filter((tour)=>tour.id != action.payload)
    }
}
})

export const{addTour,deleteTour}= tourSlice.actions
 export const tourReducer=tourSlice.reducer 