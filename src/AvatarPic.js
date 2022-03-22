function AvatarPic(props) {
    // console.log(props)

    return (
        <div>

            <img 
                src={props.src} 
                alt="robot avatar" 
            />

            <label htmlFor="playerName">Player Name</label>
            <input type="text" name="playerName" id="playerName" />
        </div>
    )
}

export default AvatarPic;