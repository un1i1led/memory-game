import React, { useEffect, useState } from 'react';
import Card from './Card';
import { charmander, lunala, hakamo, sandshrew, ninjask, tympole, togekiss, lickitung } from '../img';
import Popup from './Popup';

let userArray = [];
let iconObj = {
    'charmander': charmander,
    'lunala': lunala,
    'hakamo': hakamo,
    'sandshrew': sandshrew,
    'ninjask': ninjask,
    'tympole': tympole,
    'togekiss': togekiss,
    'lickitung': lickitung
}

const GameContainer = props => {
    const [lostOrNo, setLostOrNo] = useState(false);
    const [winOrNo, setWinOrNo] = useState(false);

    const initialArray = [
        'lunala',
        'charmander',
        'hakamo',
        'ninjask',
        'sandshrew',
        'tympole',
        'togekiss',
        'lickitung'
    ];

    const cardOrder = () => {
        let arr = [];
        while (arr.length !== 8) {
            let pokemon = initialArray[Math.floor(Math.random() * initialArray.length)];
            if (!(arr.includes(pokemon))) {
                arr.push(pokemon);
            }
        }

        return (
            arr.map((data, key) => {
                const icon = iconObj[data]

                return <Card key={key} name={data} 
                changeArray={changeArray} icon={icon}/>
            })   
        )

    }

    const changeArray = (name) => {
        if (userArray.includes(name)) {
            props.updateState('score', 0);
            userArray = [];
            setLostOrNo(true);
        } else {
            props.updateState('score', props.score + 1);
            userArray.push(name);
            if (lostOrNo) {
                setLostOrNo(false);
            }
            if (userArray.length === 8) {
                setWinOrNo(true);
                userArray = [];
                props.updateState('score', 0);
            } else {
                setWinOrNo(false);
            }
        }
    }

    useEffect(() => {
        if (lostOrNo) {
            document.title = 'You lost!';
        } else {
            document.title = 'Memory Game';
        }
    }, [lostOrNo]);

    return (
        <div className='game-container'>
            {cardOrder()}
            {lostOrNo && 
                <Popup gameState={'lost'}/>
            }
            {winOrNo &&
                <Popup gameState={'won'}/>
            }
        </div>
    )
}

export default GameContainer;