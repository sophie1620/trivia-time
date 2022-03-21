import { useState, useEffect } from 'react'
import axios from 'axios'

import AvatarPic from './AvatarPic';

function PlayerAvatars() {
    const [avatar, setAvatar] = useState([]);

    useEffect(async () => {
        // Array to store batched API resonse
        const batchRes = [];

        // Loop and call API 5 times;
        for (let i = 1; i <= 5; i++) {
            // Push response to temporary array
            const res = await avatarCall(i)
            batchRes.push(res)
        }

        // Set state array to temporary array
        // We do this because the endpoint only returns one and not an actual batch
        // Setting it each time will cause unecessary rerenders since we would be calling setState each time with a new array
        setAvatar(batchRes);

        async function avatarCall(number) {
            const apiData = await axios({
                url: `https://avatars.dicebear.com/api/bottts/${number}.svg`
            })

            // Returns response string
            return apiData.request.responseURL
        }
    }, []);

    return (
        <div>
            {
                avatar.map((a) => {
                    return (
                        <AvatarPic
                            imageUrl={a}
                            // Using Math.Random() for now to generate temporary ID
                            key={Math.random()}
                        />
                    )
                })
            }
        </div>
    );
}
export default PlayerAvatars;