// App.js
import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import Style from './app.module.css'
import Header from '../header/Header';
import MainFeed from '../mainFeed/MainFeed';
import SubRedditContainer from '../subReddits/SubRedditContainer';
import ModalContainer from '../modal/Modal';
import Footer from '../footer/Footer';


const subReds = [{
  id: 1,
  title: 'call of the wild',
  img: 'https://www.redditstatic.com/avatars/avatar_default_02_4856A3.png'
},
{
  id: 2,
  title: 'diablo 4',
  img: 'https://www.redditstatic.com/avatars/avatar_default_02_EA0027.png'
}]


function App() {
  return (
    <div  data-testid="app" className={Style.MainBody} >
      <Header />
      <section className={Style.mainContainer}>
        <main className={Style.mainFeed}>
          <MainFeed data-testid="mainfeed" />
        </main>
        <aside >
          <SubRedditContainer data-testid="subRedditContainer" subReds={subReds} />
        </aside>
      </section>
      <ModalContainer data-testid="modalContainer"/>
      <Footer data-testid="footer" />
    </div>
  );
}

export default App;

