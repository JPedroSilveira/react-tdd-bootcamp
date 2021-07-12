import { isSecretWordDiscovered } from '.'

const mockGuessedWord = (word: string) => ({
    letterMatchCount: 0,
    value: word
})

describe('isSecretWordDiscovered', () => {
    const secretWord = 'party'
    test('returns false when all guesses are wrong', () => {
        const isDiscovered = isSecretWordDiscovered([
            mockGuessedWord('train'),
        ], secretWord)
        expect(isDiscovered).toBeFalsy()
    })
    test('returns false with three wrond guesses', () => {
        const isDiscovered = isSecretWordDiscovered([
            mockGuessedWord('train'),
            mockGuessedWord('test'),
            mockGuessedWord('parties'),
        ], secretWord)
        expect(isDiscovered).toBeFalsy()
    })
    test('return true when discovered', () => {
        const isDiscovered = isSecretWordDiscovered([
            mockGuessedWord('train'),
            mockGuessedWord('test'),
            mockGuessedWord('party'),
        ], secretWord)
        expect(isDiscovered).toBeTruthy()
    })
})