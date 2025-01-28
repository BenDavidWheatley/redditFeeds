import React from 'react';
import Style from './image.module.css';

function Image(props) {
    if (!props.image) {
        return <p>No images available</p>;
    }

    return (
        <div className={props.modal ? Style.modalContainer : null}>
            <img 
                src={props.image}  // Use props.image here
                className={props.modal ? Style.modal : Style.postImage}
                alt="Gallery Image"  // Set alt text for the image
            />
        </div>
    );
}

export default Image;
