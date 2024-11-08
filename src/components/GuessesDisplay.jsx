/*
props: "characters" an array of wrongly guessed characters inputted by user from HangmanGame component

Responsibility:
This component needs to display the letters that the user has already guessed which were incorrect.
Should expect an array which it will then map through in order to display in the UI

*/

import '../assets/GuessesDisplay.css';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React from 'react';


function GuessesDisplay( { characters } ) { 

    return (
        <div className='guessesDisplay'>
            <h4 style={{fontSize: "2rem"}}>Your Incorrect Guesses Will Appear Here:</h4>
            <TransitionGroup component={null}>
            {characters.map(char => {
                return ( 
                <CSSTransition key={uuidv4()} timeout={500} classNames="pop">
                    <span className='wrongGuesses' key={ uuidv4() }> { char } </span>
                </CSSTransition>
                )
            })}
            </TransitionGroup>
        </div>
    )
}

export default React.memo(GuessesDisplay);