import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For using toBeInTheDocument
import SubReddits from './components/SubReddits';
import React from 'react';

test('renders the Subreddits component', () => {
  render(<SubReddits />);
  const textElement = screen.getByText(/subreddit/i);
  expect(textElement).toBeInTheDocument();
});

