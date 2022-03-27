import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import PlayerAvatars from "./PlayerAvatars";

function Form(props) {

    // declare a use state to hold user category
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [questions, setQuestions] = useState([])

    // const [playerInfo, setPlayerInfo] = useState([])
    const [nameArray, setNameArray] = useState([])

    const handleSelections = function (event) {
        setSelectedCategory(event.target.value);
    }

    // a function to handle number of users
    const handleSelectionsNumber = function (event) {
        setSelectedNumber(event.target.value);

        let tempArray = [];
        for (let i = 0; i < event.target.value; i++) {
            tempArray.push({
                name: `player${i + 1}`,
                pic: ''
            })
        }
        setNameArray(tempArray);

        // to get player avatar and name
        // props.playerInfo(nameArray)
    }

    const playerAvatarName = function (userObject, arrayIndex) {
        // console.log(userObject, arrayIndex);
        // userObject will hold the name and URL link
        // arrayIndex is to help identify which location within the array the object belongs to


        const tempArray = [...nameArray]

        tempArray[arrayIndex] = userObject
        // array with the index (which we got from the child) will be updated withe userObject  


        setNameArray(tempArray)
        // setting nameArray with the updated information
    }

    const handleClick = function () {
        props.showQuestions(questions, selectedNumber)
        props.playerInfo(nameArray)

    }

    useEffect(() => {
        axios({
            url: 'https://opentdb.com/api.php/',
            params: {
                category: selectedCategory,
                amount: (selectedNumber * 3),
                type: "multiple"

            }
        }).then((apiData) => {
            // console.log('Trivia Data', apiData.data.results);
            if (apiData.status === 200 || apiData.statusText == 'OK') {
                setQuestions(apiData.data.results)
            } else {
                alert("Oops!  It seems like we're having some technical difficulties.  Please play Trivia Time at a later time.  Thank you for understanding.")
            }
        })
    }, [selectedCategory, selectedNumber])

    return (
        <div className="gameForm">
            <h3>how to play</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet culpa voluptas odio atque aperiam plac perspiciatis iusto, fugiat aut ut labore? Nisi quas velit quasi.</p>
            <form action="">
                <fieldset>

                  

                    <label htmlFor="numOfPlayer">Number of Players</label>
                    <select name="numOfPlayer" id="numofPlayer" onChange={handleSelectionsNumber} value={selectedNumber}>
                        <option value="0">How many players?</option>

                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <label htmlFor="categories" className='sr-only'>Pick a category!</label>
                    <select name="categories" id="categories" onChange={handleSelections}>
                        <option value="placeholder" disabled selected>Pick a category!</option>
                        <option value="9">General</option>
                        <option value="10">Books</option>
                        <option value="11">Film</option>
                        <option value="13">Musicals and Theatre</option>
                        <option value="15">Video Games</option>
                        <option value="16">Board Games</option>
                        <option value="17">Science and Nature</option>
                        <option value="20">Mythology</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                    </select>
                </fieldset>
                <div className="">
                    {/* Need to set height/class to avoid button jumping */}
                    <PlayerAvatars triviaPlayers={[selectedNumber]} nameArray={nameArray} playerAvatarName={playerAvatarName} />
                </div>
                {/* <Link to={{
                    pathname: '/game',
                    state: { currentQuestions: questions }
                }}
                /> */}

                {/* <button id='submit' >Submit</button> */}
                <Link to="/game">
                    <button className="start" onClick={handleClick}>START</button>
                </Link>
                {/* <button>submit</button> */}

            </form>



        </div>
    )
}

export default Form