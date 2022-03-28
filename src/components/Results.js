import { Link } from 'react-router-dom'

function Results(props) {
    console.log(props)

    // if points = 3 for any player they win

    const scoreArray = props.scores.map((number) => {

        return (
            number.points
        )
    })

    const highestScore = Math.max(...scoreArray)

    console.log(highestScore)

    const winnerArray = props.scores.filter((score) =>
        score.points === highestScore
    )

    const loserArray = props.scores.filter((score) =>
        score.points !== highestScore
    )

    console.log(winnerArray)


    const winner = winnerArray.map((info) => {

        return (
            <li>
                <div>

                    <img src={info.pic} alt="Player avatar" />
                    <p>{info.name}! </p>
                    <p> score: {info.points}</p>

                </div>

            </li>
        )
    })

    const losers = loserArray.map((info) => {

        return (
            <li>
                <div>

                    <img src={info.pic} alt="Player avatar" />
                    <p>{info.name} </p>
                    <p> score: {info.points}</p>

                </div>

            </li>
        )
    })
    console.log(winner)

    return (
        <section className="results">
            <div className="wrapper">
                <h3>results</h3>
                <section className="winnersContainer">
                    {winnerArray.length === 1 ?
                        <h2>The winner is:</h2>
                        : <h2>The winners are:</h2>}
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
                    <button>Play again</button>
                </Link >
            </div>
        </section>

    );



}


export default Results