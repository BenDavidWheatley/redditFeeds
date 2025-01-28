import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Tile from './TileContainer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../modal/modalSlice'; // Assuming this is the location of the modalSlice
import { toggleModal } from '../modal/modalSlice';

// Set up the Redux store with modal reducer
const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

describe('Tile Component', () => {
  const mockProps = {
    data: {
      title: 'Test Post',
      author: 'Test Author',
      selftext: 'This is a test post.',
      category: 'Test Category',
      created: 1609459200, // Jan 1, 2021 (for date-fns formatting)
      ups: 100,
      downs: 10,
      num_comments: 5,
      url: 'https://example.com',
      thumbnail: 'https://example.com/thumbnail.jpg',
      media_metadata: null,
      secure_media_embed: null,
      secure_media: {
        reddit_video: {
          fallback_url: 'https://www.youtube.com/watch?v=test',
        },
      },
    },
    iconImage: 'https://example.com/icon.jpg',
  };

  const renderTileWithProps = (props) => {
    render(
      <Provider store={store}>
        <Tile {...props} />
      </Provider>
    );
  };

  it('dispatches the toggleModal action when Read more is clicked', () => {
    // Mock the dispatch function
    const mockDispatch = jest.fn();
    store.dispatch = mockDispatch;

    renderTileWithProps(mockProps);

    const readMoreLink = screen.getByText('Read more >');
    fireEvent.click(readMoreLink);

    // Check if dispatch was called with the correct action payload
    expect(mockDispatch).toHaveBeenCalledWith(
      toggleModal({
        title: 'Test Post',
        author: 'Test Author',
        post: 'This is a test post.',
        category: 'Test Category',
        date: 'about 4 years ago',  // Adjust based on how the `formatDistanceToNow` works
        votes: 90,  // Assuming upvotes (100) minus downvotes (10)
        totalComments: 5,
        comments: 'https://example.com',
        thumbnail: 'https://example.com/thumbnail.jpg',
        gallery: null,
        video: 'https://www.youtube.com/watch?v=test',
        redditVideo: { fallback_url: 'https://www.youtube.com/watch?v=test' },
        image: null,
      })
    );
  });
});
