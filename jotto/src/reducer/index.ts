import { combineReducers } from "redux"
import { success } from './SuccessReducer'

export interface CombinedReducers {
    success: boolean
}

export default combineReducers<CombinedReducers>({
    success
})