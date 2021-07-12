import { shallow } from 'enzyme'
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
test('correct input text', () => {
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