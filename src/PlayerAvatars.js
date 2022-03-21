import { useState, useEffect } from 'react'
import axios from 'axios'

function PlayerAvatars() {

    // make axios call to DiceBear API

    // useEffect((number) => {
    //     axios({
    //         url: `https://avatars.dicebear.com/api/bottts/${number}.svg`
    //     }).then((data) => {
    //         // console.log('DiceBear Data:', data)
    //         setAvatar(data.request.responseURL)
    //         console.log(data.request.responseURL)
    //     })
    // }, []);

    const [avatar, setAvatar] = useState([]);
    const avatarSelection = [];

    async function avatarCall(number) {
        const apiData = await axios({
            url: `https://avatars.dicebear.com/api/bottts/${number}.svg`
        })
        const data = await apiData;
        console.log(apiData)
        return data;
        // console.log(data);
        // }).then((data) => {
        //     // console.log('DiceBear Data:', data)
        //     setAvatar(data.request.responseURL)
        //     console.log(data.request.responseURL)
        // })
    }

    Promise.all(avatarSelection)
        .then(response => {
            response.forEach(avatar => {
                console.log(avatar)
            })
        })

    // for (let i = 1; i <= 5; i++) {
    //     avatarSelection.push(i);
    // }

    console.log(avatarSelection);

    for (let i = 1; i <= 5; ++i) {
        avatarSelection.push(avatarCall(i));
    }

    // console.log(avatarSelection, 'hello');

    return (
        // avatarSelection.map((individualAvatar) => {
        //     <img src={individualAvatar} alt=""></img>
        // })
        <p>hi</p>
    )

}
export default PlayerAvatars;