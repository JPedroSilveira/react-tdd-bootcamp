import moxios from 'moxios'
import { getSecretWord, correctGuess, actionTypes } from './'

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
        const responseSecretWord = 'party'

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: responseSecretWord
            })
        })
         
        const secretWord = await getSecretWord()
        expect(secretWord).toBe(responseSecretWord)
    })
})