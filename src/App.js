import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';
import Questions from './Questions'

import Form from './Form'
import PlayerAvatars from './PlayerAvatars';

function App() {

  const [ avatar, setAvatar ] = useState('')
  const [currentQuestions, setCurrentQuestions] = useState([])

  // make axios call to Trivia API
  // useEffect( () => {
  //   axios({
  //     url: 'https://opentdb.com/api.php?amount=20', 
  //     params: {
  //       category: 14
  //     }
  //   }).then( (apiData) => {
  //     // console.log('Trivia Data', apiData.data.results);
  //   })
  // }, [])

function handleSubmit(event, questionArray) {
  event.preventDefault()
  setCurrentQuestions(questionArray)
}
  // ////// .map() through and push the correct answer and incorrect answer into a new array and then this array should be shuffled

  // console.log(avatar)


  const [ triviaPlayers, setTriviaPlayers ] = useState(0)
  const [ display, setDistplay ] = useState('none');
    // used to change display classes for what is shown when

  // make axios call to Trivia API
  useEffect(() => {
    axios({
      url: 'https://opentdb.com/api.php?amount=20',
      params: {
        category: 14
      }
    }).then((apiData) => {
      // console.log('Trivia Data', apiData.data.results);
    })
  }, [])

  const getNumOfPlayers = function(e, numOfPpl) {
    e.preventDefault();
    setTriviaPlayers(numOfPpl);
  }

  return (
    <div className="App">
      <header>
        <div className="wrapper">
        </div>
      </header>

      <main>
        <div className="wrapper">
          <Form showQuestions={handleSubmit}/>
          <Questions currentQuestions={currentQuestions}/>
          <Form triviaPlayers={getNumOfPlayers} displayAvatar={setDistplay}/>
          <PlayerAvatars triviaPlayers={[triviaPlayers]} className={display}/>
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
