import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const getSubredditAsync = createAsyncThunk(
  'redditAPI/getSubredditAsync',
  async (subreddit) => {
    const noSpaces = subreddit.replace(/\s+/g, '');
    const response = await fetch(`/r/${noSpaces}.json`);
    const json = await response.json();
    return json;
  }
);

const redditAPISlice = createSlice({
  name: 'getSubReddits',
  initialState,
  reducers: {}, // No reducers as you're using async thunks
  extraReducers: (builder) => {
    builder
      .addCase(getSubredditAsync.pending, (state) => {
        console.log('Awaiting response from API');
        return null; // Reset state while the API request is pending
      })
      .addCase(getSubredditAsync.fulfilled, (state, action) => {
        console.log('Request fulfilled');
        return action.payload; // Replace state with the API response
      });
  }
});

export default redditAPISlice.reducer;
