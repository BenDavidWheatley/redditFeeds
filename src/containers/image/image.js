import React from 'react';
import Style from './image.module.css';

function Image(props) {
    if (!props.image) {
        return <p>No images available</p>;
    }

    return (
        <div className={props.modal ? Style.modalContainer : null}>
            <img 
                src={props.image} 
                className={props.modal ? Style.modal : Style.postImage}
                alt="Gallery" 
            />
        </div>
    );
}

export default Image;
