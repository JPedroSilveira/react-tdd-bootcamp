import axios from  'axios'

export interface ActionType {
    name: string
}

export const actionTypes = { 
    CORRECT_GUESS: 'CORRECT_GUESS',
}

export const correctGuess = () => {
    return {
        type: actionTypes.CORRECT_GUESS
    }
}

export const getSecretWord = async (): Promise<string> => {
    const response = await axios.get('http://localhost:3030')
    return response.data
}