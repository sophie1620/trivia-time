import { useState, useEffect } from 'react';
import firebase from '../firebase';
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';

function Leaderboard() {
    const [winners, setWinners] = useState([]);

    //////// accessing Firebase results
    useEffect(() => {
        // we don't need to set an empty array, because we already have access to the info from playerInfo array of object?

        const database = getDatabase(firebase);
        const dbRef = ref(database);

        onValue(dbRef, (response) => {
            // console.log(response.val());

            const newState = [];

            const data = response.val();

            for (let key in data) {
                newState.push(data[key]);
            }
            setWinners(newState);
        })
    }, [])

    console.log(winners);
    const newWinners = [... winners];

    const blah = [];

    newWinners.map((info, i) => {
        console.log(info);

    })


    
    return(
        
        <p></p>
        // winners.forEach((winner) => {
            // winners.map((info, i) => {
            //     return (

            //         <li key={Math.random()}>
            //             <div>
            //                 <img className="avatarPic" src={info.pic} alt="Player avatar" />
            //                 <p>{info.name}! </p>
            //                 <p> score: {info.points}</p>

            //             </div>

            //         </li>

            //     )
            // })
        // }) //end bracket for forEach
    )}

export default Leaderboard;