import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For using toBeInTheDocument
import Header from './Header';
import React from 'react';

test('renders the Header component', () => {
  render(<Header />);
  const textElement = screen.getByText(/header/i);
  expect(textElement).toBeInTheDocument();
});
