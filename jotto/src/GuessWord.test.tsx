import { mount } from 'enzyme'
import {
	clickEventArgs,
	EnzymeMountWrapper,
	findByTestAttribute,
	inputEventArgs,
	storeFactory,
} from './test/Utils'
import { Provider } from 'react-redux'
import { configureStore } from './reducer/ConfigureStore'
import App from './App'
import { CombinedReducers } from './reducer'

const anySecretWord = 'party'

const setup = (initialState: CombinedReducers): EnzymeMountWrapper => {
	const getStore = () => {
		return storeFactory(initialState)
	}

	return mount(
		<Provider store={getStore()}>
			<App />
		</Provider>,
	)
}

const simulateGuess = (wrapper: EnzymeMountWrapper, guess: string) => {
	const inputBoxElement = findByTestAttribute(wrapper, 'guess-form-word-input')
	inputBoxElement.simulate('change', inputEventArgs(guess))

	const submitButton = findByTestAttribute(wrapper, 'guess-form-submit-button')
	submitButton.simulate('click', clickEventArgs)
}

describe('no words guessed', () => {
	let wrapper: EnzymeMountWrapper
	beforeEach(() => {
		wrapper = setup({
			success: false,
			secretWord: anySecretWord,
			guessedWords: [],
		})
	})

	test('renders without error', () => {
		const guessedWordsRows = findByTestAttribute(
			wrapper,
			'guessed-words-guessed-section-table-item',
		)
		const gameInstructions = findByTestAttribute(
			wrapper,
			'guessed-words-instruction',
		)
		expect(guessedWordsRows).toHaveLength(0)
		expect(gameInstructions).toHaveLength(1)
	})
	test('guess first word', () => {
		const anyGuess = 'guess'

		simulateGuess(wrapper, anyGuess)

		const guessedWordsRows = findByTestAttribute(
			wrapper,
			'guessed-words-guessed-section-table-item',
		)
		const gameInstructions = findByTestAttribute(
			wrapper,
			'guessed-words-instruction',
		)
		expect(guessedWordsRows).toHaveLength(1)
		expect(gameInstructions).toHaveLength(0)
	})
	test('not render congrats', () => {
		const congratsComponent = findByTestAttribute(wrapper, 'congrats')
		expect(congratsComponent.exists()).toBeFalsy()
	})
	test('render guess form', () => {
		const guessFormComponent = findByTestAttribute(wrapper, 'guess-form')
		expect(guessFormComponent.exists()).toBeTruthy()
	})
})

describe('some guesses', () => {
	let wrapper: EnzymeMountWrapper
	beforeEach(() => {
		const anySecretWord = 'secret'
		wrapper = setup({
			success: false,
			secretWord: anySecretWord,
			guessedWords: [],
		})
	})

	test('try one wrong attempt', () => {
		const anyWrongGuess = 'guess'
		simulateGuess(wrapper, anyWrongGuess)

		const guessedWordsRows = findByTestAttribute(
			wrapper,
			'guessed-words-guessed-section-table-item',
		)
		expect(guessedWordsRows).toHaveLength(1)
	})
	test('try three wrong attempts', () => {
		const anyWrongGuess = 'guess'
		simulateGuess(wrapper, anyWrongGuess)
		simulateGuess(wrapper, anyWrongGuess)
		simulateGuess(wrapper, anyWrongGuess)
		const guessedWordsRows = findByTestAttribute(
			wrapper,
			'guessed-words-guessed-section-table-item',
		)
		expect(guessedWordsRows).toHaveLength(3)
	})
})

describe('guess secret word', () => {
	const anySecretWord = 'secret'
	let wrapper: EnzymeMountWrapper
	beforeEach(() => {
		wrapper = setup({
			success: false,
			secretWord: anySecretWord,
			guessedWords: [],
		})
	})

	const expectEndGame = (wrapper: EnzymeMountWrapper) => {
		const congratsComponent = findByTestAttribute(wrapper, 'congrats')
		expect(congratsComponent.exists()).toBeTruthy()
		const guessFormComponent = findByTestAttribute(wrapper, 'guess-form')
		expect(guessFormComponent.exists()).toBeFalsy()
	}

	test('discover secret word on first attempt', () => {
		simulateGuess(wrapper, anySecretWord)
		expectEndGame(wrapper)
	})
	test('discover secret word on second attempt', () => {
		const anyWrongGuess = 'wrong'
		simulateGuess(wrapper, anyWrongGuess)
		simulateGuess(wrapper, anySecretWord)
		expectEndGame(wrapper)
	})
})
