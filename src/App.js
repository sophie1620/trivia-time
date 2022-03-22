import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';
import Questions from './Questions'

import Form from './Form'
import PlayerAvatars from './PlayerAvatars';

function App() {

  const [currentQuestions, setCurrentQuestions] = useState([])

  function handleSubmit(event, questionArray) {
    event.preventDefault()
    setCurrentQuestions(questionArray)
  }

  return (
    <div className="App">
      <header>
        <div className="wrapper">
        </div>
      </header>

      <main>
        <div className="wrapper">
          <Form showQuestions={handleSubmit} />
          <Questions currentQuestions={currentQuestions}/>
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
