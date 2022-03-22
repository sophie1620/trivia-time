import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';

import Form from './Form'
import PlayerAvatars from './PlayerAvatars';

function App() {

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
