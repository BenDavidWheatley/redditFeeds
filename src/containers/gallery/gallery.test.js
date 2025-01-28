import React from 'react';  // Required for JSX
import { render, screen, fireEvent } from '@testing-library/react';
import Gallery from './gallery'; // Import your Gallery component
import Style from './gallery.module.css'; // Assuming you have the styles

describe('Gallery Component', () => {
  // Test when no images are available
  test('renders "No images available" when no images are provided', () => {
    render(<Gallery images={{}} />); // Passing an empty object as prop

    expect(screen.getByText(/No images available/i)).toBeInTheDocument();
  });

  // Test when there is a single image
  test('renders a single image when there is only one image', () => {
    const images = {
      'image1': {
        s: { u: 'https://example.com/image1.jpg' },
      },
    };

    render(<Gallery images={images} />);

    // The image should be rendered
    expect(screen.getByAltText(/Gallery Image/i)).toBeInTheDocument();
    // Check the src of the image to ensure it is correct
    expect(screen.getByAltText(/Gallery Image/i).src).toBe('https://example.com/image1.jpg');
  });

  // Test when there are multiple images
  test('renders multiple images and navigates through them correctly', () => {
    const images = {
      'image1': {
        s: { u: 'https://example.com/image1.jpg' },
      },
      'image2': {
        s: { u: 'https://example.com/image2.jpg' },
      },
      'image3': {
        s: { u: 'https://example.com/image3.jpg' },
      },
    };

    render(<Gallery images={images} />);

    // Check that the first image is rendered initially
    const firstImage = screen.getByAltText(/Gallery Image/i);
    expect(firstImage.src).toBe('https://example.com/image1.jpg');

    // Simulate the 'Next' button click to go to the second image
    fireEvent.click(screen.getByText('>')); // Assumes '>' is the next button

    // Check that the second image is now visible
    const secondImage = screen.getByAltText(/Gallery Image/i);
    expect(secondImage.src).toBe('https://example.com/image2.jpg');

    // Simulate the 'Prev' button click to go back to the first image
    fireEvent.click(screen.getByText('<')); // Assumes '<' is the previous button

    // Check that the first image is visible again
    const prevImage = screen.getByAltText(/Gallery Image/i);
    expect(prevImage.src).toBe('https://example.com/image1.jpg');
  });

  // Test when the modal prop is passed
  test('renders with modal styling when modal prop is true', () => {
    const images = {
      'image1': {
        s: { u: 'https://example.com/image1.jpg' },
      },
    };

    render(<Gallery images={images} modal={true} />);

    // Check that the modal styles are applied
    const imageContainer = screen.getByAltText(/Gallery Image/i).parentElement;
    expect(imageContainer.className).toContain(Style.modal); // Check for modal style
  });
});
