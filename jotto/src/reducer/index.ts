import { combineReducers } from "redux"
import { success } from './SuccessReducer'
import { guessedWord } from './GuessedWordReducer'
import { guessedWords } from './GuessedWordsReducer'
import { secretWord } from './SecretWordReducer'
import GuessedWord from "../type/GuessedWord"

export interface CombinedReducers {
    success: boolean
    guessedWord: string
    guessedWords: GuessedWord[]
    secretWord: string
}

export default combineReducers<CombinedReducers>({
    success,
    guessedWord,
    guessedWords,
    secretWord
})