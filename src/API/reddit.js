export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();
   // console.log(json.data.children[0].data.title);
    return json;
  /*return json.data.children.map((post) => post.data);*/
 /* return json.data.children.map(post => ({
    title: post.data.title,
    author: post.data.author,
    thumbnail: post.data.thumbnail,
    catagory: post.data.catagory, // Set this to the subreddit if null
    time: post.data.created, //This is a timestamp and will need to be converted
    url: post.data.url,
    excerpt: post.data.selfText,
    comments: post.data.permalink,
    votes: post.data.ups - post.data.downs
  }))*/
  
};



/*search(input) {

    if (input){
    const token = Spotify.getAccessToken();
    console.log(accessToken)
    console.log(token)
    return fetch(`https://api.spotify.com/v1/search?type=track,artist,album&q=${input}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      return response.json();
     
    }).then(tracks => {
      console.log(tracks.tracks.items[0].uri)
      return tracks.tracks.items.map(tracks => ({
        id: tracks.id,
        name: tracks.name,
        artist: tracks.artists[0].name,
        image: tracks.album.images[0].url,
        album: tracks.album.name,
        uri: tracks.uri
      }))  
    })
  }},
  */





export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};
