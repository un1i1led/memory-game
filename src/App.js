import React, { useState } from 'react';
import TopBar from './components/TopBar';

const App = () => {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);
  const [pokeArray, setPokeArray] = useState([]);

  const updateState = (state, value) => {
    if (state === 'score') {
      setScore(score + 1);
      checkBestScore();
    } else if (state === 'pokeArray') {
      setPokeArray(
        [
          ...pokeArray, value
        ]
      );
    }
  };

  const checkBestScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }

  return (
    <div className='App'>
      <TopBar score={score} bestScore={bestScore}/>
    </div>
  )
}

export default App;