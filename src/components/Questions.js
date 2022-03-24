import PlayerQuestions from './PlayerQuestions'
import { useState, useEffect } from 'react'

function Questions(props) {
    // console.log('question props', props.currentQuestions);

    const [playerQuestions, setPlayerQuestions] = useState([])
    const [playerSelectedAns, setPlayerSelectedAns] = useState('')
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [currentPlayer, setCurrentPlayer] = useState(1)


    // handleSubmit button will have a function that maps through each question to identify and save that value
    // will compare this saved value with the value that the player has selected, which has been passed back up to us in an onChange function?

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
                correct: question.correct_answer.replace(/&[#039]*;/g, "'").replace(/&[amp]*;/g, '&').replace(/&[quot]*;/g, '"')
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
                    .replace(/&[Phi]*;/g, 'φ')
            }
            return (
                newShuffledAnswersArray.push(newObj)
            )
            // console.log(question);
            // console.log('all answer options', allAnswerOptions);
            // console.log('all SHUFFLED answer options', shuffledAnswerOptions);
        })
        // console.log(newShuffledAnswersArray);
        setPlayerQuestions(newShuffledAnswersArray)
    }, [props.currentQuestions])

    // console.log(playerQuestions);
    // console.log('player ans', playerSelectedAns)

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     props.currentQuestions.map((question) => {
    //         if (question.correct_answer === playerSelectedAns) {
    //             console.log('right answer!')
    //         } else {
    //             console.log('better luck next time!')
    //         }
    //     })
    // }

    // function createPlayerQuestions() {
    //     if (props.numberOfPlayers == 1) {
    //         const playerOneQuestions = finalQuestionArray.slice(0, 3)
    //     }
    //     if (props.numberOfPlayers == 2) {
    //         const playerOneQuestions = finalQuestionArray.slice(0, 3)
    //         const playerTwoQuestions = finalQuestionArray.slice(3, 7)
    //     }
    //     if (props.numberOfPlayers == 3) {
    //         const playerOneQuestions = finalQuestionArray.slice(0, 3)
    //         const playerTwoQuestions = finalQuestionArray.slice(3, 7)
    //         const playerThreeQuestions = finalQuestionArray.slice(7, 11)
    //     }
    //     if (props.numberOfPlayers == 4) {
    //         const playerOneQuestions = finalQuestionArray.slice(0, 3)
    //     }
    //     if (props.numberOfPlayers == 5) {
    //         const playerOneQuestions = finalQuestionArray.slice(0, 3)
    //     }
    // }


    function increaseScore() {
        setScore(score + 1)
    }

    function next() {

        setCurrentQuestion(currentQuestion + 1)
        if (currentQuestion % 3 === 0) {
            setCurrentPlayer(currentPlayer + 1)
        }
    }
    // it SOMEWHAT works, but it only keeps track of the last submitted response, so I think the check will need to be done in PlayerQuestions


    // }
    // useEffect((handleSubmit) => {
    //     if (playerSelectedAnswer === correctAnswer) {
    //         console.log('correct')
    //         // create counter usestate and update score
    //     }
    // }, [])


    const finalQuestionArray = playerQuestions.map((questions) => {
        return (

            <PlayerQuestions
                playerSelected={setPlayerSelectedAns}
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

    return (
        <div>
            <p>score: {score}</p>
            <p>Player:{currentPlayer}</p>
            {finalQuestionArray[currentQuestion]}
        </div>
    )
}

export default Questions;