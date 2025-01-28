import React from 'react';  // Required for JSX
import { render, screen } from '@testing-library/react';
import Image from './Image'; // Import the Image component
import Style from './image.module.css'; // Assuming you have the styles

describe('Image Component', () => {
  // Test when no image is provided
  test('renders "No images available" when no image is provided', () => {
    render(<Image image={null} />); // Passing null to simulate no image

    expect(screen.getByText(/No images available/i)).toBeInTheDocument();
  });

  // Test when there is a single image
  test('renders a single image when there is only one image', () => {
    const image = 'https://example.com/image1.jpg'; // Single image URL

    render(<Image image={image} />); // Pass image prop

    // The image should be rendered
    const imgElement = screen.getByAltText('Gallery Image'); // Match the alt text
    expect(imgElement).toBeInTheDocument();
    
    // Check the src of the image to ensure it is correct
    expect(imgElement.src).toBe('https://example.com/image1.jpg');
  });

  // Test when the modal prop is passed
  test('renders with modal styling when modal prop is true', () => {
    const image = 'https://example.com/image1.jpg'; // Single image URL

    render(<Image image={image} modal={true} />);

    // Check that the modal styles are applied
    const imageContainer = screen.getByAltText('Gallery Image').parentElement;
    expect(imageContainer.className).toContain(Style.modalContainer); // Check for modal style
  });
});
