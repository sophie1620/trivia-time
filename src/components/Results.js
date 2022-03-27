function Results(props) {
    console.log(props.finalScores)
    console.log(props)



    return (
        props.finalScores.map((info) => {
            return (
                <div>
                    <p>Player: {info.name}</p>
                    <img src={info.pic} alt="Player avatar" />
                    <p>Score {info.points}</p>
                </div>
            )
        }));



}


export default Results