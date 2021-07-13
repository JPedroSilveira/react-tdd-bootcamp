import moxios from 'moxios'
import { getSecretWord } from './'

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