import { shallow } from 'enzyme'
import GuessBox, { GuessBoxProps } from '.'
import { EnzymeShallowWrapper, findByTestAttribute } from '../../test/TestUtils'

const unsuccessProps: GuessBoxProps = {
    success: false
}

const successProps: GuessBoxProps = {
    success: true
}

const setup = (props: GuessBoxProps): EnzymeShallowWrapper => {
    return shallow(<GuessBox {...props} />)
}

describe('render', () => {
    let wrapper: EnzymeShallowWrapper

    describe('success is true', () => {
        beforeEach(() => {
            wrapper = setup(successProps)
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
            wrapper = setup(unsuccessProps)
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