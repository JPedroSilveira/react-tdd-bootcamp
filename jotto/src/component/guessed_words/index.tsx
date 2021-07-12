import React from 'react'
import GuessedWord from '../../type/GuessedWord'
import './styles.css'

export interface GuessedWordsProps {
    words: GuessedWord[]
}

const GuessedWords: React.FC<GuessedWordsProps> = ({
    words
}) => {
    const renderInstruction = () => {
        return (
            <h3 data-test='guessed-words-instruction'>
                Try to guesse the secret word!
            </h3>
        )
    }
    const renderGuessedSection = () => {
        return (
            <div data-test='guessed-words-guessed-section'>
                <h3>Guessed Words</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Guess</th>
                            <th>Matching Letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderGuessedWordsRows()}
                    </tbody>
                </table>
            </div>
        )
    }
    const renderGuessedWordsRows = () => {
        return (
            words.map((word, index) => (
                <tr key={index} data-test='guessed-words-guessed-section-table-item'>
                    <td>{word.value}</td>
                    <td>{word.letterMatchCount}</td>
                </tr>
            ))
        )
    }
    
    return (
        <div className='guessed-words' data-test='guessed-words'>
            {words.length > 0 ? renderGuessedSection() : renderInstruction()}
        </div>
    )
}

export default GuessedWords