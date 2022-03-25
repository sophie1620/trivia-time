import { useState } from 'react'

function PlayerQuestions(props) {
    const [active, setActive] = useState(0);
    function handleSelect(event) {

        // if (event.target.value === props.rightAnswer) {
        //     props.increaseScore()
        // }
    }

    function normalizeQuestion(question) {
        return question.replace(/&[#039]*;/g, "'").replace(/&[amp]*;/g, '&').replace(/&[quot]*;/g, '"')
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

            <legend>{props.triviaQuestn}</legend>

            <label htmlFor={`ans1-${props.triviaQuestn}}`}>{normalizeQuestion(props.answers[0])}</label>
            <input type="radio" id={`ans1-${props.triviaQuestn}}`} value={props.answers[0]} onChange={handleSelect} checked={active == 0} onClick={() => setActive(0)} />

            <label htmlFor={`ans2-${props.triviaQuestn}}`}>{normalizeQuestion(props.answers[1])}</label>
            <input type="radio" id={`ans2-${props.triviaQuestn}}`} value={props.answers[1]} onChange={handleSelect} checked={active == 1} onClick={() => setActive(1)} />

            <label htmlFor={`ans3-${props.triviaQuestn}}`}>{normalizeQuestion(props.answers[2])}</label>
            <input type="radio" id={`ans3-${props.triviaQuestn}}`} value={props.answers[2]} onChange={handleSelect} checked={active == 2} onClick={() => setActive(2)} />

            <label htmlFor={`ans4-${props.triviaQuestn}}`}>{normalizeQuestion(props.answers[3])}</label>
            <input type="radio" id={`ans4-${props.triviaQuestn}}`} value={props.answers[3]} onChange={handleSelect} checked={active == 3} onClick={() => setActive(3)} />


        </fieldset>

    )
}


export default PlayerQuestions