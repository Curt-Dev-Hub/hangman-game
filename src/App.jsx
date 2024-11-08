import { WordProvider } from "./contexts/WordProvider"
import HangmanGame from "./components/HangmanGame"

function App() {
  return (
    <>
      <WordProvider>
        <h1>Classic Hangman</h1>
        <HangmanGame />
      </WordProvider> 
    </>
  )
}

export default App
