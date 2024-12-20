// App.js
import React from 'react';

import Header from '../header/Header';
import MainFeed from '../mainFeed/MainFeed';

import SubRedditContainer from '../subReddits/SubRedditContainer';
import ModalContainer from '../modal/ModalContainer';
import Footer from '../footer/Footer';


function App() {
  return (
    <div>
      <Header />
      <MainFeed />
      <p>This is a test</p>
      <SubRedditContainer />
      <ModalContainer />
      <Footer />
    </div>
  );
}

export default App;