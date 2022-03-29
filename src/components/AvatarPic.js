import { useState } from "react";

function AvatarPic(props) {
    // console.log(props);

    const [userInput, setUserInput] = useState(props.userObject.name);


    // // array to for player number
    // const playerNumbers = ['one', 'two', 'three', 'four', 'five'];

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
        <li>

            <h3>
                player
            </h3>

            <fieldset className="playerInfo" >
                <div className="imgContainer"> 
                    <img
                        className="avatarPic"
                        src={props.src}
                        alt="robot avatar"
                    />
                </div>

                {/* for players to set their own names */}
                <label className="sr-only" htmlFor="playerName">Player Name</label>
                <input type="text" name="playerName" id="playerName" value={userInput} onChange={handleLocalInputChange} onBlur={handleInputChange} />
                    {/* oncChange now only handles LOCAL changes, and onBlur will update with the object info ONCE the user clicks away from the input box */}

            </fieldset>
        </li>
    )
}

export default AvatarPic;