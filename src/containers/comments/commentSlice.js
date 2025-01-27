import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

function processComments(apiComments) {
    return apiComments.map((comment) => ({
        id: comment.id,
        author: comment.author,
        body: comment.body,
        replies: comment.replies
            ? processComments(comment.replies.data.children.map((child) => child.data))
            : [], // Recursively process replies if they exist
    }));
}

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (postUrl, thunkAPI) => {
        try {
            const response = await fetch(`${postUrl}.json`);
            const data = await response.json();

            // Extract and process comments
            const commentsData = data[1]?.data?.children.map((child) => child.data);
            return processComments(commentsData || []);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearComments: (state) => {
            state.comments = [];
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.comments = action.payload;
                state.loading = false;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            });
    },
});

export const { clearComments } = commentsSlice.actions;
export default commentsSlice.reducer;
