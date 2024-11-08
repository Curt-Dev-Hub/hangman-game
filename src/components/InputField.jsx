/* 
Responsibility:
This component would allow the user to input their guesses. 
It would pass these guesses up to the HangmanGame component, which would update the game state accordingly.

Will also take "gameState" as a prop so we can conditionally disable the input element

*/ 

// Is rendered via the HangmanGame component

/* props:
    userSubmit - which is a function passed in from HangmanGame component which deals with logic after submission of input
    gameStatus - so this component is aware when the game has been won
    hangmanDisplayState - so this component knows when the game has been lost
    gameReset - used for conditional rendering of elements within this component 
*/




import { useState, useRef, useEffect } from 'react';
import '../assets/InputField.css';
import { m as motion } from 'framer-motion'; // use the m alias for motion

export default function InputField({ userSubmit, gameStatus, hangmanDisplayState, gameReset }) {

    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef(null); // create a ref

    // useEffect to bring focus back to input on re-render
    useEffect(() => {
        inputRef.current.focus();
    });

    // handle correct behavior of user input 
    const handleInputChange = (e) => {
        const char = e.target.value;
        if(/[a-zA-Z]/.test(char) || char === "") {
            setInputValue(char);
        }
    }

    const handleKeyPress = (evt) => {
        if(evt.key === 'Enter' && inputValue.trim() !== "") {
            userSubmit(inputValue);
            setInputValue("");
        }
        
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }

    //send value of textInput to userSubmit function in HangmanGame component 
    const handleButtonClick = (evt) => {
        if(inputValue.trim() !== "") {
        userSubmit(inputValue);
        // clear the input field
        setInputValue("");
        }
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }

    return (
        <div className="Input_Wrapper">
            <label htmlFor="textInput">Take Your Guess Here:</label>
            <input disabled={
                gameStatus || hangmanDisplayState >= 10} 
                onKeyDown={handleKeyPress} 
                ref={inputRef} 
                type="text" 
                id="textInput" 
                value={inputValue} 
                onChange={handleInputChange} 
                maxLength={1}
            >
            </input>
            
            {gameStatus === false && hangmanDisplayState < 10 ? 
            // use the motion button as one of the options in the ternary expression
            (inputValue != "" ? 
            // render the animated button
            <motion.button
              className='userActionButton'
              id='charSubmit'
              type="button"
              onKeyDown={handleKeyPress}
              onMouseUp={handleButtonClick}
              
              whileHover={{ scale: 1.1, backgroundColor: "lightgreen" }}
            >
              Submit Character
            </motion.button> :
            // render the regular button
            <button
              className='userActionButton'
              type="button"
              onKeyDown={handleKeyPress}
              onMouseUp={handleButtonClick}
            >
              Submit Character
            </button>) :
            <button className='userActionButton' id='gameReset' type="button" onMouseUp={gameReset}>Have Another Go!</button> }
        </div>
    );
}


