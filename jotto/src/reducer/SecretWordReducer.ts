import { ActionType, actionTypes } from '../action'

export const secretWord = (state: string = '', action: ActionType): string => {
	switch (action.type) {
		case actionTypes.SECRET_WORD:
			return action.payload
		default:
			return state
	}
}
