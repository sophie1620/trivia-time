import PlayerQuestions from './PlayerQuestions'
import { useState, useEffect } from 'react'

function Questions(props) {


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
                triviaQuestn={questions.triviaQuestn.replace(/&[#039]*;/g, "'")
                    .replace(/&[amp]*;/g, '&')
                    .replace(/&[quot]*;/g, '"')
                    .replace(/&[rsquo]*;/g, '’')
                    .replace(/&[lsquo]*;/g, '‘')
                    .replace(/&[ldquo]*;/g, '“')
                    .replace(/&[rdquo]*;/g, '”')
                    .replace(/&[apos]*;/gd, "'")
                    .replace(/&[hellip]*;/g, "…")
                    .replace(/&[percnt]*;/g, '%')
                    .replace(/&[divide]*;/g, '÷')
                    .replace(/&[div]*;/g, '÷')
                    .replace(/&[lt]*;/g, '<')
                    .replace(/&[gt]*;/g, '>')
                    .replace(/&[sup2]*;/g, '²')
                    .replace(/&[deg]*;/g, '°')
                    .replace(/&[aacute]*;/g, 'á')
                    .replace(/&[aAring]*;/g, 'Å')
                    .replace(/&[eacute]*;/g, 'é')
                    .replace(/&[iacute]*;/g, 'í')
                    .replace(/&[ntilde]*;/g, 'ñ')
                    .replace(/&[oacirc]*;/g, 'ô')
                    .replace(/&[oacute]*;/g, 'ó')
                    .replace(/&[uacute]*;/g, 'ú')
                    .replace(/&[auml]*;/g, 'ä')
                    .replace(/&[euml]*;/g, 'ë')
                    .replace(/&[iuml]*;/g, 'ï')
                    .replace(/&[ouml]*;/g, 'ö')
                    .replace(/&[uuml]*;/g, 'ü')
                    .replace(/&[yuml]*;/g, 'ÿ')
                    .replace(/&[uuml]*;/g, 'ü')
                    .replace(/&[scaron]*;/g, 'š')
                    .replace(/&[epsilon]*;/g, 'ε')
                    .replace(/&[Phi]*;/g, 'φ')}
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
            console.log('done!')
        }
        // }
    }


    return (
        <div>
            <p>score: {score}</p>
            <p>Player: {currentPlayer + 1} </p>
            {assignedQuestions[currentPlayer]}
            <button onClick={next}>submit</button>
        </div>
    )
}

export default Questions;