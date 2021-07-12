import { matchGuessWithSecret } from "."

describe('matchGuessWithSecret', () => {
    const secretWord = 'party'
    test('returns correct count when there are no match letters', () => {
        const guessedWord = matchGuessWithSecret('bones', secretWord)
        expect(guessedWord.letterMatchCount).toBe(0) 
    })
    test('returns corrent count when there are three matching letters', () => {
        const guessedWord = matchGuessWithSecret('train', secretWord)
        expect(guessedWord.letterMatchCount).toBe(3) 
    })
    test('return the correct count when there are repeated match letters', () => {
        const guessedWord = matchGuessWithSecret('threatment', secretWord)
        expect(guessedWord.letterMatchCount).toBe(3) 
    })
})