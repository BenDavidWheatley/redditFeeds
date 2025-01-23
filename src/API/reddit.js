export const API_ROOT = 'https://www.reddit.com';


export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();
    return json;
}

/*
export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async (amount) => {
        await new Promise ((resolve) => setTimeout(resolve, 1000))
        return amount;
    }

*/



//export const { increment, decrement, incrementByAmount, adjustNumber } = counterSlice.actions;
// The .reducer comes from the instatiated createSlice and is a built in method that will do a lot of the work for us.
// The below will export the reducers to store



/*
export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};*/
