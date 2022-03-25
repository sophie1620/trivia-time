import { useState } from 'react'
// import CountDown from './CountDown';

function PlayerQuestions(props) {

    //   const [active, setActive] = useState(0);
    //   const [selectedAnswer, setSelectedAnswer] = useState('')

    const { triviaQuestn, answers, rightAnswer, setQuestionOneCheck, setQuestionTwoCheck, setQuestionThreeCheck, changeScore, revertScore } = props;


    // console.log(rightAnswer)

    // function handleSelect(event) {
    //     if (event.target.value === rightAnswer) {
    //         changeScore()
    //     } else if (event.target.value !== rightAnswer) {
    //         revertScore()
    //     }
    // }


    function normalizeText(text) {
        return text
            .replace(/&[#039]*;/g, "'")
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
            .replace(/&[Phi]*;/g, 'φ')
    }
    console.log(rightAnswer)


    // radio buttons don't turn blue but THATS OK
    // we will style so its just the lables anyway

    return (
        <fieldset disabled={props.disabledStatus}>

            <legend>{normalizeText(triviaQuestn)}</legend>

            <label htmlFor={`ans1-${normalizeText(triviaQuestn)}}`}>{normalizeText(answers[0])}</label>
            <input type="radio" name={triviaQuestn} id={`ans1-${normalizeText(triviaQuestn)}}`} value={answers[0]} />

            <label htmlFor={`ans2-${normalizeText(triviaQuestn)}}`}>{normalizeText(answers[1])}</label>
            <input type="radio" name={triviaQuestn} id={`ans2-${normalizeText(triviaQuestn)}}`} value={answers[1]} />

            <label htmlFor={`ans3-${normalizeText(triviaQuestn)}}`}>{normalizeText(answers[2])}</label>
            <input type="radio" name={triviaQuestn} id={`ans3-${normalizeText(triviaQuestn)}}`} value={answers[2]} />

            <label htmlFor={`ans4-${normalizeText(triviaQuestn)}}`}>{normalizeText(answers[3])}</label>
            <input type="radio" name={triviaQuestn} id={`ans4-${normalizeText(triviaQuestn)}}`} value={answers[3]} />


        </fieldset>

    )
}


export default PlayerQuestions