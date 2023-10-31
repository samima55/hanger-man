import React, { useState } from 'react';
import './App.css';
import words from "./assest/wordList.json";
function App() {
  const [wordToGuess , setWordToGuess]=useState(()=>{
    return words[Math.floor(Math.random() * words.length)]
  })
  console.log(wordToGuess)

  return (
   <div></div>
  );
}

export default App;
