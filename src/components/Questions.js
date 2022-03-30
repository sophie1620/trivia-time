import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PlayerQuestions from './PlayerQuestions';
import CountDown from './CountDown';

function Questions(props) {
    const [showQuestions, setShowQuestions] = useState(true)
    const [showResultsLink, setShowResultsLink] = useState(false)
    const [playerQuestions, setPlayerQuestions] = useState([])
    const [score, setScore] = useState(0)
    const [currentPlayer, setCurrentPlayer] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [isReset, setIsReset] = useState(false)

    // destructure props passed from parent component
    const { currentQuestions, numOfPlayers, playerInfo, updateFinalScores } = props;

    let scoreUpdater = 0;

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
    }, [currentQuestions], newShuffledAnswersArray)

    const finalQuestionArray = playerQuestions.map((questions) => {

        return (
            <PlayerQuestions
                key={Math.random()}
                triviaQuestn={questions.triviaQuestn}
                answers={questions.answers}
                rightAnswer={questions.correct}
                changeScore={changeScore}
            />
        )
    })

    // creating an array of questions for each player by slicing the original array with questions 
    const assignedQuestions = [];
    playerInfo.forEach((indivPlayer, i) => {
        assignedQuestions.push(finalQuestionArray.slice(((i + 1) * 3) - 3, (i + 1) * 3));
    })

    // when user selects a potential answer, the answerCheck state will update to 0 or 1 depending on whether the correct answer is chosen
    function changeScore(number) {
        scoreUpdater = number;
    }

    function next() {
        // when the next button is clicked, add the final value of answerCheck to the player's current score, then increment the current question +1

        setScore(score + scoreUpdater)
        scoreUpdater = 0;
        setCurrentQuestion(currentQuestion + 1)

        // when player has submitted three times, change the current player's points value within the playerInfo array to the current score, then reset everything for next player
        if (currentQuestion === 3) {
            // pushScore()
            playerInfo[currentPlayer].points = score
            reset()
        } else if (currentPlayer === (numOfPlayers - 1) && currentQuestion === 2) {
            playerInfo[currentPlayer].points = score
            setShowResultsLink(true)
            setShowQuestions(false)
            updateFinalScores(playerInfo)
        }



        setIsReset(true);
    }

    function reset() {
        // setScoreIsUpdated(false)
        setScore(0)

        if (currentPlayer === (numOfPlayers - 1)) {
            setShowResultsLink(true)
            setShowQuestions(false)
            updateFinalScores(playerInfo)
        } else {
            setCurrentPlayer(currentPlayer + 1)
            setCurrentQuestion(0)
        }
    }

    useEffect(() => {
        setIsReset(false);
    }, [currentQuestion])

    return (
        <div>
            {
                showQuestions
                    ?
                    <section className="questions">
                        <div className="question-container">
                            <div className="player-name-text">
                                <h3>Player: {playerInfo[currentPlayer].name}  </h3>
                            </div>
                            <div className="player-avatar-container">
                                <img
                                    className="avatarPic" src={playerInfo[currentPlayer].pic} alt="player avatar" />
                            </div>

                            {assignedQuestions[currentPlayer][currentQuestion]}


                            <div className="timer-flex">
                                {currentQuestion === 3 ? null : <div className="timer-container">
                                    <CountDown seconds={10} handleCountdownFinish={() => next()} handleNextButton={isReset} />
                                </div>}

                            </div>

                            <button onClick={next} className="next-button">{currentQuestion === 3 ? "next player" : "next"}</button>
                        </div>
                    </section>
                    : null
            }


            {
                showResultsLink
                    ?
                    <Link to="/results">
                        <button className="start finish">Finish game</button>
                    </Link>
                    : null
            }
        </div>
    )
}

export default Questions;