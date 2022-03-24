import PlayerQuestions from './PlayerQuestions'
import { useState, useEffect } from 'react'

function Questions(props) {
    // console.log('question props', props.currentQuestions);

    const [playerQuestions, setPlayerQuestions] = useState([])
    const [playerSelectedAns, setPlayerSelectedAns] = useState('')
    const [score, setScore] = useState(0)


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
                correct: question.correct_answer
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
    }, props.currentQuestions)

    // console.log(playerQuestions);
    // console.log('player ans', playerSelectedAns)

    function handleSubmit(event) {
        event.preventDefault();
        props.currentQuestions.map((question) => {
            if (question.correct_answer === playerSelectedAns) {
                console.log('right answer!')
            } else {
                console.log('better luck next time!')
            }
        })
    }

    function increaseScore() {
        setScore(score + 1)
    }
    // it SOMEWHAT works, but it only keeps track of the last submitted response, so I think the check will need to be done in PlayerQuestions


    // }
    // useEffect((handleSubmit) => {
    //     if (playerSelectedAnswer === correctAnswer) {
    //         console.log('correct')
    //         // create counter usestate and update score
    //     }
    // }, [])


    return (
        <div>

            {/* {console.log(props)} */}
            <p>score: {score}</p>
            <form onSubmit={handleSubmit}>
                {
                    playerQuestions.map((questions) => {
                        // console.log(questions)
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
                                increaseScore={increaseScore}
                            // correct={questions.correct_answer}
                            // incorrect={questions.incorrect_answers} 
                            />

                        )

                    })
                }
                <button>submit</button>
            </form>
        </div>
    )
}

export default Questions;