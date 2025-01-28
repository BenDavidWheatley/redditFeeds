import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        toggle: false,
        data: null, 
    },
    reducers: {
        toggleModal: (state, action) => {
            state.toggle = !state.toggle;
            state.data = action.payload || null; 
        },
    },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;

