import { WordProvider } from "./contexts/WordProvider"
import HangmanGame from "./components/HangmanGame"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useEffect, useState } from "react";
import { WordContext } from "./contexts/WordProvider";


function App() {
  const { word } = useContext(WordContext)
  const [isGameReset, setIsGameReset] = useState(false)
  console.log(isGameReset)
  useEffect(() => {
    setIsGameReset(true);
    const timer = setTimeout(() => {
      setIsGameReset(false);
    }, 500);

    return () => clearTimeout(timer)
  }, [word])

  return (
    <>
      <WordProvider>
        <h1 className={`classic-hangman ${isGameReset ? 'animate' : ''}`}>Classic Hangman</h1>
        <HangmanGame />
      </WordProvider> 
    </>
  )
}

export default App
