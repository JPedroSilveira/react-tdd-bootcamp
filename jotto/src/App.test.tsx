import { mount } from 'enzyme'
import App from './App'
import { defaultState, findByTestAttribute, storeFactory } from './test/Utils'
import { Provider } from 'react-redux'
import { CombinedReducers } from './reducer'

jest.mock('./action')

import { secretWordAction } from './action'

const mockSecretWord = secretWordAction as jest.MockedFunction<any>

const unsuccessState: CombinedReducers = {
	...defaultState,
	success: false,
}

const setup = (initialState: CombinedReducers) => {
	const store = storeFactory(initialState)
	return mount(
		<Provider store={store}>
			<App />
		</Provider>,
	)
}

test('renders without error', () => {
	const wrapper = setup(unsuccessState)
	const mainElement = findByTestAttribute(wrapper, 'app')
	expect(mainElement.exists()).toBeTruthy()
})

test('renders title', () => {
	const wrapper = setup(unsuccessState)
	const titleElement = findByTestAttribute(wrapper, 'app-title')
	expect(titleElement.text().length).not.toBe(0)
})

test('renders guess-box', () => {
	const wrapper = setup(unsuccessState)
	const guessBoxComponent = findByTestAttribute(wrapper, 'app-guess-box')
	expect(guessBoxComponent.exists()).toBeTruthy()
})

test('renders guessed words', () => {
	const wrapper = setup(unsuccessState)
	const guessedWordsComponent = findByTestAttribute(
		wrapper,
		'app-guessed-words',
	)
	expect(guessedWordsComponent.exists()).toBeTruthy()
})

describe('get secret word', () => {
	beforeEach(() => {
		mockSecretWord.mockClear()
	})
	test('get secret word on app mount', async () => {
		setup(unsuccessState)
		expect(mockSecretWord).toHaveBeenCalledTimes(1)
	})
	test('get secret world is not retrieved on app update', () => {
		const wrapper = setup(unsuccessState)
		mockSecretWord.mockClear()
		wrapper.setProps('')
		expect(mockSecretWord).toHaveBeenCalledTimes(0)
	})
})
