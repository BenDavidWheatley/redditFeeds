import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import SubRedTile from './SubRedTile'; // Adjust the import path
import searchReducer, { getSubredditAsync } from '../search/searchSlice';
import subRedReducer, { removeSubreddit } from '../subReddits/subRedSlice';
import * as searchSlice from '../search/searchSlice'; // Import to spy on actions

// Create a mock store with initial state
const store = configureStore({
  reducer: {
    search: searchReducer,
    subReddits: subRedReducer,
  },
  preloadedState: {
    search: { data: [], status: 'idle' },
    subReddits: { subs: ['reactjs', 'javascript'] },
  },
});

describe('SubRedTile', () => {
  it('dispatches getSubredditAsync action when the tile is clicked', () => {
    const props = { title: 'reactjs', toggleOpen: jest.fn() };

    // Mock the getSubredditAsync thunk
    const mockGetSubredditAsync = jest.spyOn(searchSlice, 'getSubredditAsync').mockReturnValue({
      type: 'search/getSubredditAsync',
      payload: 'reactjs',
    });

    render(
      <Provider store={store}>
        <SubRedTile {...props} />
      </Provider>
    );

    // Find the tile element
    const subRedTile = screen.getByTestId('subRedTile');
    
    // Click the tile to dispatch the action
    fireEvent.click(subRedTile);

    // Check if the dispatch function was called with the correct action
    expect(mockGetSubredditAsync).toHaveBeenCalledWith('reactjs'); // Ensure the thunk is called with correct args
    expect(props.toggleOpen).toHaveBeenCalled(); // Check if toggleOpen is called

    mockGetSubredditAsync.mockRestore(); // Restore the original implementation
  });

  it('dispatches removeSubreddit action when the remove button is clicked', () => {
    const props = { title: 'reactjs', toggleOpen: jest.fn() };

    render(
      <Provider store={store}>
        <SubRedTile {...props} />
      </Provider>
    );

    // Find the remove button
    const removeButton = screen.getByText('remove');

    // Click the remove button to dispatch the remove action
    fireEvent.click(removeButton);

    // Check if the dispatch function was called with the correct action
    expect(store.getState().subReddits.subs).not.toContain('reactjs'); // Verify state update
  });
});
