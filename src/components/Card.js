import React from 'react';

const Card = props => {
    return(
        <div className='card' onClick={() => {props.changeArray(props.name)}}>
            {props.name}
        </div>
    )
};

export default Card;