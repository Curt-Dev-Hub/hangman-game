// this component should pick a random word and make it available to necessary components

import { generate } from "random-words";
import { createContext, useState } from "react";

// create context object
export const WordContext = createContext("");

export const WordProvider = ({ children }) => {
    const [word, setWord] = useState(generate)

    const newWord = () => (
        setWord(generate()) 
    ) 

    return (
      <WordContext.Provider value={{ word, newWord }}>{ children }</WordContext.Provider>
    );
}


