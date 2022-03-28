import { Link } from 'react-router-dom';


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
            <div>
                <div>
                    <p>{info.name} wins!</p>
                    <p>{info.name}'s score: {info.points}</p>

                    <img src={info.pic} alt="Player avatar" />

                </div>

            </div>
        )
    })

    const losers = loserArray.map((info) => {

        return (
            <div>
                <div>
                    <p>{info.name}'s score: {info.points}</p>

                    <img src={info.pic} alt="Player avatar" />

                </div>

            </div>
        )
    })

    return (
        <div>
            <h3>Results</h3>
            {winner}
            {losers}
            <Link to={"/"}>
                <button>Play again</button>
            </Link >
        </div>


    );



}


export default Results