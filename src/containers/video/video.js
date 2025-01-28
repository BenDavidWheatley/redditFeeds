import React from 'react';
import Style from './video.module.css';

function Video(props) {
    if (!props.video) {
        return <p>No video available</p>;
    }

    const containerClass = props.modal ? Style.modalContainer : '';
    return (
        <div className={containerClass}>
            <embed
                src={props.video}
                alt="Video"
                width="100%"
                height="350px"
                className={Style.video}
            />
        </div>
    );
}

export default Video;
