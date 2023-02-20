import React from 'react';

const TopBar = props => {
    return (
        <div>
            {props.bestScore}
            {props.score}
        </div>
    )
}

export default TopBar;