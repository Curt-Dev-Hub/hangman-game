
/* 

props: currentState 
state: n/a

Presentational Component

Responsibility: To render the correct Hangman image to the UI according to current 
state of the game. State is passed down from HangmanGame component

*/

import '../assets/HangmanDisplay.css';

import state2 from '/hangman-state-images/state2.jpg';
import state1 from '/hangman-state-images/state1.jpg';
import state3 from '/hangman-state-images/state3.jpg';
import state4 from '/hangman-state-images/state4.jpg';
import state5 from '/hangman-state-images/state5.jpg';
import state6 from '/hangman-state-images/state6.jpg';
import state7 from '/hangman-state-images/state7.jpg';
import state8 from '/hangman-state-images/state8.jpg';
import state9 from '/hangman-state-images/state9.jpg';
import state10 from '/hangman-state-images/state10.jpg';
import state11 from '/hangman-state-images/state11.jpg';

const stateImages = [state1, state2, state3, state4,
    state5, state6, state7, state8, state9, state10, state11
]

export default function HangmanDisplay({ currentState }) {

    return (
            <img className="hangmanImage" src={ stateImages[currentState]}></img>
    )
}