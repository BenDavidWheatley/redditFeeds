import React from 'react';
import Style from './image.module.css';

function Image(props) {
    return (
        <div>
            <img src={props.image} className={Style.postImage}/>
        </div>
    )
};

export default Image;