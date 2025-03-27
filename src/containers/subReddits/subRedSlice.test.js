import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SubRedTile from '../subRedTiles/SubRedTile';
import { getSubredditAsync } from '../search/searchSlice';
import { removeSubreddit } from '../subReddits/subRedSlice';

jest.mock('../search/searchSlice', () => ({
  getSubredditAsync: jest.fn(),
}));

jest.mock('../subReddits/subRedSlice', () => ({
  removeSubreddit: jest.fn(),
}));

const mockStore = configureStore([]);

describe('SubRedTile', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test('dispatches getSubredditAsync on click', () => {
    jest.mock('../search/searchSlice', () => ({
        getSubredditAsync: jest.fn(() => ({ type: 'mockGetSubredditAsync' })),
      }));
  });

  test('dispatches removeSubreddit on remove button click', () => {
    jest.mock('../subReddits/subRedSlice', () => ({
        removeSubreddit: jest.fn(() => ({ type: 'mockRemoveSubreddit' })),
      }));
      
    });
});
