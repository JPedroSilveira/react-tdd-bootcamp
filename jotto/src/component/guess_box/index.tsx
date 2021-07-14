import React from "react"
import GuessForm from '../guess_form'
import Congrats from '../congrats'
import { useSelector } from "react-redux"
import { CombinedReducers } from "../../reducer"

const GuessBox: React.FC = () => {
    const success = useSelector<CombinedReducers>(state => state.success)

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