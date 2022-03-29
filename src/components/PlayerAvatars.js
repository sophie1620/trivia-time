import { useState, useEffect } from 'react'
import axios from 'axios'
import AvatarPic from './AvatarPic';

function PlayerAvatars(props) {
    // console.log(props.triviaPlayers);
    // console.log(props.playerAvatarName);s

    const [avatar, setAvatar] = useState([]);

    const numOfAvatar = props.triviaPlayers;
    // console.log(playerName);

    // // array to for player number
    // const playerNumbers = ['one', 'two', 'three', 'four', 'five'];

    // const number = function() {
    //     playerNumbers.map((number) => {
    //         return (
    //             `player ${number} `
    //         )
    //     })
    // }

    useEffect(async () => {
        // Array to store batched API resonse
        const batchRes = [];

        // Loop and call API 5 times;
        for (let i = 0; i < numOfAvatar; i++) {
            // Push response to temporary array
            const res = await avatarCall(i)
            batchRes.push(res)
        }

        // Set state array to temporary array
        // We do this because the endpoint only returns one and not an actual batch
        // Setting it each time will cause unecessary rerenders since we would be calling setState each time with a new array
        // setAvatar(batchRes);

        Promise.all(batchRes)
            .then((apiData) => {
                setAvatar(apiData)

                // giving each player an avatar for error handling, in case they don't want to change the default placeholder
                apiData.forEach((item, index) => {
                    props.nameArray[index].pic = item.request.responseURL
                    props.playerAvatarName(props.nameArray[index], index)
                })
            })


        async function avatarCall(number) {
            const apiData = await axios({
                url: `https://avatars.dicebear.com/api/bottts/${number}.svg`
            })
            if (apiData.request.status === 200 || apiData.request.statusText == 'OK') {
                return apiData
            } else {
                throw new Error(apiData.request.statusText);
            }
            // Returns response string
        }
    }, props.triviaPlayers);


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
                                // playerNameInfo={playerNameInfo}
                                // playInfo={props.playInfo}
                                userObject={props.nameArray[i]}
                                playerAvatarName={props.playerAvatarName}
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