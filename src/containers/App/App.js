// App.js
import React, { useState } from 'react';
import Style from './app.module.css'
import Header from '../header/Header';
import MainFeed from '../mainFeed/MainFeed';

import SubRedditContainer from '../subReddits/SubRedditContainer';
import ModalContainer from '../modal/Modal';
import Footer from '../footer/Footer';

const redditInfo = [
  {
    id: 1,
    title: 'this is a post about a ghekko',
    post: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Suspendisse dapibus consequat nibh, id malesuada mi tempor et', 
    image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    category: 'Science',
    datePost: '2 days',
    votes: 124,
    comments: 120,
    user: 'postIt1234',
    userImage: 'https://www.redditstatic.com/avatars/avatar_default_02_EA0027.png'
  },
  {
    id: 2,
    title: 'Is Eminem going to headline Glasto',
    post: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique.  Suspendisse dapibus consequat nibh, id malesuada mi tempor et', 
    image: false,
    category: 'Music',
    datePost: '1 days',
    votes: 110,
    comments: 55,
    user: 'rapman3000',
    userImage: 'https://www.redditstatic.com/avatars/avatar_default_02_4856A3.png'

  },
  {
    id: 3,
    title: 'this is another post',
    post: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Suspendisse dapibus consequat nibh, id malesuada mi tempor et', 
    image: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    category: 'Random',
    datePost: '5 days',
    votes: 1294,
    comments: 12090,
    user: 'mememe',
    userImage: 'https://www.redditstatic.com/avatars/avatar_default_02_EA0027.png'
  },
  {
    id: 4,
    title: 'How to i get started',
    post: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique.  Suspendisse dapibus consequat nibh, id malesuada mi tempor et', 
    image: false,
    category: 'Programming',
    datePost: '1 days',
    votes: 11,
    comments: 550,
    user: 'thisisme',
    userImage: 'https://www.redditstatic.com/avatars/avatar_default_02_4856A3.png'

  }
]


function App() {

  const [modal, setModal] = useState(false);

  const toggleModal = (id) => {
    console.log(id);
    setModal(id);
  }

  return (
    <div  data-testid="app" className={Style.MainBody} >
      <Header/>
      <section className={Style.mainContainer}>
        <main>
          <MainFeed data-testid="mainfeed" redditPosts={redditInfo} toggleModal={toggleModal}/>
        </main>
        <aside >
          <SubRedditContainer data-testid="subRedditContainer" />
        </aside>
      </section>
      <ModalContainer data-testid="modalContainer"/>
      <Footer data-testid="footer" />
    </div>
  );
}

export default App;

