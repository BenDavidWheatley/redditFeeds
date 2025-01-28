
  import React, { useEffect } from 'react';
  import Style from './app.module.css';
  import Header from '../header/Header';
  import MainFeed from '../mainFeed/MainFeed';
  import SubRedditContainer from '../subReddits/SubRedditContainer';
  import ModalContainer from '../modal/Modal';
  import Footer from '../footer/Footer';
  import { useDispatch, useSelector } from 'react-redux';
  import { getSubredditAsync } from '../search/searchSlice';

  function App() {
    const dispatch = useDispatch();

    // Fetch subreddit on component mount
    useEffect(() => {
      dispatch(getSubredditAsync('news'));
    }, [dispatch]);

    // Get subreddit data from the state
    const subredditData = useSelector((state) => state.redditConnect ? state.redditConnect[1].data : null);

    // Helper function to decode HTML entities in URLs
    const decodeUrl = (url) => url.replace(/&amp;/g, '&');

    // Get icon image with fallback to community_icon
    const iconImage = subredditData 
      ? decodeUrl(subredditData.icon_img || subredditData.community_icon) 
      : null;

    // Main feed data
    const reddits = useSelector((state) => state.redditConnect ? state.redditConnect[0] : null);

    console.log('Icon Image:', iconImage);
    console.log('Subreddit Data:', subredditData);

    return (
      <div data-testid="app" className={Style.MainBody}>
        <Header />
        <section className={Style.mainContainer}>
          <main className={Style.mainFeed}>
            <MainFeed data-testid="mainfeed" reddits={reddits} iconImage={iconImage} />
          </main>
          <aside>
            <SubRedditContainer data-testid="subRedditContainer" iconImage={iconImage} />
          </aside>
        </section>
        <ModalContainer data-testid="modalContainer" iconImage={iconImage} />
        <Footer data-testid="footer" />
      </div>
    );
  }

  export default App;
