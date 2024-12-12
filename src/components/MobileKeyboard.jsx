import { useState, useEffect, useContext } from 'react'
import { WordContext } from '../contexts/WordProvider';
import { motion } from 'framer-motion';

export default function MobileKeyboard({ userSubmit, gameStatus, hangmanDisplayState, gameReset }) {
    const [usedLetters, setUsedLetters] = useState([]);
    const { word } = useContext(WordContext) // used to empty usedLetters when word state changes

    const alphabetRows = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ];
    
    const handleLetterSelect = (letter) => {
        // prevent selecting already used letters
        if(
            !usedLetters.includes(letter) &&
            !gameStatus &&
            hangmanDisplayState < 10
        ) {
            userSubmit(letter);
            setUsedLetters(prev => [...prev, letter]);
        }
    }

    // Reset used letters when game resets
    useEffect(() => {
        setUsedLetters([]);
    }, [word]);

    if (gameStatus || hangmanDisplayState >= 10) {
        return (
          <div className="mobile-keyboard reset-section">
            <motion.button 
              className='userActionButton' 
              id='gameReset' 
              type="button" 
              onMouseUp={gameReset}
              whileHover={{ scale: 1.1 }}
              style={{ marginTop: "25%" }}
            >
              Have Another Go!
            </motion.button>
          </div>
        )
    }

    return (
      <div
        className="mobile-keyboard"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#f0f0f0",
          padding: "10px",
          boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
        }}
      >
        {alphabetRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "5px",
            }}
          >
            {row.map((letter) => (
              <motion.button
                key={letter}
                onClick={() => handleLetterSelect(letter)}
                disabled={usedLetters.includes(letter)}
                style={{
                  margin: "0 2px",
                  padding: "8px 13px", // 10px 15px
                  backgroundColor: usedLetters.includes(letter)
                    ? "#afff00"
                    : "#ffffff",
                  border: "1px solid #dddddd",
                  borderRadius: "5px",
                  textTransform: "uppercase",
                  color: "black",
                  width: "8%",
                  height: "30%"
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {letter}
              </motion.button>
            ))}
          </div>
        ))}
      </div>
    );
}

