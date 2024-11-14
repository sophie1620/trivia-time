import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import { getDatabase, ref, onValue } from 'firebase/database';

function Leaderboard() {
    const [winners, setWinners] = useState([]);

    useEffect(() => {
        // we don't need to set an empty array, because we already have access to the info from playerInfo array of object?

        const database = getDatabase(firebase);
        const dbRef = ref(database);

        onValue(dbRef, (response) => {
            const newState = [];

            const data = response.val();

            for (let key in data) {
                newState.push(data[key]);
            }
            setWinners(newState);
        })
    }, [])


    return (

        <section className="leaderboard">
            <div className="wrapper">
                <h3>Previous Winners</h3>
                <ul className="winnersList">
                    {winners.map((winner) =>
                            <li key={Math.random()}>
                                {
                                    winner.map((eachWinner) =>
                                    (
                                        <div className="listInfo">
                                            <img
                                                className="avatarPic"
                                                src={eachWinner.pic}
                                                alt="robot avatar"
                                            />
                                            <h4>{eachWinner.name}</h4>
                                            <p>score: {eachWinner.points}</p>
                                        </div>
                                    )
                                    )
                                }
                            </li>
                    )
                    }
                </ul>
                <Link to={"/"}>
                    <button className="start finish">Play again</button>
                </Link >
            </div>
        </section>
    )
}

export default Leaderboard;