import React from 'react';
import Style from './video.module.css';

function Video(props) {
    return (
            <embed src={props.video} alt="Video" width='100%' height='350px;' className={Style.video}/>
    );
}

export default Video;
