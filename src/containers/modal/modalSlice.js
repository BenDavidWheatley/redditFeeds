import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        toggle: false,
        data: null, // Store modal data
    },
    reducers: {
        toggleModal: (state, action) => {
            state.toggle = !state.toggle;
            state.data = action.payload || null; // Update modal data
        },
    },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;

