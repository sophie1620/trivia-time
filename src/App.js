import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.scss';

import Questions from './components/Questions'
import Header from './components/Header';
import Form from './components/Form';


function App() {

  const [currentQuestions, setCurrentQuestions] = useState([])

  // getting player avatar and name to pass to <Questions />
  const [playerInfo, setPlayerInfo] = useState([])
  
  console.log(playerInfo);

  function handleSubmit(event, questionArray) {
    event.preventDefault()
    setCurrentQuestions(questionArray)
  }
  // { console.log(currentQuestions) }

  return (
    <div className="App">
      <Header />

      <main>
        <div className="wrapper">
          {/* <Form showQuestions={handleSubmit} /> */}
          <Routes>
            <Route path="/" element={<Form showQuestions={handleSubmit} playerInfo={setPlayerInfo} />} />
            <Route path="/game" element={<Questions currentQuestions={currentQuestions} />} />
            {/* <Route path="/results" element={<Scoreboard />} /> */}
          </Routes>
          {/* <Questions currentQuestions={currentQuestions} /> */}
        </div>
      </main>


      <footer>
        <div className="wrapper">
          <p className='foooterP'>Made with <i className="fa-solid fa-heart"></i> at <a href="https://junocollege.com/">Juno College</a></p>
          <p className='footerP'>Seanna Stewart | Michelle Wong | Sylvia Raposo | <a href="https://sophielai.ca/">Sophie Lai</a></p>
          <p className='footerP'>APIs powered by <a href="">DiceBear</a> and <a href="">OpenTrivia</a> </p>

        </div>
      </footer>


    </div>
  );
}

export default App;
