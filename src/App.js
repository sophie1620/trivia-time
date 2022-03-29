import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Questions from './components/Questions'
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import Leaderboard from './components/Leaderboard';

function App() {
  const [currentQuestions, setCurrentQuestions] = useState([])
  const [numberOfPlayers, setNumberOfPlayers] = useState([])

  // getting player avatar and name to pass to <Questions />
  const [playerInfo, setPlayerInfo] = useState([])
  const [finalScores, setFinalScores] = useState([])

  function handleSubmit(questionArray, number) {
    setCurrentQuestions(questionArray)
    setNumberOfPlayers(number)
  }

  function update(newPlayerInfo) {
    setFinalScores(newPlayerInfo)
  }

  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Form showQuestions={handleSubmit} playerInfo={setPlayerInfo} />} />
          <Route path="/game" element={<Questions currentQuestions={currentQuestions} playerInfo={playerInfo} numOfPlayers={numberOfPlayers} updateFinalScores={update} />} />
          <Route path="/results" element={<Results scores={finalScores} />} />
          <Route path="/previousWinners" element={<Leaderboard />} />
        </Routes>
      </main>


      <footer>
        <div className="wrapper">
          <p className="footerP">Made with <i className="fa-solid fa-heart"></i> at <a href="https://junocollege.com/">Juno College</a></p>

          <p className="footerP portfolio">
            <a href="https://seannastewart.com/" target="_blank" rel="noreferrer noopener">Seanna Stewart</a>

            <span>  |  </span>

            <a href="https://codemich.dev/" target="_blank" rel="noreferrer noopener">Michelle Wong</a>

            <span>  |  </span>

            <a href="https://sylviaraposo.com/" target="_blank" rel="noreferrer noopener">Sylvia Raposo</a>

            <span>  |  </span>

            <a href="https://sophielai.ca/" target="blank" rel="noreferrer noopener">Sophie Lai</a>
          </p>

          <p className="footerP">APIs powered by <a href="">DiceBear</a> and <a href="">OpenTrivia</a> </p>

        </div>
      </footer>
    </div>
  )
}

export default App;
