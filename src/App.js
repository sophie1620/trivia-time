import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.scss';

import Questions from './components/Questions'
import Header from './components/Header';
import Form from './components/Form';



function App() {

  const [currentQuestions, setCurrentQuestions] = useState([])
  const [numberOfPlayers, setNumberOfPlayers] = useState([])

  console.log(numberOfPlayers)

  // getting player avatar and name to pass to <Questions />
  const [playerInfo, setPlayerInfo] = useState([])

  console.log(playerInfo);

  function handleSubmit(questionArray, number) {

    setCurrentQuestions(questionArray)
    setNumberOfPlayers(number)
  }


  return (
    <div className="App">
      <Header />

      <main>
        <div className="wrapper">

          <Routes>


            <Route path="/" element={<Form showQuestions={handleSubmit} playerInfo={setPlayerInfo} />} />
            <Route path="/game" element={<Questions currentQuestions={currentQuestions} playerInfo={playerInfo} numOfPlayers={numberOfPlayers} />} />

            {/* <Route path="/results" element={<Scoreboard />} /> */}
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
