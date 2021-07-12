import { shallow } from 'enzyme'
import React from 'react'
import Input, { InputProps } from '.'
import { clickEventArgs, EnzymeShallowWrapper, findByTestAttribute, inputEventArgs, ReactUseState } from '../../test/TestUtils'

const defaultProps: InputProps = {
    onSubmit: (guess: string) => {}
}

const setup = (props: InputProps) => {
    return shallow(
        <Input {...props}/>
    )
}

test('render without error', () => {
    const wrapper = setup(defaultProps)
    const mainElement = findByTestAttribute(wrapper, 'input')
    expect(mainElement.length).toBe(1)
})

test('render form without error', () => {
    const wrapper = setup(defaultProps)
    const formElement = findByTestAttribute(wrapper, 'input-form')
    expect(formElement.length).toBe(1)
})

test('render word input without error', () => {
    const wrapper = setup(defaultProps)
    const inputElement = findByTestAttribute(wrapper, 'input-form-word-input')
    expect(inputElement.length).toBe(1)
})

test('render submit button without error', () => {
    const wrapper = setup(defaultProps)
    const submitButton = findByTestAttribute(wrapper, 'input-form-submit-button')
    expect(submitButton.length).toBe(1)
})

test('insert text on input box change input value', () => {
    const guess = 'guess'
    const wrapper = setup(defaultProps)
    const inputElementBeforeChange = findByTestAttribute(wrapper, 'input-form-word-input')
    inputElementBeforeChange.simulate('change', {
        target: { 
            value: guess 
        }
    })
    const inputElementAfterChange = findByTestAttribute(wrapper, 'input-form-word-input')
    expect(inputElementAfterChange.props().value).toBe(guess)
})

describe('state controller input field', () => {
    let mockSetCurrentGuess = jest.fn()
    let wrapper: EnzymeShallowWrapper;
    let originalUseState: ReactUseState;

    beforeEach(() => {
        mockSetCurrentGuess.mockClear()
        originalUseState = React.useState
        React.useState = () => ["", mockSetCurrentGuess]
        wrapper = setup(defaultProps)
    })

    afterEach(() => {
        React.useState = originalUseState
    })

    test('state updates with value of input upon change', () => {
        const guess = 'guess'

        wrapper = setup(defaultProps)

        const inputElement = findByTestAttribute(wrapper, 'input-form-word-input')

        const mockEvent = inputEventArgs(guess)
        inputElement.simulate('change', mockEvent)

        expect(mockSetCurrentGuess).toHaveBeenCalledWith(guess)
    })
    test('state updates with empty value of input upon change', () => {
        const emptyGuess = ''

        wrapper = setup(defaultProps)

        const inputElement = findByTestAttribute(wrapper, 'input-form-word-input')

        const mockEvent = inputEventArgs(emptyGuess)
        inputElement.simulate('change', mockEvent)

        expect(mockSetCurrentGuess).toHaveBeenCalledWith(emptyGuess)
    })
    test('on submit button clicked clear state', () => {
        wrapper = setup(defaultProps)

        const buttonElement = findByTestAttribute(wrapper, 'input-form-submit-button')
        buttonElement.simulate('click', clickEventArgs)

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
    })
})

describe('on submit', () => {
    test('submit function with non-empty guess', () => {
        const guess = 'guess'
        
        const handleSubmit = jest.fn()
        const wrapper = setup({
            onSubmit: handleSubmit
        })

        const inputElement = findByTestAttribute(wrapper, 'input-form-word-input')

        const mockEvent = inputEventArgs(guess)
        inputElement.simulate('change', mockEvent)
        
        const buttonElement = findByTestAttribute(wrapper, 'input-form-submit-button')
        buttonElement.simulate('click', clickEventArgs)

        expect(handleSubmit).toHaveBeenCalledWith(guess)
    })
    test('submit function with empty guess', () => {     
        const emptyGuess = ''   
        const handleSubmit = jest.fn()
        const wrapper = setup({
            onSubmit: handleSubmit
        })
        
        const buttonElement = findByTestAttribute(wrapper, 'input-form-submit-button')
        buttonElement.simulate('click', clickEventArgs)

        expect(handleSubmit).toHaveBeenCalledWith(emptyGuess)
    })
})