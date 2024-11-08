/* 

Presentational Component

Props: "winningWord" - a string containing the mystery word "gameStatus" - a boolean to know whether the game has been won or lost

Needs to receive game status information from the HangmanGame component

Responsibility:
This component would display a message when the game is over, 
either congratulating the user for winning or informing them that they have lost.

*/



import '../assets/GameOver.css';

function GameOver({ gameStatus, winningWord }) {
  const msg = ["Congratulations! You Found the Word!",
  "Oh No! The noose found Hangman's Neck! "];
      
  return (
      <div className="GameOver">
          <h5 id='gameOverMsg'>{ gameStatus ? `${msg[0]}`  : (
            <>
              {`${msg[1]} \n The word was `}
              <span className='winningWord'>{winningWord.charAt(0).toUpperCase() + winningWord.slice(1)}</span>
              {" Go on and have another try"}
            </>
          )}</h5>
      </div>
  );
}

export default GameOver;