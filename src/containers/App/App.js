// App.js
import React, { useState, useEffect, useCallback } from 'react';

import Style from './app.module.css'
import Header from '../header/Header';
import MainFeed from '../mainFeed/MainFeed';
import SubRedditContainer from '../subReddits/SubRedditContainer';
import ModalContainer from '../modal/Modal';
import Footer from '../footer/Footer';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const reddits = useSelector((state) => state.redditConnect);
  return (
    <div  data-testid="app" className={Style.MainBody} >
      <Header />
      <section className={Style.mainContainer}>
        <main className={Style.mainFeed}>
          <MainFeed data-testid="mainfeed" reddits={reddits} />
        </main>
        <aside >
          <SubRedditContainer data-testid="subRedditContainer" />
        </aside>
      </section>
      <ModalContainer data-testid="modalContainer" />
      <Footer data-testid="footer" />
    </div>
  );
}

export default App;
