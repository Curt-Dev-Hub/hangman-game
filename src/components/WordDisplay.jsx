/* 
UI Presentational component

Responsibility: This component would display the word or phrase that the user is trying to guess. 
It would receive the "word" from the WordSelector component and the correctly guessed letters from the HangmanGame and WordProvider components, 
and update its display accordingly. 

props: takes a chosen "word" from the WordSelector component in form of a string

*/

import '../assets/WordDisplay.css';

export default function WordDisplay( { correctGuesses, word }) {

    if(word) {
        const chosenWord = word.split("")
        
        if(correctGuesses.length < 1) {
            return (
                <div className="wordDisplay">
                    <div className='headingContainer'><h3 style={{fontSize: "2rem"}}>Your Mystery Word:</h3></div>
                    <div className='wordContainer'>
                    {chosenWord.map((el, idx) => {
                        return <span className="displayLetter" key={idx}>-</span>
                    })}
                    </div>
                </div>
            );
        }


        // if guessedLetters is not empty then we need iterate through chosenWord and then show letters from word that match ones from the guessedLetters array
        else if(correctGuesses.length > 0) {
            return (
                <div className="wordDisplay">
                    <div className='headingContainer' ><h3 style={{fontSize: "2rem"}}>Your Mystery Word:</h3></div>
                    <div className='wordContainer'>
                    {chosenWord.map((el, idx) => {
                        // Check letter is in guessedLetters
                        if (correctGuesses.includes(el.toLowerCase())) {
                            return <span className="displayLetter" key={idx}>{el.toUpperCase()}</span>
                        } else {
                            return <span className="displayLetter" key={idx}> - </span>
                        }
                    })}
                    </div>
                </div>
            );
        }
    }
}
