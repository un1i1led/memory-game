import React, { useEffect, useState } from 'react';
import Card from './Card';
import { charmanderIcon, lunalaIcon, hakamoIcon, sandIcon, ninjaskIcon } from '../img';

let userArray = [];

const GameContainer = props => {
    const [lostOrNo, setLostOrNo] = useState(false);

    const initialArray = [
        "lunala",
        "charmander",
        "hakamo-o",
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

        console.log(userArray);

        return (
            arr.map((data, key) => {
                return <Card key={key} name={data} changeArray={changeArray}/>
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
            <Card name={'hi'} changeArray={changeArray}/>
        </div>
    )
}

export default GameContainer;