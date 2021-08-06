import { combineReducers } from 'redux'
import { success } from './SuccessReducer'
import { guessedWords } from './GuessedWordsReducer'
import { secretWord } from './SecretWordReducer'
import GuessedWord from '../type/GuessedWord'

export interface CombinedReducers {
	success: boolean
	guessedWords: GuessedWord[]
	secretWord: string
}

export default combineReducers<CombinedReducers>({
	success,
	guessedWords,
	secretWord,
})
