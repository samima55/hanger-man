import React, { useState } from 'react';
import style from './App.module.css';
import words from "./assest/wordList.json";
import HangmanWordGuess from './copmponents/HangmanWordGuess';
import HangmanDrawing from './copmponents/HangmanDrawing';
import Keyboard from './copmponents/Keyboard';

function App() {
  const [wordToGuess , setWordToGuess]=useState(()=>{
    return words[Math.floor(Math.random() * words.length)]
  })
  const [guessedLetters, setGuessedLetters]= useState<string[]>([])

  return (
   <div className={style.container}>
    <div className={style.winlose}>
    Lose win
    </div>
    <HangmanDrawing/>
    <HangmanWordGuess/>
     <Keyboard/>
   </div>
  );
}

export default App;
