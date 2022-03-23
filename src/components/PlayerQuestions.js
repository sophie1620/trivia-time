import { useState } from 'react'

function PlayerQuestions(props) {
    // console.log(props)
    // console.log(props.playerSelected)

    const [selectedAnswer, setSelectedAnswer] = useState('')

    // const answerList = [];
    // answerList.push(props.correct)
    // answerList.push(props.incorrect[0], props.incorrect[1], props.incorrect[2])
    // // console.log(answerList)
    // const correct = props.correct
    // // console.log(correct)


    // function handleSelect(event) {
    //     console.log(event.target.value);
    //     // console.log(selectedAnswer)
    //     setSelectedAnswer(event.target.value)
    //     setSelectedAnswer({
    //         [event.target.value]: event.target.value
    //     });
    //     console.log(selectedAnswer);
    //     props.playerSelected(selectedAnswer)
    //     // console.log(props.playerSelected);
    // }

    function handleSelect(event)
    { 
        setSelectedAnswer({ value: event.target.value });
        props.playerSelected(selectedAnswer)

        console.log(selectedAnswer);
    }   
    // // props.checkAnswer(selectedAnswer, correct)


    // const shuffledAnswers = shuffleArray(answerList)
    // // console.log(shuffledAnswers)

    return (
        <fieldset>

            <legend>{props.triviaQuestn}</legend>

            <label htmlFor="ans1">{props.answers[0]}</label>
            <input type="radio" name='quiz' id="ans1" value={props.answers[0]} onChange={handleSelect} />

            <label htmlFor="ans2">{props.answers[1]}</label>
            <input type="radio" name='quiz' id="ans2" value={props.answers[1]} onChange={handleSelect} />

            <label htmlFor="ans3">{props.answers[2]}</label>
            <input type="radio" name='quiz' id="ans3" value={props.answers[2]} onChange={handleSelect} />

            <label htmlFor="ans4">{props.answers[3]}</label>
            <input type="radio" name='quiz' id="ans4" value={props.answers[3]} onChange={handleSelect} />


        </fieldset>

    )



}


export default PlayerQuestions