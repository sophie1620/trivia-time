

function Questions(props) {
    return (
        <div>
            <p>helo</p>
            {console.log(props)}


            {props.currentQuestions.map((questions) => {
                console.log(props);
                return (
                    <div className="game">
                        <p> {questions.question}</p>
                        <p>{questions.correct_answer}</p>
                        <p>{questions.incorrect_answers}</p>
                    </div>

                )
            })}

        </div>
    )
}

export default Questions;