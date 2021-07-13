import { mount } from 'enzyme'
import App from './App'
import { findByTestAttribute } from './test/TestUtils'

jest.mock('./action')
import { getSecretWord } from './action'
const mockGetSecretWord = getSecretWord as jest.MockedFunction<() => Promise<string>>

const setup = () => {
    return mount(<App guessedWords={[]} secretWord='' />)
}

test('renders without error', () => {
  const wrapper = setup()
  const mainElement = findByTestAttribute(wrapper, 'app')
  expect(mainElement.exists()).toBeTruthy()
});

test('renders title', () => {
    const wrapper = setup()
    const titleElement = findByTestAttribute(wrapper, 'app-title')
    expect(titleElement.text().length).not.toBe(0)
});

test('renders guess-box', () => {
    const wrapper = setup()
    const guessBoxComponent = findByTestAttribute(wrapper, 'app-guess-box')
    expect(guessBoxComponent.exists()).toBeTruthy()
})

test('renders guessed words', () => {
    const wrapper = setup()
    const guessedWordsComponent = findByTestAttribute(wrapper, 'app-guessed-words')
    expect(guessedWordsComponent.exists()).toBeTruthy()
})

describe('get secret word', () => {
    beforeEach(() => {
        mockGetSecretWord.mockClear()
    })
    test('get secret word on app mount', async () => {
        setup()
        expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
    })
    test('get secret world is not retrieved on app update', () => {
        const wrapper = setup()
        mockGetSecretWord.mockClear()
        wrapper.setProps('')
        expect(mockGetSecretWord).toHaveBeenCalledTimes(0)
    })
})