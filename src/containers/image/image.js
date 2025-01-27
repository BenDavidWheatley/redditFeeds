import React from 'react';
import Style from './image.module.css';

function Image(props) {
    return (
        <div className={props.modal? Style.modalContainer : null}>
            <img src={props.image} className={props.modal? Style.modal : Style.postImage}/>
        </div>
    )
};

export default Image;