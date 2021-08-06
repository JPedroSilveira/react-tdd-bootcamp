import { ActionType, actionTypes } from '../action'

export const success = (state=false, action: ActionType): boolean => {
    switch(action.type) {
        case (actionTypes.CORRECT_GUESS):
            return true
        default:
            return state
    }
}