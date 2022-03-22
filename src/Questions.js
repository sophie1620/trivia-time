import PlayerQuestions from './PlayerQuestions'
import { useState, useEffect } from 'react'

function Questions(props) {
    // const [playerSelectedAnswer, setPlayerSelectedAnswer] = useState('')
    // const [correctAnswer, setCorrectAnswer] = useState('')
    console.log(props.currentQuestions)

    // function check(a, b) {
    //     setPlayerSelectedAnswer(a)
    //     setCorrectAnswer(b)



    // }
    // useEffect((handleSubmit) => {
    //     if (playerSelectedAnswer === correctAnswer) {
    //         console.log('correct')
    //         // create counter usestate and update score
    //     }
    // }, [])


    return (
        <div>

            {console.log(props)}

            <form>
                {props.currentQuestions.map((questions) => {

                    console.log(questions)
                    return (

                        <PlayerQuestions questionText={questions.question.replace(/&[#039]*;/g, "'")
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
                            correct={questions.correct_answer}
                            incorrect={questions.incorrect_answers} />

                    )


                })}
                <button>submit</button>
            </form>
        </div>
    )
}

export default Questions;