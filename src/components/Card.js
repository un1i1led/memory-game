import React from 'react';

const Card = props => {

    return(
        <div className='card' onClick={() => {props.changeArray(props.name)}}>
            <img src={props.icon}/>
            {props.name}
        </div>
    )
};

export default Card;