import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle: false,
    data: false
};

const toggleSlice = createSlice({
    name: 'toggleModal',
    initialState,
    reducers: {
        toggleModal: (state,action) => {
            state.toggle = !state.toggle; 
            state.data = action.payload;
            console.log(action.payload); 
        }
    }
});

export const { toggleModal } = toggleSlice.actions;
export default toggleSlice.reducer;