import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For using toBeInTheDocument
import TileContainer from './TileContainer';
import React from 'react';

test('renders the Subreddits component', () => {
  render(<TileContainer />);
  const textElement = screen.getByText(/tile/i);
  expect(textElement).toBeInTheDocument();
});

