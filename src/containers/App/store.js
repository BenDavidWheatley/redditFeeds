// This file will hold the redux store

//This will alow us to create out store
import { configureStore } from "@reduxjs/toolkit";
// This is the  reducer that was exported as the default reducer from our slices
import getReddits from '../search/searchSlice';
import savedSubs from '../subReddits/subRedSlice';


//Takes in a object as a argument
export const store = configureStore({
    reducer: {
        // We can have as many slices as possible
        redditConnect: getReddits,
        mySubReddits: savedSubs
    }
})

// Store will then export to index.js to be passed to the Provider
