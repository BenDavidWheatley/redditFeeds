import React from 'react';  // Required for JSX
import { render, screen } from '@testing-library/react';
import Video from './video'; // Import the Video component
import Style from './video.module.css'; // Assuming you have the styles

describe('Video Component', () => {
    test('renders "No video available" when no video is provided', () => {
        render(<Video video={null} />);
        expect(screen.getByText(/No video available/i)).toBeInTheDocument();
    });

    test('renders with modal styling when modal prop is true', () => {
        const video = 'https://example.com/video.mp4'; // Single video URL

        const { container } = render(<Video video={video} modal={true} />);

        // Check for the modal container class
        const modalContainer = container.querySelector(`.${Style.modalContainer}`);
        expect(modalContainer).toBeInTheDocument();

        // Ensure the video element is present
        const videoElement = container.querySelector(`.${Style.video}`);
        expect(videoElement).toBeInTheDocument();
    });
});
