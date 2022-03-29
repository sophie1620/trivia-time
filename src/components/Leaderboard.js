import { useState, useEffect } from 'react';
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

        <div>
            {winners.map((winner) =>
            (
                <div>
                    {winner.map((eachWinner) =>
                    (
                        <div>
                            <p>{eachWinner.name}</p>
                            <p>{eachWinner.points}</p>

                            <img
                                className="avatarPic"
                                src={eachWinner.pic}
                                alt="robot avatar"
                            />
                        </div>
                    )
                    )}
                </div>
            )
            )}
        </div>
    )
}

export default Leaderboard;