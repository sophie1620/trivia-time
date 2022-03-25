import PlayerQuestions from './PlayerQuestions'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import CountDown from './CountDown';

function Questions(props) {

    const [showQuestions, setShowQuestions] = useState(true)
    const [showResultsLink, setShowResultsLink] = useState(false)
    const [playerQuestions, setPlayerQuestions] = useState([])
    const [score, setScore] = useState(0)
    const [currentPlayer, setCurrentPlayer] = useState(0)


    // set it so that when the answer is right, it becomes 1, this happens for each question. at the end, add all the questions = final score

    const [questionOneCheck, setQuestionOneCheck] = useState(0)
    const [questionTwoCheck, setQuestionTwoCheck] = useState(0)
    const [questionThreeCheck, setQuestionThreeCheck] = useState(0)
    
    const [isDisabled, setIsDisabled] = useState(false);



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
            // console.log(question.correct_answer);

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

    function changeScore() {
        setQuestionOneCheck(1)
    }
    function revertScore() {
        setQuestionOneCheck(0)
    }


    const finalQuestionArray = playerQuestions.map((questions) => {

        const questionOne = {
            question: playerQuestions[0],
            check: questionOneCheck
        }
        const questionTwo = playerQuestions[1]
        const questionThree = playerQuestions[2]
        console.log(questionOne)

        return (

            <PlayerQuestions
                key={Math.random()}
                triviaQuestn={questions.triviaQuestn}
                answers={questions.answers}
                rightAnswer={questions.correct}
                nextQuestion={next}
                increaseScore={increaseScore}
                changeScore={changeScore}
                revertScore={revertScore}
                questionOneCheck={setQuestionOneCheck}
                questionTwoCheck={setQuestionTwoCheck}
                questionThreeCheck={setQuestionThreeCheck}

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

    // console.log(props.numOfPlayers)


    function next() {

        setCurrentPlayer(currentPlayer + 1)
        setScore(0)
        if (currentPlayer === (props.numOfPlayers - 1)) {
            setShowResultsLink(true)
            setShowQuestions(false)
        }

    }
    const handleCountdown = () => {
        setIsDisabled(true)
        console.log('this');


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



            {/* {console.log(props)} */}
            <p>score: {score}</p>
            <form onSubmit={handleSubmit} >

                <CountDown seconds={6} handleCountdownFinish={() => handleCountdown()} />
                {
                    playerQuestions.map((questions) => {
                        // console.log(questions)
                        return (

                            <PlayerQuestions
                                playerSelected={setPlayerSelectedAns}
                                key={Math.random()}
                                disabledStatus={isDisabled}
                                triviaQuestn={questions.triviaQuestn}
                                answers={questions.answers}
                                rightAnswer={questions.correct}
                                increaseScore={increaseScore}
                            // correct={questions.correct_answer}
                            // incorrect={questions.incorrect_answers} 
                            />

                        )

                    })
                }
                <button>submit</button>
            </form>
\
        </div>
    )
}

export default Questions;