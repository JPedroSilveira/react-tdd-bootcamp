import './App.css';
import GuessBox from './component/guess_box'
import GuessedWords from './component/guessed_words'
import GuessedWord from './type/GuessedWord'
import { isSecretWordDiscovered } from './use_case/secretWordDiscover' 
import { useEffect } from 'react'
import { getSecretWord } from './action'

export interface AppProps {
  secretWord: string,
  guessedWords: GuessedWord[]
}

const App: React.FC<AppProps> = ({
  secretWord,
  guessedWords
}) => {
  useEffect(() => {
    const load = async () => {
      await getSecretWord()
    }
    load()
  }, [])

  return (
    <div className='app' data-test='app'>
      <h1 data-test="app-title">Jotto</h1>
      <GuessBox data-test='app-guess-box'/>
      <GuessedWords words={guessedWords} data-test='app-guessed-words'/>
    </div>
  );
}

export default App;

