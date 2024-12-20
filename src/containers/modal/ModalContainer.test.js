import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // For using toBeInTheDocument
import Modal from './component/Modal';
import React from 'react';

test('renders the Modal component', () => {
  render(<Modal />);
  const textElement = screen.getByText(/modal/i);
  expect(textElement).toBeInTheDocument();
});

