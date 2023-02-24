import React from 'react';

const Popup = props => {
    return (
        <div className='popup-div'>
            You {props.gameState}! Click again to restart
        </div>
    )
}

export default Popup;