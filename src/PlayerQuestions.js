import { useState } from 'react'

function PlayerQuestions(props) {

    const [selectedAnswer, setSelectedAnswer] = useState('')

    const answerList = [];
    answerList.push(props.correct)
    answerList.push(props.incorrect[0], props.incorrect[1], props.incorrect[2])
    console.log(answerList)
    const correct = props.correct
    console.log(correct)

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = temp;
        }
        return array
    }

    function handleSelect(event) {
        setSelectedAnswer(event.target.value);
        console.log(selectedAnswer)


    }

    props.checkAnswer(selectedAnswer, correct)


    const shuffledAnswers = shuffleArray(answerList)
    console.log(shuffledAnswers)

    return (
        <form action="" >
            <fieldset>

                <legend>{props.questionText}</legend>
                <label htmlFor="">{shuffledAnswers[0]}</label>
                <input type="radio" name="quiz" id="" value={shuffledAnswers[0]} onChange={handleSelect} />
                <label htmlFor="">{shuffledAnswers[1]}</label>
                <input type="radio" name="quiz" id="" value={shuffledAnswers[1]} onChange={handleSelect} />
                <label htmlFor="">{shuffledAnswers[2]}</label>
                <input type="radio" name="quiz" id="" value={shuffledAnswers[2]} onChange={handleSelect} />
                <label htmlFor="">{shuffledAnswers[3]}</label>
                <input type="radio" name="quiz" id="" value={shuffledAnswers[3]} onChange={handleSelect} />


            </fieldset>

        </form>
    )



}


export default PlayerQuestions