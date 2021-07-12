import GuessedWord from '../../type/GuessedWord'

export function isSecretWordDiscovered(guessedWords: GuessedWord[], secretWord: string): boolean {
    return guessedWords.some(word => word.value.toLowerCase() === secretWord.toLowerCase())
}