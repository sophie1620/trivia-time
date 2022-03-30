import { useState } from "react";

function AvatarPic(props) {
    const { userObject, src, arrayIndex, playerAvatarName } = props;

    const [userInput, setUserInput] = useState(userObject.name);

    const handleInputChange = function (event) {
        setUserInput(event.target.value)

        const inputObject = {
            name: userInput,
            pic: src,
            points: 0,
        }

        playerAvatarName(inputObject, arrayIndex)
    }

    const handleLocalInputChange = function (event) {
        setUserInput('')
        setUserInput(event.target.value)

    }
    return (
        <li>

            <h3>
                player {arrayIndex + 1}
            </h3>

            <fieldset className="playerInfo" >
                <div className="imgContainer">
                    <img
                        className="avatarPic"
                        src={src}
                        alt="robot avatar"
                    />
                </div>

                {/* for players to set their own names */}
                <label
                    className="sr-only"
                    htmlFor="playerName"
                >Player Name</label>

                <input
                    type="text"
                    name="playerName"
                    id="playerName"
                    value={userInput}
                    onChange={handleLocalInputChange}
                    onBlur={handleInputChange}
                />
                {/* oncChange now only handles LOCAL changes, and onBlur will update with the object info ONCE the user clicks away from the input box */}

            </fieldset>
        </li>
    )
}

export default AvatarPic;