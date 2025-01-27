// src/containers/App/app.test.js

import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // This is the mock store import
import thunk from 'redux-thunk'; // Import redux-thunk middleware
import App from './App';

// Create the mock store with redux-thunk middleware
const mockStore = configureStore([thunk]);

describe('App Component', () => {
  let store;

  beforeEach(() => {
    // Mock initial state for testing
    store = mockStore({
      redditConnect: [
        // Mock reddit posts data
        {
          data: [
            { title: 'Reddit Post 1', id: 1 },
            { title: 'Reddit Post 2', id: 2 },
          ],
        },
        {
          // Simulated subreddit data
          icon_img: 'https://someimageurl.com/icon.png',
        },
      ],
    });

    // Mock implementation for async actions
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
    // Render the App component
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Wait for the subreddit data to be displayed
    await waitFor(() => expect(screen.getByTestId('subRedditContainer')).toBeInTheDocument());

    // Verify that the subreddit icon image is being used correctly
    const iconImage = store.getState().redditConnect[1].icon_img;
    expect(iconImage).toBe('https://someimageurl.com/icon.png');
    expect(screen.getByTestId('subRedditContainer').textContent).toContain(iconImage);
  });

  it('renders Reddit posts in MainFeed', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Wait for the posts to be displayed
    await waitFor(() => expect(screen.getByTestId('mainfeed')).toBeInTheDocument());

    // Verify that posts are rendered
    expect(screen.getByText('Reddit Post 1')).toBeInTheDocument();
    expect(screen.getByText('Reddit Post 2')).toBeInTheDocument();
  });

  it('renders Header, Footer, and Modal correctly', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Check for the presence of Header, Footer, and Modal
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('modalContainer')).toBeInTheDocument();
  });
});
