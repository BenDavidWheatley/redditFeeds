import React from 'react';
import SubRedditTile from '../subRedTiles/SubRedTile';
import Style from './subReddits.module.css';


function SubRedditContainer(props) {
    return(
        <div  data-testid="subRedElement" className={Style.subRedContainer}>
            <h2>Subreddits <span>+</span></h2>

            {props.subReds.map((sub) => (
                <div key={sub.id}>
                    <SubRedditTile 
                        className={Style.subRedTile}
                        id={sub.id}
                        title={sub.title}
                        img={sub.img}
                    />
                </div>
            ))}


         
        </div>
    )
}

export default SubRedditContainer;

