function Results(props) {



    return (
        props.finalScores.map((info) => {
            return (
                <div>
                    <p>{info.name}: {info.points}</p>

                    <img src={info.pic} alt="Player avatar" />

                </div>
            )
        }));



}


export default Results