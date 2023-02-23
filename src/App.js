import React, { useState } from 'react';
import GameContainer from './components/GameContainer';
import TopBar from './components/TopBar';
import './style.css';

const App = () => {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  

  const updateState = (state, value) => {
    if (state === 'score') {
      setScore(value);
      if (bestScore <= value) {
        setBestScore(value);
      }
    } 
  };

  return (
    <div className='App'>
      <TopBar score={score} bestScore={bestScore}/>
      <GameContainer score={score} updateState={updateState}/>
    </div>
  )
}

export default App;