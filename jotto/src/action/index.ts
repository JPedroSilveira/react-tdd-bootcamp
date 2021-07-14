import axios from  'axios'
import { AnyAction } from 'redux'

export interface ActionType {
    name: string
}

export const actionTypes = { 
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD'
}

export const correctGuess = () => {
    return {
        type: actionTypes.CORRECT_GUESS
    }
}

export const guessWord = (guessWord: string): AnyAction => {
    return {
        type: ''
    }
}

export const getSecretWord = async (): Promise<string> => {
    const response = await axios.get('http://localhost:3030')
    return response.data
}