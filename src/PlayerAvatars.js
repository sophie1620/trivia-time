import { useState, useEffect } from 'react'
import axios from 'axios'

import AvatarPic from './AvatarPic';

function PlayerAvatars() {

    const [ avatar, setAvatar ] = useState([])
    const avatarSelection = [];
    const blah = [];

    useEffect(() => {
        // create a new url for each API call to get 5 new avatars
        for (let i = 1; i <= 5; ++i) {
            avatarSelection.push(avatarCall(i));
        }

        // make API call
        async function avatarCall(number) {
            const apiData = await axios({
                url: `https://avatars.dicebear.com/api/bottts/${number}.svg`
            })
            const response = await apiData.request.responseURL;
            // console.log(response)
            return response;
            // setAvatar(avatars)
        }

        // Once all promises have been fulfilled, push all the results into the array: avatarSelection
            // use .map() on avatarSelection array to put each individual avartar image onto the page
        Promise.all(avatarSelection)
            .then(response => {
                // console.log(response)
                avatarSelection.push(response)
                setAvatar(avatarSelection);
            })
        console.log(avatarSelection);
    }, []);

    console.log(avatar);
    // this is returning as an object, and I don't know how to change it so that we are accessing the array within the object so that we can map it
    return (
        <div>
            {
                avatar.map((item) => {
                    console.log('item', item) //this is showing up as the array for some reason
                    return (

                        <AvatarPic
                            imageUrl={item}
                            key={item}
                        />
                    )

                })
            }
            <p>helo</p>
        </div>
    )

}
export default PlayerAvatars;