import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For using toBeInTheDocument
import SearchBar from './components/SearchBar';
import React from 'react';

test('renders the Modal component', () => {
  render(<SearchBar />);
  const textElement = screen.getByText(/search bar/i);
  expect(textElement).toBeInTheDocument();
});
