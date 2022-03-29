import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import PlayerAvatars from "./PlayerAvatars";

function Form(props) {

    // declare a use state to hold user category
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [showButton, setShowButton] = useState(false);

    // const [playerInfo, setPlayerInfo] = useState([])
    const [nameArray, setNameArray] = useState([])

    const handleSelections = function (event) {
        setSelectedCategory(event.target.value);
    }


    // a function to handle number of users
    const handleSelectionsNumber = function (event) {
        setSelectedNumber(event.target.value);

        let tempArray = [];

        for (let i = 0; i <= 4; i++) {

            tempArray.push({
                name: `player${i + 1}`,
                pic: ''
            })
        }
        setNameArray(tempArray);
        // to get player avatar and name
        props.playerInfo(nameArray)
        setShowButton(true)

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

        props.playerInfo(nameArray)
        props.showQuestions(questions, selectedNumber)


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
                throw new Error(apiData.statusText)
            }
        })
    }, [selectedCategory, selectedNumber])

    return (
        <div className="gameForm wrapper">
            <h3>how to play</h3>
            <p>Each player will have 30 seconds to answer 3 questions. The player that get the most questions correct wins!</p>
            <form action="" >
                <fieldset>

                    <label htmlFor="numOfPlayer" className='sr-only'>How many players?</label>
                    <select name="numOfPlayer" id="numofPlayer" onChange={handleSelectionsNumber} value={selectedNumber}>
                        <option value="0" defaultValue disabled>How many players?</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>



                    <label htmlFor="categories" className='sr-only' >Pick a category!</label>
                    <select name="categories" id="categories" onChange={handleSelections} value={selectedCategory}>
                        <option value="" defaultValue>Pick a category!</option>
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
                <div className="playerAvatarName">
                    {/* Need to set height/class to avoid button jumping */}

                    { selectedNumber 
                        ? <PlayerAvatars triviaPlayers={[selectedNumber]} nameArray={nameArray} playerAvatarName={playerAvatarName} /> 
                        : null
                }

                    {/* <PlayerAvatars triviaPlayers={[selectedNumber]} nameArray={nameArray} playerAvatarName={playerAvatarName} /> */}
                </div>
                {/*                
                <Link to="/game">
                    <button className="start" onClick={handleClick} >START</button>
                </Link> */}


                {
                    showButton
                        ?
                        <Link to="/game">
                            <button className="start" onClick={handleClick} >START</button>
                        </Link>
                        : null
                }

            </form>



        </div>
    )
}

export default Form