import CategoryCall from "./CategoryCall"
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

    const handleSelections = function(event) {
        setSelectedCategory(event.target.value);
    }

    // a function to handle number of users
    const handleSelectionsNumber = function(event) {
        setSelectedNumber(event.target.value);
        
        let tempArray = [];
        for (let i = 0; i < event.target.value; i++ ) {
            tempArray.push({
                name: `player${i+1}`,
                pic:''
            })
        }
        setNameArray(tempArray);
    
        // to get player avatar and name
        // props.playerInfo(nameArray)
    }

    const playerAvatarName = function(userObject, arrayIndex) {
        // console.log(userObject, arrayIndex);
        // userObject will hold the name and URL link
        // arrayIndex is to help identify which location within the array the object belongs to

        const tempArray = [...nameArray]

        tempArray[arrayIndex] = userObject
        // array with the index (which we got from the child) will be updated withe userObject  

        setNameArray(tempArray)
        // setting nameArray with the updated information
    }

    const handleClick = function(event) {
        props.showQuestions(event, questions)
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
            setQuestions(apiData.data.results)
        })
    }, [selectedCategory, selectedNumber])

    return (
        <div className="">

            <form action="">
                <fieldset>
                    <label htmlFor="numOfPlayer">Number of Players</label>
                    <select name="numOfPlayer" id="numofPlayer" onChange={handleSelectionsNumber}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    <label htmlFor="categories">Choose the trivia category!</label>
                    <select name="categories" id="categories" onChange={handleSelections}>
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
                    <PlayerAvatars triviaPlayers={[selectedNumber]} nameArray={nameArray} playerAvatarName={playerAvatarName}/>
                </div>
                {/* <Link to={{
                    pathname: '/game',
                    state: { currentQuestions: questions }
                }}
                /> */}

                {/* <button id='submit' >Submit</button> */}
                <Link to="/game">
                    <button onClick={handleClick}>Play</button>
                </Link>

            </form>



        </div>
    )
}

export default Form