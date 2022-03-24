import { useState } from 'react'

function PlayerQuestions(props) {

    function handleSelect(event) {

        if (event.target.value === props.rightAnswer) {
            props.increaseScore()
        }
    }


    // radio buttons don't turn blue but THATS OK
    // we will style so its just the lables anyway

    return (
        <fieldset>

            <legend>{props.triviaQuestn}</legend>

            <label htmlFor="ans1">{props.answers[0].replace(/&[#039]*;/g, "'").replace(/&[amp]*;/g, '&').replace(/&[quot]*;/g, '"')
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
                .replace(/&[Phi]*;/g, 'φ')}</label>
            <input type="radio" name={props.triviaQuestn} id="ans1" value={props.answers[0]} onChange={handleSelect} />

            <label htmlFor="ans2">{props.answers[1].replace(/&[#039]*;/g, "'").replace(/&[amp]*;/g, '&').replace(/&[quot]*;/g, '"')
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
                .replace(/&[Phi]*;/g, 'φ')}</label>
            <input type="radio" name={props.triviaQuestn} id="ans2" value={props.answers[1]} onChange={handleSelect} />

            <label htmlFor="ans3">{props.answers[2].replace(/&[#039]*;/g, "'").replace(/&[amp]*;/g, '&').replace(/&[quot]*;/g, '"')
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
                .replace(/&[Phi]*;/g, 'φ')}</label>
            <input type="radio" name={props.triviaQuestn} id="ans3" value={props.answers[2]} onChange={handleSelect} />

            <label htmlFor="ans4">{props.answers[3].replace(/&[#039]*;/g, "'").replace(/&[amp]*;/g, '&').replace(/&[quot]*;/g, '"')
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
                .replace(/&[Phi]*;/g, 'φ')}</label>
            <input type="radio" name={props.triviaQuestn} id="ans4" value={props.answers[3]} onChange={handleSelect} />


        </fieldset>

    )



}


export default PlayerQuestions