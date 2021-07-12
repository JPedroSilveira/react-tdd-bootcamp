import React from 'react'
import GuessedWord from '../../type/GuessedWord'

export interface GuessedWordsProps {
    words: GuessedWord[]
}

const GuessedWords: React.FC<GuessedWordsProps> = ({
    words
}) => {
    const renderInstruction = () => {
        return (
            <p data-test='guessed-words-instruction'>
                Try to guesse the secret word!
            </p>
        )
    }
    const renderGuessedTable = () => {
        return (
            <div></div>
        )
    }
    return (
        <div data-test='guessed-words'>
            {words.length > 0 ? renderGuessedTable() : renderInstruction()}
        </div>
    )
}

export default GuessedWords