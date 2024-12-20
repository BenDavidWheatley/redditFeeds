import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For using toBeInTheDocument
import MainFeed from './MainFeed';
import React from 'react';

test('renders the MainFeed component', () => {
  render(<MainFeed />);
  const textElement = screen.getByText(/Main feed/i);
  expect(textElement).toBeInTheDocument();
});
