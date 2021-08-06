import { defaultState, storeFactory } from './test/Utils'
import { guessWordAction } from './action'
import { CombinedReducers } from './reducer'
import { AnyAction, EmptyObject, Store } from 'redux'
import GuessedWord from './type/GuessedWord'

describe('guessWord action dispatcher', () => {
	const secretWord = 'party'
	const unseccessfulGuess = 'train'

	describe('no guessed words', () => {
		let store: Store<EmptyObject & CombinedReducers, AnyAction>
		const initialState: CombinedReducers = {
			...defaultState,
			secretWord: secretWord,
		}

		beforeEach(() => {
			store = storeFactory(initialState)
		})

		test('updates state correctly for unsuccessful guess', () => {
			store.dispatch(guessWordAction(unseccessfulGuess))
			const expectedState: CombinedReducers = {
				...initialState,
				guessedWords: [
					{
						value: unseccessfulGuess,
						letterMatchCount: 3,
					},
				],
			}

			const newState = store.getState()

			expect(newState).toEqual(expectedState)
		})

		test('updates state correctly for successful guess', () => {
			store.dispatch(guessWordAction(secretWord))
			const expectedState: CombinedReducers = {
				...initialState,
				guessedWords: [
					{
						value: secretWord,
						letterMatchCount: 5,
					},
				],
				success: true,
			}

			const newState = store.getState()
			expect(newState).toEqual(expectedState)
		})
	})

	describe('some guesed words', () => {
		let store: Store<EmptyObject & CombinedReducers, AnyAction>
		const initialGuessedWords: GuessedWord[] = [
			{
				value: 'agile',
				letterMatchCount: 1,
			},
		]
		const initialState: CombinedReducers = {
			...defaultState,
			secretWord: secretWord,
			guessedWords: initialGuessedWords,
		}

		beforeEach(() => {
			store = storeFactory(initialState)
		})

		test('updates state correctly for unsuccessful guess', () => {
			store.dispatch(guessWordAction(unseccessfulGuess))
			const expectedState: CombinedReducers = {
				...initialState,
				guessedWords: [
					...initialGuessedWords,
					{
						value: unseccessfulGuess,
						letterMatchCount: 3,
					},
				],
			}

			const newState = store.getState()

			expect(newState).toEqual(expectedState)
		})
		test('updates state correctly for successful guess', () => {
			store.dispatch(guessWordAction(secretWord))
			const expectedState: CombinedReducers = {
				...initialState,
				guessedWords: [
					...initialGuessedWords,
					{
						value: secretWord,
						letterMatchCount: 5,
					},
				],
				success: true,
			}

			const newState = store.getState()

			expect(newState).toEqual(expectedState)
		})
	})
})
