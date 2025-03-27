import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SubRedditContainer from '../subReddits/SubRedditContainer';
import { addSubreddit } from '../subReddits/subRedSlice';
import Style from './subReddits.module.css';

const mockStore = configureStore([]);

describe('SubRedditContainer', () => {
  let store;
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();  // Mock the dispatch function
    store = mockStore({
      mySubReddits: {
        subs: ['reactjs', 'webdev'], // Mock initial state
      },
    });

    // Mocking the dispatch function to use our mock
    jest.spyOn(store, 'dispatch').mockImplementation(dispatchMock);
  });

  test('renders the component correctly', () => {
    render(
      <Provider store={store}>
        <SubRedditContainer />
      </Provider>
    );

    expect(screen.getByText('My Subreddits')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Save a subReddit')).toBeInTheDocument();
  });

  test('handles adding a subreddit', () => {
    render(
      <Provider store={store}>
        <SubRedditContainer />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Save a subReddit');
    const addButton = screen.getByText('Add');

    // Simulate user input
    fireEvent.change(input, { target: { value: 'learnprogramming' } });

    // Simulate clicking the "Add" button
    fireEvent.click(addButton);

    // Ensure the dispatch was called with the correct action and payload
    expect(dispatchMock).toHaveBeenCalledWith(addSubreddit('learnprogramming'));

    // Optionally check if the input is cleared (not strictly necessary for the test, but a nice to have)
    expect(input.value).toBe('');
  });

  test('toggles the open class', () => {
    render(
      <Provider store={store}>
        <SubRedditContainer />
      </Provider>
    );

    const toggleButton = screen.getByText('Open');
    fireEvent.click(toggleButton);

    const container = screen.getByTestId('subRedElement');
    expect(container.className).toContain(Style.open);
  });
});
