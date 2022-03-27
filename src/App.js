import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.scss';

import Questions from './components/Questions'
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';



function App() {

  const [currentQuestions, setCurrentQuestions] = useState([])
  const [numberOfPlayers, setNumberOfPlayers] = useState([])


  // console.log(numberOfPlayers)

  // getting player avatar and name to pass to <Questions />
  const [playerInfo, setPlayerInfo] = useState([])
  const [finalScores, setFinalScores] = useState([])

  // console.log(playerInfo);
  console.log(finalScores)

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
        <div className="wrapper">

          <Routes>


            <Route path="/" element={<Form showQuestions={handleSubmit} playerInfo={setPlayerInfo} />} />
            <Route path="/game" element={<Questions currentQuestions={currentQuestions} playerInfo={playerInfo} numOfPlayers={numberOfPlayers} updateFinalScores={update} />} />

            <Route path="/results" element={<Results />} finalResults={finalScores} />
          </Routes>

        </div>
      </main>


      <footer>
        <div className="wrapper">
          <p className='footerP'>Made with <i className="fa-solid fa-heart"></i> at <a href="https://junocollege.com/">Juno College</a></p>
          <p className='footerP'>Seanna Stewart | Michelle Wong | Sylvia Raposo | <a href="https://sophielai.ca/">Sophie Lai</a></p>
          <p className='footerP'>APIs powered by <a href="">DiceBear</a> and <a href="">OpenTrivia</a> </p>

        </div>
      </footer>


    </div>
  );
}

export default App;
