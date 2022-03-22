import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.scss';
import Questions from './Questions'
import Test from './Test'

import Form from './Form'
import PlayerAvatars from './PlayerAvatars';

function App() {

  const [currentQuestions, setCurrentQuestions] = useState([])

  function handleSubmit(event, questionArray) {
    event.preventDefault()
    setCurrentQuestions(questionArray)
  }
  { console.log(currentQuestions) }

  return (
    <div className="App">
      <header>
        <div className="wrapper">
        </div>
      </header>

      <main>
        <div className="wrapper">
          {/* <Form showQuestions={handleSubmit} /> */}
          <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<Form showQuestions={handleSubmit} />} />
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
