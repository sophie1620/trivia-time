import { useState } from 'react'
// import CountDown from './CountDown';

function PlayerQuestions(props) {
    console.log(props);
    // console.log(props)
    // console.log(props.playerSelected)

    const [selectedAnswer, setSelectedAnswer] = useState('')



    function handleSelect(event) {
        console.log(event.target.value);
        // console.log(selectedAnswer)
        setSelectedAnswer(event.target.value)
        props.playerSelected(selectedAnswer)
        if (event.target.value === props.rightAnswer) {
            props.increaseScore()
        }
    }


    // radio buttons don't turn blue but THATS OK
    // we will style so its just the lables anyway

    return (
        <fieldset disabled={props.disabledStatus}>

            <legend>{props.triviaQuestn}</legend>

            <label htmlFor="ans1">{props.answers[0]}</label>
            <input type="radio" name={props.triviaQuestn} id="ans1" value={props.answers[0]} onChange={handleSelect} />

            <label htmlFor="ans2">{props.answers[1]}</label>
            <input type="radio" name={props.triviaQuestn} id="ans2" value={props.answers[1]} onChange={handleSelect} />

            <label htmlFor="ans3">{props.answers[2]}</label>
            <input type="radio" name={props.triviaQuestn} id="ans3" value={props.answers[2]} onChange={handleSelect} />

            <label htmlFor="ans4">{props.answers[3]}</label>
            <input type="radio" name={props.triviaQuestn} id="ans4" value={props.answers[3]} onChange={handleSelect} />


        </fieldset>

    )



}


export default PlayerQuestions