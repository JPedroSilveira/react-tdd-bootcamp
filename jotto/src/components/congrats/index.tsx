import React from 'react'

export interface CongratsProps {
    success: boolean
}

const Congrats: React.FC<CongratsProps> = ({
    success
}) => {

    const getMessage = (): String => {
        return success ? "Congratulations, you won!" : ""
    }

    return (
        <div data-test="congrats">
            <p data-test="congrats-message">{getMessage()}</p>
        </div>
    )
}

export default Congrats