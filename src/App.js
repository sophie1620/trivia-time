import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.scss';

function App() {

  const [ avatar, setAvatar ] = useState('')

  // make axios call to Trivia API
  useEffect( () => {
    axios({
      url: 'https://opentdb.com/api.php?amount=20', 
      params: {
        category: 14
      }
    }).then( (apiData) => {
      console.log('Trivia Data', apiData.data.results);
    })
  }, [])


  // ////// .map() through and push the correct answer and incorrect answer into a new array and then this array should be shuffled

  // make axios call to DiceBear API
  useEffect( () => {
    axios({
      url: 'https://avatars.dicebear.com/api/bottts/michelle.svg'
    }).then( (data) => {
      console.log('DiceBear Data:', data)
      setAvatar(data.request.responseURL)
    })
  }, [])

  console.log(avatar)

  // /////// save player's names into a variable and then do a .map or something to put each name into its 



  return (
    <div className="App">
      {/* <img src={`data:image/svg+xml;utf8,${avatar}`} /> */}


      <div>
        <img src={avatar} alt="" />
      </div>

    </div>
  );
}

export default App;
