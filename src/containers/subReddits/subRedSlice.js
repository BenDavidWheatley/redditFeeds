import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subs: JSON.parse(localStorage.getItem('mySubReddits')) || []
};

const savedSubs = createSlice({
    name: 'savedSubReddits',
    initialState,
    reducers: {
        addSubreddit: (state, action) => {
            state.subs.push(action.payload);
            localStorage.setItem('mySubReddits', JSON.stringify(state.subs));
            console.log(state);
        },
        removeSubreddit: (state, action) => {
            state.subs = state.subs.filter(sub => sub !== action.payload);
            localStorage.setItem('mySubReddits', JSON.stringify(state.subs));
            console.log(state);
        },
    }
});

export const { addSubreddit, removeSubreddit } = savedSubs.actions;
export default savedSubs.reducer;
