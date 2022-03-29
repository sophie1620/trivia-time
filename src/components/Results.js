import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import firebase from '../firebase';
import { getDatabase, ref, push } from 'firebase/database';


function Results(props) {
    const { scores } = props;

    const fullScoreArray = scores.map((number) => {
        return (
            number.points
        )
    })

    const scoreArray = fullScoreArray.filter((number) =>
        number !== undefined
    )

    const highestScore = Math.max(...scoreArray)

    const winnerArray = scores.filter((score) =>
        score.points === highestScore
    )

    const loserArray = scores.filter((score) =>
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

                <section className="losersContainer">
                    <h2>better luck next time!</h2>
                    <ul className="losers">
                        {losers}
                    </ul>
                </section>

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