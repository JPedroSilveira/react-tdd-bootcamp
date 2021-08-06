import axios from 'axios'
import { Action, Dispatch, EmptyObject } from 'redux'
import { CombinedReducers } from '../reducer'
import { matchGuessWithSecret } from '../use_case/guessAttempt'

export interface ActionType extends Action<string> {
	payload?: any
}

export const actionTypes = {
	CORRECT_GUESS: 'CORRECT_GUESS',
	GUESS_WORD: 'GUESS_WORD',
	SECRET_WORD: 'SECRET_WORD',
}

export const correctGuess = () => {
	return {
		type: actionTypes.CORRECT_GUESS,
	}
}

export const guessWordAction = (word: string): any => {
	return function (
		dispatch: Dispatch<ActionType>,
		getState: () => EmptyObject & CombinedReducers,
	) {
		const secretWord = getState().secretWord
		const guessWord = matchGuessWithSecret(word, secretWord)

		dispatch({
			type: actionTypes.GUESS_WORD,
			payload: guessWord,
		})

		if (word === secretWord) {
			dispatch({
				type: actionTypes.CORRECT_GUESS,
			})
		}
	}
}

export const secretWordAction = async (): Promise<any> => {
	const response = await axios.get('http://localhost:3030')

	return function (
		dispatch: Dispatch<ActionType>,
		getState: () => EmptyObject & CombinedReducers,
	) {
		dispatch({
			type: actionTypes.SECRET_WORD,
			payload: response.data,
		})
	}
}
