

function Questions(props) {
    return (
        props.currentQuestions.map((questions) => {
            console.log(props);
            return (
                <div>
                    <p> {questions.question}</p>
                    <p>{questions.correct_answer}</p>
                    <p>{questions.incorrect_answers}</p>
                </div>
                
            )
        }
        
    ))
}

export default Questions;