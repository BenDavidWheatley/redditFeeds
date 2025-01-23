import React, { useState } from 'react';
import Style from './gallery.module.css';

function Gallery(props) {
    // Ensure the hook is called unconditionally at the top level
    const [currentIndex, setCurrentIndex] = useState(0); // This should be before any conditional logic

    // Check if images exist and the object is not empty
    if (!props.images || Object.keys(props.images).length === 0) {
        return <p>No images available</p>;
    }

    // Extract the keys from the images object
    const imageKeys = Object.keys(props.images);

    // Function to go to the next image
    const slideNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageKeys.length);
    };

    // Function to go to the previous image
    const slidePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageKeys.length) % imageKeys.length);
    };

    // If we have only one image, render the single image
    if (imageKeys.length < 2) {
        return (
            <div className={Style.galleryContainer}>
                <img
                    src={decodeURIComponent(props.images[imageKeys[0]].s.u.replace(/&amp;/g, '&'))}
                    alt="Gallery Image"
                    className={Style.postImage}
                />
            </div>
        );
    }

    // If we have multiple images, render the gallery with arrows
    return (
        <div className={Style.galleryContainer}>
            <div onClick={slidePrev} className={`${Style.arrows} ${Style.lessThan}`}>
                <p >&lt;</p>
            </div>

            <div className={Style.imageContainer}>
                {/* Render the current image */}
                <img
                    src={decodeURIComponent(props.images[imageKeys[currentIndex]].s.u.replace(/&amp;/g, '&'))}
                    alt="Gallery Image"
                    className={Style.postImage}
                />
            </div>

            <div onClick={slideNext} className={`${Style.arrows} ${Style.greaterThan}`}>
                <p>&gt;</p>
            </div>
        </div>
    );
}

export default Gallery;
