import CategoryCall from "./CategoryCall"
import { useState, useEffect } from "react";
import axios from "axios";

function Form(props) {

    // declare a use state to hold user category
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedNumber, setSelectedNumber] = useState(1);
    const [questions, setQuestions] = useState([])

    const handleSelections = function (event) {
        setSelectedCategory(event.target.value);
    
        
    }
    const handleSelectionsNumber = function (event) {
        setSelectedNumber(event.target.value);

    }
    console.log(selectedCategory);
    console.log(selectedNumber)

    const handleSubmit = function (event) {
        props.showQuestions(event, questions)
        console.log('form submitted');
        
    }
    console.log(questions);

useEffect( () => {
    axios({
        url:  'https://opentdb.com/api.php/', 
        params: {
        category: selectedCategory,
        amount: (selectedNumber * 3)

      }
    }).then( (apiData) => {
      console.log('Trivia Data', apiData.data.results);
        setQuestions(apiData.data.results)
    })
  }, [selectedCategory, selectedNumber])

    return(
        <form action="" onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="numOfPlayer">Number of Players</label>
                <select name="numOfPlayer" id="numofPlayer" onChange={handleSelectionsNumber}>
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
            <button id='submit'>Submit</button>
        </form>  
    )
}

export default Form