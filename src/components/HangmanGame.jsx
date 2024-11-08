// Most game logic is to be handled in this component

import '../assets/HangmanGame.css'
import { useContext, useEffect, useState } from "react";
import { WordContext } from "../contexts/WordProvider";
import WordDisplay from "./WordDisplay";
import HangmanDisplay from "./HangmanDisplay";
import GuessesDisplay from "./GuessesDisplay";
import InputField from "./InputField";
import GameOver from "./GameOver";
import { Col, Container, Row } from 'react-bootstrap';

export default function HangmanGame() {
    //! WILL IMPLEMENT THIS AT A LATER DATE 
   // const element = document.getElementById('gameOverMsg') // for scroll effect on game completion
    
    //
    // const scrollEffect = (el) => {
    //     el?.scrollIntoView({
    //         behavior: 'smooth'
    //     });
    // } 


    const { word, newWord } = useContext(WordContext)
    
    // Keep track of correctly guessed letters 
    const [correctGuesses, setCorrectGuesses] = useState([])

    // Keep track of the (**NUMBER**) of incorrect guesses
    const [wrongGuessCount, setWrongGuessCount] = useState(0)

    const [incorrectGuesses, setIncorrectGuesses] = useState([]);

    // state to determine when user has ultimately won the game 
    const [gameComplete, setGameComplete] = useState(false);


    // function to handle user inputted value, this function is passed to and called in the InputField component 
    function userSubmit(input) {
        const lowerInput = input.toLowerCase();
        const lowerWord = word.split("")

        // update state of incorrect guesses if user input is not found in "word" variable 
        if(!lowerWord.includes(lowerInput)) {
            setIncorrectGuesses((oldGuesses) => [...oldGuesses, lowerInput]);
            setWrongGuessCount(prevState => prevState +1);
        } else {
            setCorrectGuesses(oldValues => [...oldValues, lowerInput]);
        }
    }

    // check if game won
    useEffect(() => {
        const wordToGuess = word.split("")
        const uniqueLetters = [...new Set(wordToGuess)]
        if(uniqueLetters.every(letter => correctGuesses.includes(letter)))
            setGameComplete(true);
    }, [correctGuesses, word])

    // useEffect(() => {
    //     if(wrongGuessCount === 10) {
    //         scrollEffect(element)
    //     }
    // }, [wrongGuessCount])

    function resetGame() {
        setWrongGuessCount(0);
        setIncorrectGuesses([]);
        setGameComplete(false);
        setCorrectGuesses([]);
        newWord();
    }


    return (
        <Container fluid>
            <HangmanDisplay currentState={ wrongGuessCount } />
            <Row id='dualCol-flex'>
                <Col>
                    <InputField userSubmit = { userSubmit } gameStatus={ gameComplete } hangmanDisplayState={wrongGuessCount} gameReset={resetGame}/>
                </Col>
                <Col className='mx-auto'>
                    <GuessesDisplay characters={ incorrectGuesses }/>
                </Col>
            </Row>
            <Row style={{marginTop: "20px"}}> 
                <Col>
                    <WordDisplay correctGuesses={ correctGuesses } word={ word } />
                </Col>
            </Row>
            <Row>  
                <Col>        
                    { wrongGuessCount == 10 || gameComplete ? <GameOver gameStatus={ gameComplete } winningWord={ word }/> : null }
                </Col>
            </Row>
        </Container>    
    );
}
 