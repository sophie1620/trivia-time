import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import firebase from '../firebase';
import { getDatabase, ref, push } from 'firebase/database';


function Results(props) {
    const { scores } = props;

    // filter out players with avatars (to filter out the non-players)
    const playersArray = scores.filter((player) =>
        player.pic !== ''
    )

    // filter out each score from the playersArray,
    const scoreArray = playersArray.map((player) => {
        return (
            player.points
        )
    })


    const highestScore = Math.max(...scoreArray)

    // compare player scores to highest score, then filter accordingly
    const winnerArray = playersArray.filter((score) =>
        score.points === highestScore
    )

    const loserArray = playersArray.filter((score) =>
        score.points !== highestScore
    )

    const winner = winnerArray.map((info) => {

        return (
            <li key={Math.random()}>
                <div className="target">

                    <img className="avatarPic" src={info.pic} alt="Player avatar" />
                    <h4>{info.name}! </h4>
                    <p> score: {info.points}</p>

                </div>
            </li>
        )
    })

    const losers = loserArray.map((info) => {

        return (
            // if the player has a picture (they are playing), set class to showPlayer, else hidePlayer
            <li className={info.pic !== "" ? "showPlayer" : "hidePlayer"} key={Math.random()}>
                <div>

                    <img className="avatarPic" src={info.pic} alt="Player avatar" />
                    <h4>{info.name} </h4>
                    <p> score: {info.points}</p>

                </div>
            </li>
        )
    })

    // //////// accessing Firebase results
    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database);
        push(dbRef, winnerArray);
    }, [winnerArray])

    console.log(loserArray)

    return (
        <section className="results">
            <div className="wrapper">
                <h3>results</h3>

                <section className="winnersContainer">
                    {
                        winnerArray.length === 1
                            ? <h2>The winner is:</h2>
                            : <h2>The winners are:</h2>
                    }

                    <ul className="winners">
                        {winner}
                    </ul>
                </section>

                {
                    loserArray.length > 0
                        ? <section className="losersContainer">
                            <h2>better luck next time!</h2>
                            <ul className="losers">
                                {losers}
                            </ul>
                        </section>
                        : null
                }

                <Link to={"/"}>
                    <button className="start">Play again</button>
                </Link >

                <Link to={"/previousWinners"}>
                    <button className="start">See previous winners!</button>
                </Link>
            </div>
        </section>
    )
}

export default Results