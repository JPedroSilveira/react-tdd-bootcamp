import { mount } from 'enzyme'
import { clickEventArgs, EnzymeMountWrapper, findByTestAttribute, inputEventArgs } from './test/TestUtils'
import { Provider } from 'react-redux'
import { configureStore } from './reducer/ConfigureStore'
import App, { AppProps } from './App'

const setupWithoutGuess = (props: AppProps): EnzymeMountWrapper => {
    const wrapper = mount(
        <Provider store={configureStore}>
            <App {...props} />
        </Provider>
    )

    return wrapper
}

const setupWithOneGuess = (props: AppProps, guess: string): EnzymeMountWrapper => {
    const wrapper = mount(<App {...props} />)

    const inputBoxElement = findByTestAttribute(wrapper, 'guess-form-word-input')
    inputBoxElement.simulate('change', inputEventArgs(guess))

    const submitButton = findByTestAttribute(wrapper, 'guess-form-submit-button')
    submitButton.simulate('click', clickEventArgs)

    return wrapper
}

describe('no words guessed', () => {
    let wrapper: EnzymeMountWrapper
    beforeEach(() => {
        wrapper = setupWithoutGuess({
            secretWord: 'party',
            guessedWords: []
        })
    })

    test('renders without error', () => {
        const guessedWordsRows = findByTestAttribute(wrapper, 'guessed-words-guessed-section-table-item')
        expect(guessedWordsRows).toHaveLength(0)
    })
    test('guess first word', () => {
        throw 'not implemented'
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

describe('some words guessed', () => {
    test('try one wrong attempt', () => {
        throw 'not implemented'
    })
    test('try three wrong attempts', () => {
        throw 'not implemented'
    })
})

describe('guess secret word', () => {
    test('discover secret word on first attempt', () => {
        throw 'not implemented'
    })
    test('discover secret word on second attempt', () => {
        throw 'not implemented'
    })
})
