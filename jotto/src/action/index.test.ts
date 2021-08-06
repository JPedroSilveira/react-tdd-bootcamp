import { defaultState } from './../test/Utils'
import moxios from 'moxios'
import { storeFactory } from '../test/Utils'
import { correctGuess, actionTypes, secretWordAction } from './'

describe('correctGuess', () => {
	test('return an action with type `CORRECT_GUESS`', () => {
		const action = correctGuess()
		expect(action).toStrictEqual({ type: actionTypes.CORRECT_GUESS })
	})
})

describe('getSecretWord', () => {
	beforeEach(() => {
		moxios.install()
	})
	afterEach(() => {
		moxios.uninstall()
	})
	test('secretWord is returned', async () => {
		const store = storeFactory(defaultState)
		const responseSecretWord = 'party'

		moxios.wait(() => {
			const request = moxios.requests.mostRecent()
			request.respondWith({
				status: 200,
				response: responseSecretWord,
			})
		})

		const action = await secretWordAction()
		await store.dispatch(action as any)
		const currentSecretWord = store.getState().secretWord
		expect(currentSecretWord).toBe(responseSecretWord)
	})
})
