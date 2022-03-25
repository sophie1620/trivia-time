import { useState } from 'react'

function PlayerQuestions(props) {
    const [active, setActive] = useState(0);

    const { triviaQuestn, answers, rightAnswer, setQuestionOneCheck, setQuestionTwoCheck, setQuestionThreeCheck, changeScore, revertScore } = props;
    console.log(rightAnswer)

    function handleSelect(event) {
        if (event.target.value === rightAnswer) {
            changeScore()
        } else if (event.target.value !== rightAnswer) {
            revertScore()
        }
    }

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


    // radio buttons don't turn blue but THATS OK
    // we will style so its just the lables anyway

    return (
        <fieldset>

            <legend>{normalizeText(triviaQuestn)}</legend>

            <label htmlFor={`ans1-${triviaQuestn}}`}>{normalizeText(answers[0])}</label>
            <input type="radio" id={`ans1-${triviaQuestn}}`} value={answers[0]} onChange={handleSelect} checked={active == 0} onClick={() => setActive(0)} />

            <label htmlFor={`ans2-${normalizeText(triviaQuestn)}}`}>{normalizeText(answers[1])}</label>
            <input type="radio" id={`ans2-${triviaQuestn}}`} value={answers[1]} onChange={handleSelect} checked={active == 1} onClick={() => setActive(1)} />

            <label htmlFor={`ans3-${normalizeText(triviaQuestn)}}`}>{normalizeText(answers[2])}</label>
            <input type="radio" id={`ans3-${triviaQuestn}}`} value={answers[2]} onChange={handleSelect} checked={active == 2} onClick={() => setActive(2)} />

            <label htmlFor={`ans4-${normalizeText(triviaQuestn)}}`}>{normalizeText(answers[3])}</label>
            <input type="radio" id={`ans4-${triviaQuestn}}`} value={answers[3]} onChange={handleSelect} checked={active == 3} onClick={() => setActive(3)} />


        </fieldset>

    )
}


export default PlayerQuestions