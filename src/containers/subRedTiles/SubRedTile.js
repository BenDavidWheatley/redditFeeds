import React from 'react';
import Style from './subRedTile.module.css';

function SubRedTile(props) {

    return (
        <section>     
            <a className={Style.subRedAnchor}>
                <div data-testId='subRedTile' className={Style.subRedTile}>
                    <img src={props.img}></img>
                    <p>{props.title}</p>
                </div>
            </a>
        </section>
    )
}

export default SubRedTile;