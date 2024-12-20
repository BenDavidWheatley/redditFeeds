import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For using toBeInTheDocument
import Footer from './Footer';
import React from 'react';

test('renders the Footer component', () => {
  render(<Footer />);
  const textElement = screen.getByText(/footer/i);
  expect(textElement).toBeInTheDocument();
});
