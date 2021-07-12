import { useState } from "react"

export interface InputProps {
    onSubmit: (guess: string) => void
}

const Input: React.FC<InputProps> = () => {
    const [currentGuess, setCurrentGuess] = useState('')

    const handleGuessChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentGuess(changeEvent.target.value)
    }

    const handleSubmitClick = (clickEvent: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        clickEvent.preventDefault()
        setCurrentGuess('')
    }

    return (
        <div data-test='input'>
            <form data-test='input-form'>
                <input
                    data-test='input-form-word-input'
                    type='text'
                    placeholder='Enter guess'
                    value={currentGuess}
                    onChange={handleGuessChange}
                />
                <button 
                    data-test='input-form-submit-button'
                    onClick={handleSubmitClick}
                >
                    Submit 
                </button>
            </form>
        </div>
    )
}

export default Input