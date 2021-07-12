import React from "react"

const Input: React.FC = () => {
    const [currentGuess, setCurrentGuess] = React.useState("")

    const handleGuessChange = (changeEvent: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentGuess(changeEvent.target.value)
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
                >
                    Submit 
                </button>
            </form>
        </div>
    )
}

export default Input