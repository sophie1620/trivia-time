import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.scss';

import Questions from './components/Questions'
import Header from './components/Header';
import Form from './components/Form';



function App() {

  const [currentQuestions, setCurrentQuestions] = useState([])
  const [numberOfPlayers, setNumberOfPlayers] = useState([])

  function handleSubmit(event, questionArray, number) {
    event.preventDefault()
    setCurrentQuestions(questionArray)
    setNumberOfPlayers(number)
  }


  return (
    <div className="App">
      <Header />

      <main>
        <div className="wrapper">

          <Routes>
            <Route path="/" element={<Form getInfo={handleSubmit} />} />
            <Route path="/game" element={<Questions currentQuestions={currentQuestions} numOfPlayers={numberOfPlayers} />} />
            {/* <Route path="/results" element={<Scoreboard />} /> */}
          </Routes>

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
