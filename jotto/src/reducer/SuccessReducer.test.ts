import { actionTypes } from "../action"
import { successReducer } from './SuccessReducer'

test('when previous state is undefined, return false', () => {
    const newState = successReducer(undefined, { name: 'unknown'})
    expect(newState).toBe(false)
})

test('return previous state then unknown action type', () => {
    const newState = successReducer(false, { name: 'unknown' })
    expect(newState).toBe(false)
})

test('return `true`for action type CORRECT_GUESS', () => {
    const newState = successReducer(false, { name: actionTypes.CORRECT_GUESS})
    expect(newState).toBe(true)
})