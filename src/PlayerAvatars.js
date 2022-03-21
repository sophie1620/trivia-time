import { useState, useEffect } from 'react'
import axios from 'axios'

import AvatarPic from './AvatarPic';

function PlayerAvatars() {

    // make axios call to DiceBear API

    const [avatar, setAvatar] = useState([]);
    const avatarSelection = [];
    const avatars = [];

    useEffect(() => {
        for (let i = 1; i <= 5; ++i) {
            avatarSelection.push(avatarCall(i));
        }
        async function avatarCall(number) {
            const apiData = await axios({
                url: `https://avatars.dicebear.com/api/bottts/${number}.svg`
            })

            avatars.push(apiData.request.responseURL)
            console.log(avatars)
            // setAvatar(avatars)
        }

        // Promise.all(avatarSelection)
        //     .then(response => {
        //         console.log(response)
        //     })


        // console.log(avatarSelection);
    }, []);

    console.log(avatars)

    return (
        <div>
            {/* {
                avatars.map((avatar) => {
                    console.log(avatar)
                    return (
                        <AvatarPic
                            imageUrl={avatar}
                            key={avatar}
                        />
                    )
                })
            } */}
            <p>helo</p>
        </div>
    )

}
export default PlayerAvatars;