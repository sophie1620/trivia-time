import { useState } from "react";

function AvatarPic(props) {
    // console.log(props)

    const [userInput, setUserInput] = useState(props.userObject.name);



    const handleInputChange = function (event) {
        // console.log(event.target.value)
        setUserInput(event.target.value)

        const inputObject = {
            name: userInput,
            pic: props.src,
            points: 0,
        }

        props.playerAvatarName(inputObject, props.arrayIndex)
    }

    const handleLocalInputChange = function (event) {
        setUserInput('')
        setUserInput(event.target.value)

    }
    return (
        <fieldset >
            <img
                className="avatarPic"
                src={props.src}
                alt="robot avatar"
            />

            {/* for players to set their own names */}
            <label htmlFor="playerName">Player Name</label>
            <input type="text" name="playerName" id="playerName" value={userInput} onChange={handleLocalInputChange} onBlur={handleInputChange} />
                {/* oncChange now only handles LOCAL changes, and onBlur will update with the object info ONCE the user clicks away from the input box */}
        </fieldset>
    )
}

export default AvatarPic;