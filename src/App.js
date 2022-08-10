import './App.css';

import React from 'react'
import useWordGame from './hooks/useWordGame';

const App = () => {
  const {
    handleChange,
     text,
     isRunning,
     inputboxFocus,
     timeRemain, 
     startGame,
     wordCount
    } = useWordGame() //Set timer for game, ex. useWordGame(20), default is 10 

  return (
      <>
          <h1>How fast do you type?</h1>
          <textarea
            onChange={handleChange}
            value={text}
            disabled={!isRunning}
            ref={inputboxFocus}
          />
          <h4>Time remaining: {timeRemain}</h4>
          <button 
          onClick={startGame}
          disabled={isRunning}
          >
            START
          </button>
          <h1>Word count: {wordCount}</h1>
      </>
  )
}



export default App
