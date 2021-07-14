import { mount } from 'enzyme'
import App from './App'
import { findByTestAttribute, storeFactory } from './test/TestUtils'

jest.mock('./action')
import { getSecretWord } from './action'
import { Provider } from 'react-redux'
import { CombinedReducers } from './reducer'

const mockGetSecretWord = getSecretWord as jest.MockedFunction<() => Promise<string>>

const unsuccessState: CombinedReducers = {
    success: false
}

const successState: CombinedReducers = {
    success: true
}

const setup = (initialState: CombinedReducers) => {
    const store = storeFactory(initialState)
    return mount(
        <Provider store={store}>
            <App guessedWords={[]} secretWord='' />
        </Provider>
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
    const guessedWordsComponent = findByTestAttribute(wrapper, 'app-guessed-words')
    expect(guessedWordsComponent.exists()).toBeTruthy()
})

describe('get secret word', () => {
    beforeEach(() => {
        mockGetSecretWord.mockClear()
    })
    test('get secret word on app mount', async () => {
        setup(unsuccessState)
        expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
    })
    test('get secret world is not retrieved on app update', () => {
        const wrapper = setup(unsuccessState)
        mockGetSecretWord.mockClear()
        wrapper.setProps('')
        expect(mockGetSecretWord).toHaveBeenCalledTimes(0)
    })
})