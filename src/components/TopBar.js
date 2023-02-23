import React from 'react';

const TopBar = props => {
    return (
        <div className='top-bar'>
            Memory Game
            <div>
                Best score: {props.bestScore}
            </div>
            <div>
                Score: {props.score}
            </div>
        </div>
    )
}

export default TopBar;