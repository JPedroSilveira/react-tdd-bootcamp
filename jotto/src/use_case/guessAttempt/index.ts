import GuessedWord from '../../type/GuessedWord'

export function matchGuessWithSecret(guessedWord: string, secretWord: string): GuessedWord {
    const secretLetters = secretWord.split('')
    const letters = new Set(guessedWord.split(''))
    const matchLettersCount = secretLetters.filter(letter => letters.has(letter)).length
    return {
        letterMatchCount: matchLettersCount,
        value: guessedWord
    }
}