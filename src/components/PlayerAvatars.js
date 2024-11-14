import { useState, useEffect } from 'react'
import axios from 'axios'
import AvatarPic from './AvatarPic';

function PlayerAvatars(props) {
    const { triviaPlayers, nameArray, playerAvatarName } = props;

    const [avatar, setAvatar] = useState([]);

    useEffect(() => {
        // Array to store batched API response
        const batchRes = [];

        // Loop and call API 5 times;
        for (let i = 0; i < triviaPlayers; i++) {
            // Push response to temporary array
            const res = avatarCall(i)
            batchRes.push(res)
        }

        Promise.all(batchRes)
            .then((apiData) => {
                setAvatar(apiData)

                // giving each player an avatar for error handling, in case they don't want to change the default placeholder
                apiData.forEach((item, index) => {
                    playerAvatarName(nameArray[index], index, item.request.responseURL)
                })
            })


        async function avatarCall(number) {
            const apiData = await axios({
                url: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${number}`
            })
            if (apiData.request.status === 200 || apiData.request.statusText === "OK") {
                return apiData
            } else {
                throw new Error(apiData.request.statusText);
            }
        }
    }, triviaPlayers, nameArray, playerAvatarName);

    return (
        // should we put this as a form, so that we can hold onto the player's name info when they press submit?
        <div className="players">

            <h2>let's get to know each-other.</h2>
            <p>Enter the player names below.</p>
            <ul className="playerList">
                {
                    avatar.map((avatarUrl, i) => {
                        return (
                            // Using Math.Random() for now to generate temporary ID
                            <div tabIndex="0">
                                <AvatarPic
                                    src={avatarUrl.request.responseURL}
                                    key={Math.random()}
                                    userObject={nameArray[i]}
                                    playerAvatarName={playerAvatarName}
                                    arrayIndex={i}
                                />
                            </div>
                        )

                    })
                }
            </ul>
        </div>
    );
}
export default PlayerAvatars;