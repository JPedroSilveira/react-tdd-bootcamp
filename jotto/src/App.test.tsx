import { shallow } from 'enzyme'
import App from './App'
import { findByTestAttribute } from './test/TestUtils'

const setup = () => {
    return shallow(<App guessedWords={[]} secretWord='' />)
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