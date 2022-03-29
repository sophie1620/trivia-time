import { useState, useEffect } from 'react'
import axios from 'axios'
import AvatarPic from './AvatarPic';

function PlayerAvatars(props) {
    const { triviaPlayers, nameArray, playerAvatarName } = props;

    const [avatar, setAvatar] = useState([]);
    const numOfAvatar = triviaPlayers;

    useEffect(() => {
        // Array to store batched API response
        const batchRes = [];

        // Loop and call API 5 times;
        for (let i = 0; i < numOfAvatar; i++) {
            // Push response to temporary array
            const res = avatarCall(i)
            batchRes.push(res)
        }

        Promise.all(batchRes)
            .then((apiData) => {
                setAvatar(apiData)

                // giving each player an avatar for error handling, in case they don't want to change the default placeholder
                apiData.forEach((item, index) => {
                    nameArray[index].pic = item.request.responseURL
                    playerAvatarName(nameArray[index], index)
                })
            })


        async function avatarCall(number) {
            const apiData = await axios({
                url: `https://avatars.dicebear.com/api/bottts/${number}.svg`
            })
            if (apiData.request.status === 200 || apiData.request.statusText === "OK") {
                return apiData
            } else {
                throw new Error(apiData.request.statusText);
            }
        }
    }, numOfAvatar, nameArray, playerAvatarName);


    return (
        // should we put this as a form, so that we can hold onto the player's name info when they press submit?
        <div className="players">

            <h2>let's get to know each-other.</h2>
            <ul className="playerList">
                {
                    avatar.map((avatarUrl, i) => {
                        return (
                            // Using Math.Random() for now to generate temporary ID
                            <AvatarPic
                                src={avatarUrl.request.responseURL}
                                key={Math.random()}
                                userObject={nameArray[i]}
                                playerAvatarName={playerAvatarName}
                                arrayIndex={i}

                            />
                        )

                    })
                }
            </ul>
        </div>
    );
}
export default PlayerAvatars;