import { shallow } from 'enzyme'
import React from 'react'
import Input from '.'
import { findByTestAttribute } from '../../test/TestUtils'

const setup = () => {
    return shallow(
        <Input />
    )
}
test('render without error', () => {
    const wrapper = setup()
    const mainElement = findByTestAttribute(wrapper, 'input')
    expect(mainElement.length).toBe(1)
})
test('render form without error', () => {
    const wrapper = setup()
    const formElement = findByTestAttribute(wrapper, 'input-form')
    expect(formElement.length).toBe(1)
})
test('render word input without error', () => {
    const wrapper = setup()
    const inputElement = findByTestAttribute(wrapper, 'input-form-word-input')
    expect(inputElement.length).toBe(1)
})
test('render submit button without error', () => {
    const wrapper = setup()
    const submitButton = findByTestAttribute(wrapper, 'input-form-submit-button')
    expect(submitButton.length).toBe(1)
})
test('insert text on input box change input value', () => {
    const guess = 'guess'
    const wrapper = setup()
    const inputElementBeforeChange = findByTestAttribute(wrapper, 'input-form-word-input')
    inputElementBeforeChange.simulate('change', {
        target: { 
            value: guess 
        }
    })
    const inputElementAfterChange = findByTestAttribute(wrapper, 'input-form-word-input')
    console.log(inputElementAfterChange.debug())
    expect(inputElementAfterChange.props().value).toBe(guess)
})

describe('state controller input field', () => {
    test('state updates with value of input upon change', () => {
        const guess = 'guess'

        const mockSetCurrentGuess = jest.fn()
        React.useState = jest.fn(() => ["", mockSetCurrentGuess])

        const wrapper = setup()
        const inputElement = findByTestAttribute(wrapper, 'input-form-word-input')

        const mockEvent = { target: { value: guess } }
        inputElement.simulate('change', mockEvent)

        expect(mockSetCurrentGuess).toHaveBeenCalledWith(guess)
    })
});