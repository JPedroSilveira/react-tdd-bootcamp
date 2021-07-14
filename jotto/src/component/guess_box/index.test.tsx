import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import GuessBox from '.'
import { CombinedReducers } from '../../reducer'
import { EnzymeMountWrapper, findByTestAttribute, storeFactory } from '../../test/TestUtils'

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
            <GuessBox />
        </Provider>
    )
}

describe('render', () => {
    let wrapper: EnzymeMountWrapper

    describe('success is true', () => {
        beforeEach(() => {
            wrapper = setup(successState)
        })
    
        test('renders without error', () => {
            const mainElement = findByTestAttribute(wrapper, 'guess-box')
            expect(mainElement.exists()).toBeTruthy()
        })
        test('render congrats', () => {
            const congratsComponent = findByTestAttribute(wrapper, 'guess-box-congrats')
            expect(congratsComponent.exists()).toBeTruthy()
        })
        test('does not render guess form', () => {
            const guessFormComponent = findByTestAttribute(wrapper, 'guess-box-form')
            expect(guessFormComponent.exists()).toBeFalsy()
        })
    })
    describe('success is false', () => {
        beforeEach(() => {
            wrapper = setup(unsuccessState)
        })
        test('renders without error', () => {
            const mainElement = findByTestAttribute(wrapper, 'guess-box')
            expect(mainElement.exists()).toBeTruthy()
        })
        test('render congrats', () => {
            const congratsComponent = findByTestAttribute(wrapper, 'guess-box-congrats')
            expect(congratsComponent.exists()).toBeFalsy()
        })
        test('render guess form', () => {
            const guessFormComponent = findByTestAttribute(wrapper, 'guess-box-form')
            expect(guessFormComponent.exists()).toBeTruthy()
        })
    })
})