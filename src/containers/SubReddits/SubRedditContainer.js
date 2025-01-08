import React from 'react';
import SubRedditTileContainer from '../subRedTiles/SubRedTile'


function SubRedditContainer() {
    return(
        <div  data-testid="subRedElement">
            <p>subreddit</p>
            <SubRedditTileContainer />
        </div>
    )
}

export default SubRedditContainer;