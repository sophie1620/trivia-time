import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.scss';

import Questions from './components/Questions'
import Header from './components/Header';
import Form from './components/Form';


function App() {

  const [currentQuestions, setCurrentQuestions] = useState([])

  // getting player avatar and name
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

        </div>
      </footer>


    </div>
  );
}

export default App;
