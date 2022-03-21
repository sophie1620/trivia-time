
function Form() {


    return(
        <form action="">
            <fieldset>
                <label htmlFor="numOfPlayer">Number of Players</label>
                <select name="numOfPlayer" id="numofPlayer">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <label htmlFor="categories">Choose the trivia category!</label>
                <select name="categories" id="categories">
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

        </form>  
    )
}

export default Form