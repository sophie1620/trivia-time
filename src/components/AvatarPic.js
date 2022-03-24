import { useEffect, useState } from "react";

function AvatarPic(props) {
    // console.log(props)

    const [userInput, setUserInput] = useState();

    const handleInputChange = function (event) {
        setUserInput(event.target.value)

        // getting the userInput and indiv avatar picture for parent component
        props.playerNameInfo(userInput, props.src)
    }

    return (
        <fieldset>

            <img 
                src={props.src} 
                alt="robot avatar" 
            />

                {/* for players to set their own names */}

            <label htmlFor="playerName">Player Name</label>
            <input type="text" name="playerName" id="playerName" onChange={handleInputChange} />
            
        </fieldset>
    )
}

export default AvatarPic;