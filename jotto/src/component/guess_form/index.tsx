import { useState } from "react"

export interface GuessFormProps {
    onSubmit: (guess: string) => void
}

const GuessForm: React.FC<GuessFormProps> = ({
    onSubmit
}) => {
    const [currentGuess, setCurrentGuess] = useState('')

    const handleGuessChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentGuess(changeEvent.target.value)
    }

    const handleSubmitClick = (clickEvent: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        clickEvent.preventDefault()
        onSubmit(currentGuess)
        setCurrentGuess('')
    }

    return (
        <form data-test='guess-form'>
            <input
                data-test='guess-form-word-input'
                type='text'
                placeholder='Enter guess'
                value={currentGuess}
                onChange={handleGuessChange}
            />
            <button 
                data-test='guess-form-submit-button'
                onClick={handleSubmitClick}
            >
                Submit 
            </button>
        </form>
    )
}

export default GuessForm