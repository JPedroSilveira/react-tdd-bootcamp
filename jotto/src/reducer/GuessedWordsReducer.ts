import { ActionType, actionTypes } from "../action"
import GuessedWord from "../type/GuessedWord"

export const guessedWords = (state: GuessedWord[]=[], action: ActionType): GuessedWord[] => {
    switch (action.type) {
        case actionTypes.GUESS_WORD:
          return [...state, action.payload]
        default:
          return state
    }
}