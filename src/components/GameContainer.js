import React, { useEffect, useState } from 'react';
import Card from './Card';
import { charmander, lunala, hakamo, sandshrew, ninjask } from '../img';

let userArray = [];
let iconObj = {
    'charmander': charmander,
    'lunala': lunala,
    'hakamo': hakamo,
    'sandshrew': sandshrew,
    'ninjask': ninjask
}

const GameContainer = props => {
    const [lostOrNo, setLostOrNo] = useState(false);

    const initialArray = [
        "lunala",
        "charmander",
        "hakamo",
        "ninjask",
        "sandshrew"
    ];

    const cardOrder = () => {
        let arr = [];
        while (arr.length !== 5) {
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
        }
    }

    useEffect(() => {
        if (lostOrNo) {
            document.title = 'You lost!';
        } else {
            document.title = 'React App';
        }
    }, [lostOrNo]);

    return (
        <div className='game-container'>
            {cardOrder()}
        </div>
    )
}

export default GameContainer;