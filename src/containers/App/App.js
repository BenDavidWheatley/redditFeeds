// App.js
import React, { useState, useEffect } from 'react';
import Style from './app.module.css'
import Header from '../header/Header';
import MainFeed from '../mainFeed/MainFeed';
import SubRedditContainer from '../subReddits/SubRedditContainer';
import ModalContainer from '../modal/Modal';
import Footer from '../footer/Footer';
import { getSubredditPosts }  from '../../API/reddit'

let test;

/*const diablo = async() => {
  test = await getSubredditPosts('/r/thehunter');
  console.log(test);

  let title = test[0].title;
  let author = test[0].author;
  let thumbnail = test[0].thumbnail;
  let catagory = test[0].catagory; // Set this to the subreddit if null
  let time = test[0].created; //This is a timestamp and will need to be converted
  let url = test[0].url;
  let excerpt = test[0].selfText;
  let comments = test[0].permalink
  let votes = test[0].ups - test[0].downs
  console.log(title);
  console.log(author);
  console.log(thumbnail);
  console.log(url);
  console.log(excerpt);
  console.log(thumbnail) ; 
}

diablo(); */







 const initialState = [
  {
    id: 1,
    title: 'this is a post about a ghekko',
    post: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur nibh sit amet justo euismod tristique. Suspendisse dapibus consequat nibh, id malesuada mi tempor et', 
    image: 'https://i.redd.it/fyjk2zz2tpbe1.jpeg',
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


  const [redditInfo, setRedditInfo] = useState()

  const [modal, setModal] = useState(false);
  
  const toggleModal = (id) => {
    console.log(id);
    setModal(id);
  }


  const userSearch = (searchTerm) => {
    
   // console.log('Function called with:', searchTerm); // Debug log
    let input = searchTerm.toLowerCase();
   // console.log('Lowercased input:', input); // Debug log

    // Remove all spaces
    const noSpaces = input.replace(/\s+/g, '');
   // console.log('Processed input (no spaces):', noSpaces);

   if (noSpaces) {
    getSubredditPosts(`/r/${noSpaces}`)
      .then(setRedditInfo).catch((error) => {
        console.error('Error fetching subreddit posts:', error);
      });
  }
    
};



  return (
    <div  data-testid="app" className={Style.MainBody} >
      <Header userSearch={userSearch}/>
      <section className={Style.mainContainer}>
        <main>
          <MainFeed data-testid="mainfeed" redditPosts={redditInfo} toggleModal={toggleModal}/>
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

