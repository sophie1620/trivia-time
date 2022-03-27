import { Link } from 'react-router-dom'

function Results(props) {
    console.log(props)

    const scoreboard = props.scores.map((info) => {
        return (
            <div>
                <p>{info.name}'s score: {info.points}</p>

                <img src={info.pic} alt="Player avatar" />

            </div>
        )
    })

    return (
        <div>
            <h3>Results</h3>
            {scoreboard}
            <Link to={"/"}>
                <button>Play again</button>
            </Link >
        </div>


    );



}


export default Results