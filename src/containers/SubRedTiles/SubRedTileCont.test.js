import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For using toBeInTheDocument
import SubRedTiles from './component/SubRedTile'
import React from 'react';

test('renders the SubRedTile component', () => {
  render(<SubRedTiles />);
  const textElement = screen.getByText(/sub tile/i);
  expect(textElement).toBeInTheDocument();
});

