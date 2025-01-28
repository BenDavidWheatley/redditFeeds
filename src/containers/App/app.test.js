
// src/containers/App/app.test.js
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';  // Mock store
import thunk from 'redux-thunk';  // Middleware for async actions
import App from './App';

// Create a mock store with redux-thunk middleware
const mockStore = configureStore([thunk]);

describe('App Component', () => {
  let store;

  beforeEach(() => {
    // Set up a mock store with initial state
    store = mockStore({
      redditConnect: {
        posts: [
          { title: 'Reddit Post 1', id: 1 },
          { title: 'Reddit Post 2', id: 2 },
        ],
      },
      mySubReddits: {
        savedSubreddits: ['r/ReactJS', 'r/JavaScript'],
      },
      toggleModal: {
        isModalOpen: false,
      },
      comments: {
        data: [],
      },
    });

    // Mock dispatch to simulate async actions
    store.dispatch = jest.fn().mockResolvedValueOnce({});
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId('app')).toBeInTheDocument();
  });

  it('dispatches getSubredditAsync on mount and shows subreddit data', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => expect(screen.getByTestId('subRedditContainer')).toBeInTheDocument());
    expect(screen.getByText('r/ReactJS')).toBeInTheDocument();
    expect(screen.getByText('r/JavaScript')).toBeInTheDocument();
  });

  it('renders Reddit posts in MainFeed', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    await waitFor(() => expect(screen.getByTestId('mainfeed')).toBeInTheDocument());
    expect(screen.getByText('Reddit Post 1')).toBeInTheDocument();
    expect(screen.getByText('Reddit Post 2')).toBeInTheDocument();
  });

  it('renders Header, Footer, and Modal correctly', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('modalContainer')).toBeInTheDocument();
  });
});
