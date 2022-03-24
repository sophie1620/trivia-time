import PlayerQuestions from './PlayerQuestions'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Questions(props) {

    const [showQuestions, setShowQuestions] = useState(true)
    const [showResultsLink, setShowResultsLink] = useState(false)
    const [playerQuestions, setPlayerQuestions] = useState([])
    const [score, setScore] = useState(0)
    const [currentPlayer, setCurrentPlayer] = useState(0)


    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = temp;
        }
        return array
    }

    const newShuffledAnswersArray = [];

    useEffect(() => {
        props.currentQuestions.map(function (question) {
            console.log(question.correct_answer);

            const allAnswerOptions = question.incorrect_answers.concat(question.correct_answer);
            const shuffledAnswerOptions = shuffleArray(allAnswerOptions);

            const newObj = {
                triviaQuestn: question.question,
                answers: shuffledAnswerOptions,
                correct: question.correct_answer
            }
            return (
                newShuffledAnswersArray.push(newObj)
            )

        })

        setPlayerQuestions(newShuffledAnswersArray)
    }, [props.currentQuestions])




    const finalQuestionArray = playerQuestions.map((questions) => {
        return (

            <PlayerQuestions
                key={Math.random()}
                triviaQuestn={questions.triviaQuestn}
                answers={questions.answers}
                rightAnswer={questions.correct}
                nextQuestion={next}
                increaseScore={increaseScore}
            // correct={questions.correct_answer}
            // incorrect={questions.incorrect_answers} 
            />

        )

    })
    const playerOneQuestions = finalQuestionArray.slice(0, 3)
    const playerTwoQuestions = finalQuestionArray.slice(3, 6)
    const playerThreeQuestions = finalQuestionArray.slice(6, 9)
    const playerFourQuestions = finalQuestionArray.slice(9, 12)
    const playerFiveQuestions = finalQuestionArray.slice(12, 15)

    const assignedQuestions = [playerOneQuestions, playerTwoQuestions, playerThreeQuestions, playerFourQuestions, playerFiveQuestions]

    console.log(assignedQuestions)


    function increaseScore() {
        setScore(score + 1)
    }
    console.log(props.numOfPlayers)
    function next() {

        setCurrentPlayer(currentPlayer + 1)
        setScore(0)
        if (currentPlayer === (props.numOfPlayers - 1)) {
            setShowResultsLink(true)
            setShowQuestions(false)
        }

    }


    return (

        <div>
            {
                showQuestions
                    ? <div>
                        <p>score: {score}</p>
                        <p>Player: {currentPlayer + 1} </p>
                        {assignedQuestions[currentPlayer]}
                        <button onClick={next}>submit</button>
                    </div>
                    : null
            }

            {
                showResultsLink
                    ?
                    <Link to="/results">
                        <button>Finish game</button>
                    </Link>
                    : null
            }

        </div>
    )
}

export default Questions;