import PlayerQuestions from './PlayerQuestions'
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import CountDown from './CountDown';


function Questions(props) {

    const [showQuestions, setShowQuestions] = useState(true)
    const [showResultsLink, setShowResultsLink] = useState(false)
    const [playerQuestions, setPlayerQuestions] = useState([])
    const [answerCheck, setAnswerCheck] = useState(0)
    const [score, setScore] = useState(0)
    const [currentPlayer, setCurrentPlayer] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [isDisabled, setIsDisabled] = useState(false);

    const { currentQuestions, numOfPlayers, playerInfo } = props;

    console.log(score)


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

        currentQuestions.map(function (question) {

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
    }, [currentQuestions])

    const finalQuestionArray = playerQuestions.map((questions) => {

        return (

            <PlayerQuestions
                key={Math.random()}
                triviaQuestn={questions.triviaQuestn}
                answers={questions.answers}
                rightAnswer={questions.correct}
                disabledStatus={isDisabled}
                changeScore={changeScore}
            />

        )

    })
    const playerOneQuestions = finalQuestionArray.slice(0, 3)
    const playerTwoQuestions = finalQuestionArray.slice(3, 6)
    const playerThreeQuestions = finalQuestionArray.slice(6, 9)
    const playerFourQuestions = finalQuestionArray.slice(9, 12)
    const playerFiveQuestions = finalQuestionArray.slice(12, 15)

    const assignedQuestions = [playerOneQuestions, playerTwoQuestions, playerThreeQuestions, playerFourQuestions, playerFiveQuestions]

    // console.log(score);

    // when user selects a potential answer, the answerCheck state will update to 0 or 1 depending on whether the correct answer is chosen
    function changeScore(number) {
        setAnswerCheck(number)
    }

    // map over the playerInfo array to create points key value pair in order to store the score
    // (changed this to for each since we dont want to create a new array, just alter the current one)
    // playerInfo.forEach((player) => {
    //     player.points = 0;

    // })




    function next() {
        // when the next button is clicked, add the final value of answerCheck to the player's current score, then increment the current question +1
        setScore(score + answerCheck)
        setCurrentQuestion(currentQuestion + 1)

        // when player has submitted three times, change the current player's points value within the playerInfo array to the current score, then reset everything for next player
        if (currentQuestion === 2) {

            playerInfo[currentPlayer].points = score;
            console.log(playerInfo[currentPlayer].points)
            reset()


        }

    }

    function reset() {
        setScore(0)
        setCurrentQuestion(0)
        if (currentPlayer === (numOfPlayers - 1)) {
            setShowResultsLink(true)
            setShowQuestions(false)
            props.updateFinalScores(playerInfo)

        } else {
            setCurrentPlayer(currentPlayer + 1)
        }
    }




    const handleCountdown = () => {
        setIsDisabled(true)
        // console.log('this');
    }

    return (

        <div>
            {
                showQuestions
                    ? <div>
                        <CountDown seconds={30} handleCountdownFinish={() => handleCountdown()} />

                        <p>Player: {playerInfo[currentPlayer].name}  </p>
                        <img src={playerInfo[currentPlayer].pic} alt="player avatar" />
                        {assignedQuestions[currentPlayer][currentQuestion]}
                        <button onClick={next}>next</button>
                    </div>
                    : null
            }

            {
                showResultsLink
                    ?
                    <Link to="/results" >
                        <button >Finish game</button>
                    </Link>
                    // <Results finalScores={playerInfo} />
                    : null
            }

        </div>
    )
}

export default Questions;