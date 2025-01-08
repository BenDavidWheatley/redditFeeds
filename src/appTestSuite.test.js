import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For using toBeInTheDocument
import App from './containers/App/App';
import Header from './containers/header/Header'
import Search from './containers/search/Search';
import MainFeed from './containers/mainFeed/MainFeed';
import Modal from './containers/modal/Modal';
import SubReddits from './containers/subReddits/SubRedditContainer';
import TileContainer from './containers/tiles/TileContainer';
import SubRedTiles from './containers/subRedTiles/SubRedTile'
import Footer from './containers/footer/Footer';
import React from 'react';


/* Test for the App component */

test('renders the App component', () => {
  render(<App />);
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});


/* Test for the Header component */

test('renders the Header component', () => {
  render(<Header />);
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();

});


/* Test for the search bar component */

test('renders the Modal component', () => {
  render(<Search />);
  const searchBarElement = screen.getByTestId('searchBar');
  expect(searchBarElement).toBeInTheDocument();
});

/* Test for the main feed */

test('renders the MainFeed component', () => {
    render(<MainFeed />);
    const mainFeed = screen.getByTestId('mainFeed');
    expect(mainFeed).toBeInTheDocument();
  });


test('renders tile component', () => {
  render(<TileContainer />);
  const tileElement = screen.getByTestId('tile');
  expect(tileElement).toBeInTheDocument();
});

/* Test for the subreddit container and tiles */

test('renders the Subreddits component', () => {
  render(<SubReddits />);
  const subRedElement = screen.getByTestId('subRedElement');
  expect(subRedElement).toBeInTheDocument();
});

test('renders the SubRedTile component', () => {
  render(<SubRedTiles />);
  const subRedTileElement = screen.getByTestId('subRedTile');
  expect(subRedTileElement).toBeInTheDocument();
});


/* Test for the modal */

test('renders the Modal component', () => {
  render(<Modal />);
  const modalElement = screen.getByTestId('modal');
  expect(modalElement).toBeInTheDocument();
});


/* Test for the footer */

test('renders the Footer component', () => {
  render(<Footer />);
  const footerElement = screen.getByTestId('footer');
  expect(footerElement).toBeInTheDocument();
});
