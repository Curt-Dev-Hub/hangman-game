/* 
UI Presentational component

Responsibility: This component would display the word or phrase that the user is trying to guess. 
It would receive the "word" from the WordSelector component and the correctly guessed letters from the HangmanGame and WordProvider components, 
and update its display accordingly. 

props: takes a chosen "word" from the WordSelector component in form of a string

state: none

*/

import '../assets/WordDisplay.css';

export default function WordDisplay( { correctGuesses, word }) {
    // const { word } = useContext(WordContext)
    // begin rendering UI elements once a word has been received from WordProvider via the WordSelector component
    if(word) {
        const chosenWord = word.split("")
        console.log(chosenWord)
        // display "-" characters on UI if guessedLetters array is empty
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
                            // If it is, display the letter
                            return <span className="displayLetter" key={idx}>{el.toUpperCase()}</span>
                        } else {
                            // If not, display a "-"
                            return <span className="displayLetter" key={idx}> - </span>
                        }
                    })}
                    </div>
                </div>
            );
        }
    }
}
