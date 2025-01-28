import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from './Search'; // adjust the path based on your file structure
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer, { getSubredditAsync } from './searchSlice'; // adjust the path if necessary

// Mock the async action
jest.mock('./searchSlice', () => ({
  ...jest.requireActual('./searchSlice'),
  getSubredditAsync: jest.fn().mockReturnValue({ type: 'dummy-action' }), // mock the async action to return a dummy action
}));

// Create a mock store with middleware (redux-thunk is included by default in Redux Toolkit)
const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});

describe('Search Component', () => {
  test('renders search bar correctly', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const inputElement = screen.getByTestId('searchBar');
    expect(inputElement).toBeInTheDocument();
  });

  test('dispatches getSubredditAsync action when Enter key is pressed', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    // Get the input element
    const inputElement = screen.getByPlaceholderText('Search a reddit');

    // Simulate user typing into the input and pressing "Enter"
    fireEvent.change(inputElement, { target: { value: 'reactjs' } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter', charCode: 13 });

    // Ensure the async action was called with the correct argument
    expect(getSubredditAsync).toHaveBeenCalledWith('reactjs');
  });

  test('input field should be initially empty', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText('Search a reddit');
    expect(inputElement.value).toBe('');
  });

  test('input value updates when typing', () => {
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const inputElement = screen.getByPlaceholderText('Search a reddit');

    // Simulate typing
    fireEvent.change(inputElement, { target: { value: 'javascript' } });

    // Verify input value
    expect(inputElement.value).toBe('javascript');
  });
});
