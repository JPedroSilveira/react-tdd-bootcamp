import { actionTypes } from './../index'
module.exports = {
	...jest.requireActual('..'),
	__esModule: true,
	secretWord: jest.fn().mockReturnValue(
		Promise.resolve({
			type: actionTypes.SECRET_WORD,
			secretWord: 'party',
		}),
	),
}
export default undefined
