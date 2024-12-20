import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For using toBeInTheDocument
import App from './App';
import React from 'react';

test('renders the App component', () => {
  render(<App />);
  const textElement = screen.getByText(/This is a test/i);
  expect(textElement).toBeInTheDocument();
});
