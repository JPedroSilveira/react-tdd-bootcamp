import React from "react"
import GuessForm from '../guess_form'
import Congrats from '../congrats'

export interface GuessBoxProps {
    success: boolean
}

const GuessBox: React.FC<GuessBoxProps> = ({
    success
}) => {
    const handleGuessSubmit = (guess: string) => {

    }
    const renderGuessForm = () => {
        return (
            <GuessForm onSubmit={handleGuessSubmit} data-test='guess-box-form' />
        )
    }
    const renderSuccessMessage = () => {
        return (
            <Congrats data-test='guess-box-congrats' />
        )
    }
    return (
        <div data-test='guess-box'>
            { success ? renderSuccessMessage() : renderGuessForm() }
        </div>
    )
}

export default GuessBox